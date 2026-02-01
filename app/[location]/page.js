import LocationInfo from "@/components/LocationInfo";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  //

  return <LocationInfo lat={latitude} lon={longitude} />;
};

export default LocationPage;
