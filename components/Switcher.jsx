"use client";

import { getLocationList } from "@/lib/location-info";
import Image from "next/image";
import { use, useState } from "react";

const Switcher = () => {
  const [locations, setLocations] = useState([]);
  const [showLocationList, setShowLocationList] = useState(false);

  use(async () => {
    const locationList = await getLocationList();
    setLocations(locationList);
  }, []);

  console.log(locations);

  return (
    <>
      <button>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={36}
          height={36}
          onClick={() => setShowLocationList(!showLocationList)}
        />
      </button>
      <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
        {showLocationList && (
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            <li>Kolkata</li>
            <li>Dhaka</li>
            <li>London</li>
            <li>Amsterdam</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Switcher;
