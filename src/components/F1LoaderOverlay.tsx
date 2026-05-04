"use client";

import { useState } from "react";
import { F1LoaderDynamic } from "./F1LoaderDynamic";

export function F1LoaderOverlay() {
  const [done, setDone] = useState(false);
  if (done) return null;
  return <F1LoaderDynamic onDone={() => setDone(true)} />;
}
