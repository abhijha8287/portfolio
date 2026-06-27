"use client";

import dynamic from "next/dynamic";

export const NeuralFieldLazy = dynamic(
  () => import("@/components/three/neural-field").then((m) => m.NeuralField),
  { ssr: false }
);
