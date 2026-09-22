import type { MouseEvent } from "react";
import { Link, type LinkProps, useNavigate } from "react-router";

type ScrollLinkProps = Omit<LinkProps, "to"> & {
  to: string;
};

export function ScrollLink({ to, onClick, ...props }: ScrollLinkProps) {
  const navigate = useNavigate();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const hash = to.includes("#") ? to.split("#")[1] : "";
    const targetElement = hash ? document.getElementById(hash) : null;

    if (hash === "" && window.location.pathname === to) {
      event.preventDefault();
      const initialScrollPosition = window.scrollY;
      const animationDuration = 600;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion || initialScrollPosition <= 1) {
        window.scrollTo({ top: 0, left: 0 });
        navigate(to);
        return;
      }

      let animationStartedAt: number | null = null;

      function animateScroll(currentTime: number) {
        if (animationStartedAt === null) {
          animationStartedAt = currentTime;
        }

        const progress = Math.min(
          (currentTime - animationStartedAt) / animationDuration,
          1,
        );
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        window.scrollTo({
          top: initialScrollPosition * (1 - easedProgress),
          left: 0,
        });

        if (progress === 1) {
          navigate(to);
          return;
        }

        requestAnimationFrame(animateScroll);
      }

      requestAnimationFrame(animateScroll);
      return;
    }

    if (targetElement !== null) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

  }

  return <Link to={to} onClick={handleClick} {...props} />;
}
