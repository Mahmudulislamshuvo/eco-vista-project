"use client";

import { getLocationList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

const Switcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const locations = use(getLocationList());

  const filteredLocations = locations
    .filter((loc) =>
      loc.location.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .slice(0, 5);

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
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="text"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Search location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Location list */}
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc, i) => (
                <li key={i}>
                  <Link
                    href={`/${loc.location}?latitude=${loc.latitude}&longitude=${loc.longitude}`}
                    onClick={() => setShowLocationList(false)}
                    className="block hover:bg-gray-50 px-2 rounded"
                  >
                    {loc.location}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-center text-gray-500 text-sm py-2">
                No location found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Switcher;
