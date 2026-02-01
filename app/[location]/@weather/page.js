import NoLocationFound from "@/components/NoLocationFound";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/location-info";
import Card from "@/components/Card";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <WeatherComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <Card><NoLocationFound location={location} small /></Card>;
  }
};

export default WeatherPage;
