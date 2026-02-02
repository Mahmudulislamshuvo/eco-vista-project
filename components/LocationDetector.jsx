"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const LocationDetector = () => {
  const isDetectingRef = useRef(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // if location is already detected or in process, do nothing
    const hasLocation =
      searchParams.get("latitude") && searchParams.get("longitude");

    if (isDetectingRef.current || hasLocation) return;

    isDetectingRef.current = true;

    // define a fallback function to get default location
    const fallbackToDefaultLocation = () => {
      router.push(`/dallas`);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        //  Success Case
        (position) => {
          const params = new URLSearchParams(searchParams);
          params.set("latitude", position.coords.latitude);
          params.set("longitude", position.coords.longitude);

          isDetectingRef.current = false;
          router.push(`/current?${params.toString()}`);
        },
        //  Error Case
        (error) => {
          console.error("Geolocation blocked/failed:", error.message);
          // Here we call the fallback function
          fallbackToDefaultLocation();
        },
      );
    } else {
      fallbackToDefaultLocation();
    }
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/network.gif"
        alt="Loading..."
        width={500}
        height={500}
        className="mx-auto mb-4"
      />
    </div>
  );
};

export default LocationDetector;
