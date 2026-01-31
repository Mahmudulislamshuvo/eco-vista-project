import { getLocationData } from "@/lib/location-info";
import Switcher from "./Switcher";

const LocationInfo = async ({ lat, lon }) => {
  const locationData = await getLocationData(lat, lon);

  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {locationData?.continent}
          </h2>
          <div className="relative">
            <Switcher />
          </div>
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {locationData?.countryName} | {locationData?.city}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{" "}
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
