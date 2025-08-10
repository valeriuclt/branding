// import { FC } from "react";
// import { Content } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `TextAndImage`.
//  */
// export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

// /**
//  * Component for "TextAndImage" Slices.
//  */
// const TextAndImage: FC<TextAndImageProps> = ({ slice }) => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       Placeholder component for text_and_image (variation: {slice.variation})
//       slices.
//       <br />
//       <strong>You can edit this slice directly in your code editor.</strong>
//       {/**
//        * 💡 Use Prismic MCP with your code editor
//        *
//        * Get AI-powered help to build your slice components — based on your actual model.
//        *
//        * ▶️ Setup:
//        * 1. Add a new MCP Server in your code editor:
//        *
//        * {
//        *   "mcpServers": {
//        *     "Prismic MCP": {
//        *       "command": "npx",
//        *       "args": ["-y", "@prismicio/mcp-server@latest"]
//        *     }
//        *   }
//        * }
//        *
//        * 2. Select a model optimized for coding (e.g. Claude 3.7 Sonnet or similar)
//        *
//        * ✅ Then open your slice file and ask your code editor:
//        *    "Code this slice"
//        *
//        * Your code editor reads your slice model and helps you code faster ⚡
//        * 🎙️ Give your feedback: https://community.prismic.io/t/help-us-shape-the-future-of-slice-creation/19505
//        * 📚 Documentation: https://prismic.io/docs/ai#code-with-prismics-mcp-server
//        */}
//     </section>
//   );
// };

// export default TextAndImage;

import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
 
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { ParallaxImage } from "./ParallaxImage";
import { JSX } from "react";
import { ButtonLink } from "@/components/ButtonLink"; 

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({ slice, index }: TextAndImageProps): JSX.Element => {
  
  const theme = slice.primary.theme;
  
  return ( 
<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  className={clsx(
    // Stilurile din Bounding - fără max-width pentru background full-width
     " px-4 py-8 md:px-6 md:py-16 ",
    // Stilurile originale
    "sticky top-[calc(var(--index)*1rem)]",
    theme === "Blue" && "bg-texture bg-brand-blue text-white",
    theme === "Orange" && "bg-texture bg-brand-orange text-white",
    theme === "Navy" && "bg-texture bg-brand-navy text-white",
    theme === "Lime" && "bg-texture bg-brand-lime"
  )}
  style={{ "--index": index }}
 
>
  <div className="mx-auto w-full max-w-7xl">
    <div className="  grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
      {/* <div
        className={clsx(
           " flex flex-col px-4 md:px-8 items-center gap-8  md:items-start md:text-left", // <-- padding lateral adăugat pentru desktop
          slice.variation === "imageOnLeft" && "md:order-2 md:pl-8 md:pr-0"
        )}
      > */}
       <div
      className={clsx(
        "flex flex-col gap-8 px-4 text-center md:px-0 md:text-left md:items-start",
        slice.variation === "imageOnLeft"
          ? "md:order-2 md:pl-8" // imaginea în stânga => textul are padding stânga
          : "md:pr-8"            // imaginea în dreapta => textul are padding dreapta
      )}
    >
        <SlideIn>
          <Heading className="mt-4 max-w-md text-balance text-3xl font-bold md:mt-8 md:text-4xl">
            <PrismicText field={slice.primary.heading} />
          </Heading>
         
        </SlideIn>
        
        <SlideIn>
          <div className="max-w-md text-lg leading-relaxed md:text-2xl ">
            <PrismicRichText field={slice.primary.body} />
          </div>
        </SlideIn>
        
        <SlideIn>
          <ButtonLink
            field={slice.primary.button}
            color={theme === "Lime" ? "orange" : "lime"}
            className="hero-button mt-8 md:mt-12"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </SlideIn>
      </div>
      
      <ParallaxImage
        foregroundImage={slice.primary.foreground_image}
        backgroundImage={slice.primary.background_image}
        className="max-w-full"
      />
    </div>
  </div>
</section>

);

};

export default TextAndImage;