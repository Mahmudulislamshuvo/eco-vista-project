import AQIComonent from "@/components/AQIComonent";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLong } from "@/lib/location-info";
import Card from "@/components/Card";

const AqiPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <AQIComonent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return (
      <Card>
        <NoLocationFound location={location} small />
      </Card>
    );
  }
};

export default AqiPage;
