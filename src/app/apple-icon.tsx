import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0C0A08",
          borderRadius: "36px",
        }}
      >
        <svg
          width="130"
          height="130"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="30" cy="22" rx="14" ry="10" fill="#E8822A" transform="rotate(-20 30 22)" />
          <ellipse cx="70" cy="22" rx="14" ry="10" fill="#E8822A" transform="rotate(20 70 22)" />
          <ellipse cx="50" cy="40" rx="12" ry="10" fill="#E8822A" />
          <rect x="44" y="48" width="12" height="30" rx="6" fill="#E8822A" />
          <ellipse cx="50" cy="82" rx="10" ry="6" fill="#E8822A" />
          <line x1="42" y1="30" x2="25" y2="8" stroke="#E8822A" strokeWidth="2" strokeLinecap="round" />
          <line x1="58" y1="30" x2="75" y2="8" stroke="#E8822A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
