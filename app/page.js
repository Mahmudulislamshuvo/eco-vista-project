import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LocationDetector />
      </Suspense>
    </div>
  );
};

export default Home;
