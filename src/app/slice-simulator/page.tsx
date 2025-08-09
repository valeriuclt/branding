import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { redirect } from "next/navigation";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams & {searchParams :{secret?:string}}) {
  if (
    process.env.SLICE_SIMULATOR_SECRET &&
    searchParams.secret !== process.env.SLICE_SIMULATOR_SECRET
  ) {
    redirect("/");
  }

  const { state } = await searchParams;
  const slices = getSlices(state);

  return (
    <SliceSimulator background="" zIndex={10}>
      <div className="max-h-[900px">
      <SliceZone slices={slices} components={components} />
      </div>
    </SliceSimulator>
  );
}
