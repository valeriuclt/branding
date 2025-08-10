"use client"
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react"; 
import Scene from "./Scene";
import { View } from "@react-three/drei";


/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive: FC<SkyDiveProps> = ({ slice }) => {
  return (
  <section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  className="skydive h-screen"
>
  <h2 className="sr-only">{slice.primary.sentence}</h2>
  <View className="h-screen w-screen">
    <Scene
      flavor={slice.primary.flavor}
      sentence={slice.primary.sentence}
    />
  </View>
</section>
  );
};

export default SkyDive;
 