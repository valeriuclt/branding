// import { CSSProperties, ElementType, ReactNode } from "react";
// import clsx from "clsx";

// type BoundedProps = {
//   as?: ElementType;
//   className?: string;
//   style?: CSSProperties;
//   children: ReactNode;
// };

// export function Bounding({
//   as: Comp = "section",
//   className,
//   children,
//   ...restProps
// }: BoundedProps) {
//   return (
//     <Comp
//       className={clsx(
//         "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
//         className
//       )}
//       {...restProps}
//     >
//       <div className="mx-auto w-full max-w-6xl">{children}</div>
//     </Comp>
//   );
// }
import { CSSProperties, ElementType, ReactNode, ComponentPropsWithoutRef, JSX } from "react";
import clsx from "clsx";

type PropsOf<T extends ElementType> = ComponentPropsWithoutRef<T>;

type BoundingProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<PropsOf<T>, "as" | "className" | "style" | "children">;

type BoundingComponent = <T extends ElementType = "section">(
  props: BoundingProps<T>
) => JSX.Element;

export const Bounding: BoundingComponent = (props) => {
  const { as, className, children, ...restProps } = props as any;
  const Comp = (as ?? "section") as any;

  return (
    <Comp
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
};
