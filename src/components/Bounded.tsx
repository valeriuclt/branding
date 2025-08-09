// import clsx from "clsx"; 
// type BoundedProps = {
//   as?: React.ElementType;
//   className?: string;
//   children: React.ReactNode;
// };

// export const Bounded = ({
//   as: Comp = "section",
//   className,
//   children,
//   ...restProps
// }: BoundedProps) => {
//   return (
//     <Comp
//       className={clsx("px-4 first:pt-10 md:px-6", className)}
//       {...restProps }
//     >
//       <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
//         {children}
//       </div>
//     </Comp>
//   );
// };
// src/components/Bounded.tsx
import React, { JSX } from "react";
import clsx from "clsx";

/**
 * Helper pentru props ale unui element generic
 */
type PropsOf<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;

/**
 * Polymorphic props: suprascriem children explicit cu ReactNode
 */
export type BoundedProps<T extends React.ElementType = "section"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<PropsOf<T>, "as" | "className" | "children">;

/**
 * Tipul expus consumatorilor: generic, păstrează verificările
 */
type BoundedComponent = <T extends React.ElementType = "section">(
  props: BoundedProps<T>
) => JSX.Element;

/**
 * Implementarea: folosim any intern pentru a evita problema de inferență
 * (asta nu afectează API-ul tipizat expus consumatorilor)
 */
export const Bounded: BoundedComponent = (props) => {
  // cast la any intern — evită inferența greșită a T în timpul compilării JSX
  const { as, className, children, ...rest } = props as any;

  // Comp e any astfel încât JSX-ul <Comp> să nu declanșeze erori de tip children = never
  const Comp = (as ?? "section") as any;

  return (
    <Comp className={clsx("px-4 first:pt-10 md:px-6", className)} {...rest}>
      {children}
    </Comp>
  );
};
