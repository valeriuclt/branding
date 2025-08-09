import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
  color?: "orange" | "purple" | "lime";
  size?: "sm" | "md" | "lg";
  };

export default function Button({ buttonLink, buttonText, className,  color = "orange",
  size = "md" }: Props) {
  return (
    <PrismicNextLink
      // className={clsx(
      //   "rounded-xl bg-green-800 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
      //   className,
      // )}
       className={clsx(
              "button-cutout group mx-4 inline-flex items-center bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom",
              size === "sm" && "gap-2.5 py-2 text-base",
              size === "md" && "gap-3 px-1 text-lg ~py-2.5/3",
              size === "lg" && "~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4",
              color === "orange" &&
                "from-brand-orange to-brand-lime text-black hover:text-black",
              color === "purple" &&
                "from-brand-purple to-brand-lime text-white hover:text-black",
              color === "lime" && "from-brand-lime to-brand-orange text-black",
              className
            )}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
}