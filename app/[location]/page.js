import Card from "@/components/Card";
import LocationInfo from "@/components/LocationInfo";
import NoLocationFound from "@/components/NoLocationFound";
import { getResolvedLatLong } from "@/lib/location-info";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  //

  const resolve = await getResolvedLatLong(location, latitude, longitude);

  if (resolve?.lat && resolve?.lon) {
    return <LocationInfo lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return (
      <Card>
        <NoLocationFound location={location} small />
      </Card>
    );
  }
};

export default LocationPage;
