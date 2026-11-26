import type { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`w-full my-6 md:my-8 ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-heading text-left w-full mb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
