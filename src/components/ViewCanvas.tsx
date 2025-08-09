"use client"

import { Canvas } from "@react-three/fiber"
 
import { View } from "@react-three/drei"
import { Suspense } from "react"
import dynamic from "next/dynamic";
// import {Perf} from "r3f-perf"

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);
// type Props = {}
export default function ViewCanvas()  {
  return (
    <>
     <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 30,
        }}
         shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{ fov: 30, }}
      > 
      {/* <Float
      speed={1} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.1, 0.1]}
      >

      <SodaCan />
      </Float> */}
     {/* <FloatingCan />
      <Environment files={"/hdr/lobby.hdr" } environmentIntensity={1.5} /> */}
      {/* <ambientLight intensity={2} />
      <spotLight intensity={3} position={[1,1,1]} /> */}
    
  <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
</>
  )
}