"use client";

import { getCoordinatesFromLocation } from "@/lib/location-info";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

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
    const fallbackToDefaultLocation = async () => {
      try {
        console.log("Fetching default location (Dhaka)...");

        const defaultData = await getCoordinatesFromLocation("dhaka");

        if (defaultData && defaultData.latitude && defaultData.longitude) {
          const params = new URLSearchParams(searchParams);
          params.set("latitude", defaultData.latitude);
          params.set("longitude", defaultData.longitude);

          router.push(`/current?${params.toString()}`);
        } else {
          // If API also fails, manually set (final safety)
          console.warn("API failed, using manual coordinates.");
          router.push(`/current?latitude=23.8103&longitude=90.4125`);
        }
      } catch (error) {
        console.error("Fallback error:", error);
        // If all else fails, stop loading
      } finally {
        isDetectingRef.current = false;
      }
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
