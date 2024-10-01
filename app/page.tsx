import Dynamic from "@/components/dynamic";
import Loading from "@/components/loading";
import { Suspense } from "react";

export const experimental_ppr = true;

export default function Home() {
  return (
    <div>
      <div>This is a navbar, static content</div>
      <Suspense fallback={<Loading />}>
        <Dynamic />
      </Suspense>
      {/* <Dynamic /> */}
    </div>
  );
}
