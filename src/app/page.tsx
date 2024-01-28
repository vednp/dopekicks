import ExploreCollections from "@/components/ExploreCollections";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <div className="relative">
        <Hero />
        <ExploreCollections />
      </div>
    </div>
  );
}
