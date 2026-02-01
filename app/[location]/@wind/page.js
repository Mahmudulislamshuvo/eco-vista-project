import NoLocationFound from "@/components/NoLocationFound";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <WindComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NoLocationFound location={location} />;
  }
};

export default WindPage;
