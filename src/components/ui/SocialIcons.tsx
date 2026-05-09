import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

// All icons are 24x24 viewBox, monochromatic via currentColor.
// Hand-tuned to be brand-recognizable while remaining consistent in weight.

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 21v-7.5h2.55l.38-3h-2.93V8.57c0-.87.24-1.46 1.48-1.46H16.6V4.43a20.8 20.8 0 0 0-2.27-.12c-2.25 0-3.8 1.38-3.8 3.9v2.18H7.95v3h2.58V21h2.97z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M16.5 3h-2.7v12.2a2.6 2.6 0 1 1-2.6-2.6c.22 0 .43.03.64.08V9.9a5.6 5.6 0 1 0 4.66 5.52V9.2a6.4 6.4 0 0 0 3.9 1.32V7.78a3.77 3.77 0 0 1-2.67-1.1A3.72 3.72 0 0 1 16.5 4V3z" />
    </svg>
  );
}

export function ThreadsIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.2 21c-5.8 0-8.2-3.8-8.2-9s2.4-9 8.2-9c3.9 0 6.3 1.8 7.4 4.6" />
      <path d="M8.8 14.5c0 1.5 1.3 2.5 3.4 2.5 2.3 0 3.8-1.2 3.8-3.3 0-2.3-2-3.3-4.3-3.3-1 0-2.1.2-2.9.8" />
      <path d="M15.7 11c.8.8 1.3 1.9 1.3 3.3" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.85c0-2.9-1.55-4.25-3.62-4.25-1.67 0-2.42.92-2.84 1.57V8.5H10.6c.04.85 0 11.5 0 11.5h2.94v-6.42c0-.27.02-.53.1-.72.21-.53.7-1.08 1.52-1.08 1.07 0 1.5.82 1.5 2.02V20H20v-6.15z" />
    </svg>
  );
}

export function TripAdvisorIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 5.5c2.2-1 4.9-1.5 7.5-1.5l2 2.5h-2a4 4 0 0 1-3 6.8 4 4 0 0 1-3.6-2.3L12 13l-.9-1.9A4 4 0 0 1 7.5 13.3a4 4 0 0 1-3-6.8h-2l2-2.5c2.6 0 5.3.5 7.5 1.5z"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="9.5" r="2.6" />
      <circle cx="16.5" cy="9.5" r="2.6" />
      <circle cx="7.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M9 17c1 1.2 2 1.8 3 1.8s2-.6 3-1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IfoodIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <circle cx="16.5" cy="5.5" r="2" />
      <path d="M3 8.5h3v11H3v-11z" />
      <path d="M9.5 8.5h3v11h-3v-11z" />
      <path
        d="M3 20.5c1.8 1 3.8 1.5 6 1.5s4.2-.5 6-1.5c1.8 1 3.8 1.5 6 1.5v-2.2c-1.6 0-3.2-.35-4.5-1a13 13 0 0 1-3 1 13 13 0 0 1-3-1 13 13 0 0 1-3 1 13 13 0 0 1-3-1c-.4.2-.9.35-1.5.5v1.2z"
        opacity="0.95"
      />
    </svg>
  );
}

export const SOCIAL_ICON_MAP = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
  Threads: ThreadsIcon,
  LinkedIn: LinkedInIcon,
  TripAdvisor: TripAdvisorIcon,
  iFood: IfoodIcon,
} as const;

export type SocialIconName = keyof typeof SOCIAL_ICON_MAP;
