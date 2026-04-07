import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ProofPack — Build dispute-ready evidence packs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#059669",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 22 22"
            fill="none"
          >
            <rect x="3" y="5" width="13" height="15" rx="2" fill="#daecec" />
            <rect x="6" y="2" width="13" height="15" rx="2" fill="#b8d4d5" />
            <rect x="1" y="7" width="13" height="13" rx="2" fill="#00393b" />
            <rect x="4" y="11" width="7" height="1.5" rx="0.75" fill="white" opacity="0.9" />
            <rect x="4" y="14" width="5" height="1.5" rx="0.75" fill="white" opacity="0.6" />
          </svg>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            ProofPack
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Build a{" "}
          <span style={{ color: "#059669" }}>dispute-ready</span>
          {" "}evidence pack
        </div>

        {/* Sub-headline */}
        <div
          style={{
            fontSize: 26,
            color: "#64748b",
            textAlign: "center",
            maxWidth: 780,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          Organized, structured, and formatted for Stripe chargebacks —
          in under 10 minutes.
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Guided builder", "Auto-generated timeline", "PDF export"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#ecfdf5",
                border: "1.5px solid #a7f3d0",
                borderRadius: 40,
                padding: "10px 20px",
                fontSize: 18,
                fontWeight: 600,
                color: "#065f46",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7l3.5 3.5 5.5-7"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {label}
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 80,
            fontSize: 18,
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          proofpack.pro
        </div>
      </div>
    ),
    { ...size }
  );
}
