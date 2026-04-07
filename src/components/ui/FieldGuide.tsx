type FieldGuideProps = {
  prompts: string[];
};

/**
 * Lightweight field-level guidance: a compact list of question prompts shown
 * below a textarea to help users know what to include. Intentionally subtle —
 * secondary text only, no border or background.
 */
export default function FieldGuide({ prompts }: FieldGuideProps) {
  if (prompts.length === 0) return null;
  return (
    <ul className="flex flex-col gap-1 mt-1">
      {prompts.map((prompt) => (
        <li key={prompt} className="flex items-start gap-1.5 text-xs text-slate-400 leading-relaxed">
          <span aria-hidden="true" className="mt-px shrink-0 text-slate-300">›</span>
          {prompt}
        </li>
      ))}
    </ul>
  );
}
