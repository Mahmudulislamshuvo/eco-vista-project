"use client";

import { getLocationList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

const Switcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const locations = use(getLocationList());

  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={36}
          height={36}
        />
      </button>
      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.map((loc, i) => (
              <li key={i}>
                <Link
                  href={`/${loc.location}?latitude=${loc.latitude}&longitude=${loc.longitude}`}
                >
                  {loc.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Switcher;
