import NoLocationFound from "@/components/NoLocationFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import Card from "@/components/Card";

const TempperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <TemperatureComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <Card><NoLocationFound location={location} small /></Card>;
  }
};

export default TempperaturePage;
