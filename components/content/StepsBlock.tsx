import type { SectionStep } from "@/types/content";

type StepsBlockProps = {
  steps: SectionStep[];
};

export function StepsBlock({ steps }: StepsBlockProps) {
  return (
    <ol className="cg-visual cg-visual--steps">
      {steps.map((step, index) => (
        <li key={step.label}>
          <span className="cg-visual__step-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="cg-visual__step-body">
            <strong>{step.label}</strong>
            <span>{step.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
