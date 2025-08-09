// import { FC } from "react";
// import { Content } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `AlternatingText`.
//  */
// export type AlternatingTextProps =
//   SliceComponentProps<Content.AlternatingTextSlice>;

// /**
//  * Component for "AlternatingText" Slices.
//  */
// const AlternatingText: FC<AlternatingTextProps> = ({ slice }) => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       Placeholder component for alternating_text (variation: {slice.variation})
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

// export default AlternatingText;

"use client";

import { Bounded } from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";
import { JSX } from "react";

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {slice.primary.text_group.map((item, index) => (
            <div
              key={asText(item.heading)}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",

                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  <PrismicText field={item.heading} />
                </h2>
                <div className="mt-4 text-2xl">
                  <PrismicRichText field={item.body} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;