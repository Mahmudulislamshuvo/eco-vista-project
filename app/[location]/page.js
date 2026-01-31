import LocationInfo from "@/components/LocationInfo";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLong } from "@/lib/location-info";
import React from "react";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  //

  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <LocationInfo lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NoLocationFound location={location} />;
  }
};

export default LocationPage;
