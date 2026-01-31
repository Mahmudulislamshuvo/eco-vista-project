"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);

  // for preventing multiple detections
  const isDetectingRef = useRef(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    //    if location is already being detected or location params exist, exit early
    const hasLocation =
      searchParams.get("latitude") && searchParams.get("longitude");
    if (isDetectingRef.current || hasLocation) return;

    isDetectingRef.current = true;
    setLoading(true);
    console.log("Rendaring...");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const params = new URLSearchParams(searchParams);

        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);

        setLoading(false);

        isDetectingRef.current = false;
        router.push(`/current?${params.toString()}`);
      });
    } else {
      // if geolocation is not supported
      isDetectingRef.current = false;
      setLoading(false);
    }
  }, [searchParams, router]);

  return (
    <>
      <Image
        src="/network.gif"
        alt="network.gif"
        width={500}
        height={500}
        className="mx-auto mb-4"
      />
      <p>{loading ? "Detecting Location..." : "Location Detected"}</p>
    </>
  );
};

export default LocationDetector;
