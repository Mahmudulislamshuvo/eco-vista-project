import NoLocationFound from "@/components/NoLocationFound";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import Card from "@/components/Card";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <WindComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <Card><NoLocationFound location={location} small /></Card>;
  }
};

export default WindPage;
