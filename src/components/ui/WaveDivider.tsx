interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export function WaveDivider({ flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block h-[40px] w-full lg:h-[54px]"
      >
        <path
          d="M0 22C120 8 240 0 360 4C480 8 600 28 720 34C840 40 960 32 1080 24C1200 16 1320 8 1380 6L1440 4V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"
          className="fill-surface"
        />
      </svg>
    </div>
  );
}
