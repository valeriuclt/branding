// src/components/Container.tsx
import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return (
    <section
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
