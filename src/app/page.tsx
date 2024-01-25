// @ts-ignore

import ExploreCollections from "@/components/ExploreCollections";
import Hero from "@/components/Hero";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div>
      <div className="relative">
      <Hero/>
      <ExploreCollections/>
      </div>

    </div>
  );
}
