"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);
  const isDetectingRef = useRef(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const hasLocation =
      searchParams.get("latitude") && searchParams.get("longitude");
    if (isDetectingRef.current || hasLocation) return;

    isDetectingRef.current = true;
    setLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        // if permission granted (Success Case)
        (position) => {
          const params = new URLSearchParams(searchParams);
          params.set("latitude", position.coords.latitude);
          params.set("longitude", position.coords.longitude);

          setLoading(false);
          isDetectingRef.current = false;
          router.push(`/current?${params.toString()}`);
        },
        // if permission denied or error occurs (Error/Fallback Case)
        (error) => {
          console.error("Location permission denied or error:", error);

          const params = new URLSearchParams(searchParams);

          // set default location to Dhaka, Bangladesh
          params.set("latitude", "23.8103");
          params.set("longitude", "90.4125");

          setLoading(false);
          isDetectingRef.current = false;

          //  Redirect to the current location page with default coordinates
          router.push(`/current?${params.toString()}`);
        },
      );
    } else {
      isDetectingRef.current = false;
      setLoading(false);
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
      <p className="text-white text-xl font-semibold">
        {loading ? "Detecting Location..." : "Location Detected"}
      </p>
    </div>
  );
};

export default LocationDetector;
