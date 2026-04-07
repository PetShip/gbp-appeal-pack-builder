/**
 * StepIllustration — recurring abstract editorial figure
 *
 * A minimal geometric human-like figure with document motifs that evolves
 * through each step of the builder flow. Same character, different scene.
 *
 * Style: calm, professional, abstract — no cartoons, no expressions.
 */

type IllustrationVariant =
  | "landing"
  | "dispute-type"
  | "case-basics"
  | "evidence"
  | "review"
  | "export";

type StepIllustrationProps = {
  variant: IllustrationVariant;
  className?: string;
};

// Shared palette — RAL 200 20 23 (H=200°, #00393b at shade 600)
const I = "#002a2c"; // teal-700
const I2 = "#146365"; // teal-500
const I3 = "#85b3b4"; // teal-300
const I4 = "#daecec"; // teal-100
const IN = "#001414"; // teal-900
const S2 = "#e2e8f0"; // slate-200
const S4 = "#94a3b8"; // slate-400
const S5 = "#f1f5f9"; // slate-50
const W = "#ffffff";
const EM = "#00393b"; // teal-600 (primary accent)

// ── Reusable primitives ──────────────────────────────────────────────────────

function Head({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r={9} fill={I} />;
}

function Body({ x, y }: { x: number; y: number }) {
  return <rect x={x} y={y} width={18} height={24} rx={3} fill={I} />;
}

function Leg({ x, y }: { x: number; y: number }) {
  return <rect x={x} y={y} width={7} height={13} rx={3.5} fill={IN} />;
}

function Arm({ x, y, w, flip }: { x: number; y: number; w: number; flip?: boolean }) {
  return (
    <rect
      x={flip ? x - w : x}
      y={y}
      width={w}
      height={5}
      rx={2.5}
      fill={I2}
    />
  );
}

function DocCard({
  x,
  y,
  w = 28,
  h = 36,
  tilt = 0,
  fill = W,
  stroke = S2,
  lines = 2,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  tilt?: number;
  fill?: string;
  stroke?: string;
  lines?: number;
}) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const lineEls = [];
  for (let i = 0; i < lines; i++) {
    lineEls.push(
      <rect
        key={i}
        x={x + 5}
        y={y + 12 + i * 7}
        width={w - 10 - (i === lines - 1 ? 6 : 0)}
        height={2.5}
        rx={1.25}
        fill={S4}
        opacity={0.45}
      />
    );
  }
  return (
    <g transform={tilt !== 0 ? `rotate(${tilt},${cx},${cy})` : undefined}>
      <rect x={x} y={y} width={w} height={h} rx={3} fill={fill} stroke={stroke} strokeWidth={1.5} />
      <path d={`M${x + w - 8} ${y}L${x + w} ${y + 8}L${x + w - 8} ${y + 8}Z`} fill={stroke} opacity={0.35} />
      {lineEls}
    </g>
  );
}

function Line({
  x1, y1, x2, y2, dashed,
}: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={I3}
      strokeWidth={1.5}
      strokeDasharray={dashed ? "4 3" : undefined}
      strokeLinecap="round"
    />
  );
}

// ── Scene compositions ───────────────────────────────────────────────────────

function LandingScene() {
  return (
    <>
      <DocCard x={8}   y={20} tilt={-18} fill={I4} stroke={I3} lines={2} />
      <DocCard x={130} y={14} tilt={22}  fill={S5} stroke={S2} lines={3} />
      <DocCard x={60}  y={6}  tilt={8}   fill={W}  stroke={S2} lines={2} />
      <DocCard x={104} y={55} tilt={-12} fill={I4} stroke={I3} lines={2} />
      <DocCard x={18}  y={76} tilt={15}  fill={W}  stroke={S2} lines={3} />
      <Head cx={88} cy={42} />
      <Body x={79} y={54} />
      <Arm x={79} y={62} w={17} flip />
      <Arm x={97} y={62} w={17} />
      <Leg x={80} y={79} />
      <Leg x={90} y={79} />
    </>
  );
}

function DisputeTypeScene() {
  return (
    <>
      <rect x={6}   y={30} width={32} height={20} rx={4} fill={I4}  stroke={I3} strokeWidth={1.2} />
      <rect x={6}   y={56} width={32} height={20} rx={4} fill={S5}  stroke={S2} strokeWidth={1.2} />
      <rect x={130} y={30} width={32} height={20} rx={4} fill={S5}  stroke={S2} strokeWidth={1.2} />
      <rect x={130} y={56} width={32} height={20} rx={4} fill={S5}  stroke={S2} strokeWidth={1.2} />
      <rect x={6}   y={30} width={32} height={20} rx={4} fill={I2}  opacity={0.15} />
      <rect x={8}   y={32} width={8}  height={3}  rx={1.5} fill={I} opacity={0.6} />
      <DocCard x={72} y={14} w={24} h={30} fill={W} stroke={I3} lines={2} />
      <Head cx={88} cy={58} />
      <Body x={79} y={70} />
      <Arm x={56} y={74} w={23} />
      <Arm x={97} y={80} w={14} />
      <Leg x={80} y={91} />
      <Leg x={90} y={91} />
    </>
  );
}

function CaseBasicsScene() {
  return (
    <>
      <rect x={52} y={76} width={64} height={10} rx={3} fill={I3} />
      <rect x={58} y={63} width={52} height={10} rx={3} fill={I2} opacity={0.7} />
      <rect x={64} y={50} width={40} height={10} rx={3} fill={I}  opacity={0.5} />
      <rect x={70} y={37} width={28} height={10} rx={3} fill={IN} opacity={0.4} />
      <rect x={56} y={79} width={18} height={2.5} rx={1.25} fill={W} opacity={0.5} />
      <rect x={62} y={66} width={14} height={2.5} rx={1.25} fill={W} opacity={0.5} />
      <Head cx={84} cy={26} />
      <Body x={75} y={38} />
      <Arm x={58} y={45} w={17} />
      <Arm x={93} y={45} w={17} />
    </>
  );
}

function EvidenceScene() {
  return (
    <>
      <DocCard x={4}   y={22} w={30} h={38} fill={W}  stroke={S2} lines={3} />
      <DocCard x={76}  y={8}  w={30} h={38} fill={I4} stroke={I3} lines={2} />
      <DocCard x={134} y={28} w={30} h={36} fill={W}  stroke={S2} lines={3} />
      <Line x1={80} y1={68} x2={28}  y2={50} dashed />
      <Line x1={88} y1={68} x2={91}  y2={46} />
      <Line x1={96} y1={68} x2={150} y2={52} dashed />
      <Head cx={88} cy={57} />
      <Body x={79} y={69} />
      <Leg x={80} y={90} />
      <Leg x={90} y={90} />
    </>
  );
}

function ReviewScene() {
  const rowYs = [48, 62, 76, 90];
  return (
    <>
      <rect x={20} y={26} width={128} height={76} rx={6} fill={W}   stroke={S2} strokeWidth={1.5} />
      <rect x={20} y={26} width={128} height={14} rx={6} fill={I} />
      <rect x={20} y={33} width={128} height={7}  fill={IN} opacity={0.4} />
      <rect x={28} y={29} width={22}  height={3}  rx={1.5} fill={W} opacity={0.7} />
      {rowYs.map((y) => (
        <g key={y}>
          <rect x={28} y={y} width={40} height={2.5} rx={1.25} fill={S4} opacity={0.4} />
          <rect x={76} y={y} width={60} height={2.5} rx={1.25} fill={S4} opacity={0.3} />
        </g>
      ))}
      <circle cx={136} cy={102} r={11} fill={EM} />
      <path d="M130 102 L134 107 L143 96" stroke={W} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Head cx={12} cy={34} />
      <Body x={3} y={46} />
      <Arm x={21} y={53} w={10} />
      <Arm x={3}  y={53} w={4}  flip />
      <Leg x={4}  y={69} />
      <Leg x={13} y={69} />
    </>
  );
}

function ExportScene() {
  return (
    <>
      <DocCard x={52} y={22} w={64} h={78} fill={W} stroke={S2} lines={4} />
      <rect x={52} y={22} width={64} height={16} rx={3} fill={I} />
      <rect x={52} y={31} width={64} height={7}  fill={IN} opacity={0.4} />
      <rect x={60} y={26} width={30} height={3}  rx={1.5}  fill={W} opacity={0.75} />
      <rect x={60} y={33} width={20} height={2.5} rx={1.25} fill={W} opacity={0.45} />
      <circle cx={105} cy={96} r={12} fill="none" stroke={I3} strokeWidth={2} />
      <circle cx={105} cy={96} r={7}  fill={I2} />
      <path d="M100 96 L103.5 100 L111 91" stroke={W} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x={56} y={108} width={56} height={16} rx={4} fill={I} />
      <path d="M84 113 L84 119 M80 116 L84 120 L88 116" stroke={W} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x={92} y={115} width={14} height={2.5} rx={1.25} fill={W} opacity={0.7} />
      <Head cx={30} cy={52} />
      <Body x={21} y={64} />
      <Arm x={8}  y={68} w={13} />
      <Arm x={39} y={66} w={14} />
      <Leg x={22} y={85} />
      <Leg x={32} y={85} />
    </>
  );
}

const SCENES: Record<IllustrationVariant, () => React.ReactElement> = {
  landing:        LandingScene,
  "dispute-type": DisputeTypeScene,
  "case-basics":  CaseBasicsScene,
  evidence:       EvidenceScene,
  review:         ReviewScene,
  export:         ExportScene,
};

export default function StepIllustration({ variant, className = "" }: StepIllustrationProps) {
  const Scene = SCENES[variant];
  return (
    <svg
      viewBox="0 0 168 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <Scene />
    </svg>
  );
}
