"use client";

import dynamic from "next/dynamic";

const F1LoaderClient = dynamic(
  () => import("./F1Loader").then((m) => m.F1Loader),
  { ssr: false, loading: () => null }
);

export { F1LoaderClient as F1LoaderDynamic };
