import TemperatureComponent from "@/components/TemperatureComponent";

const TempperaturePage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <TemperatureComponent lat={latitude} lon={longitude} />;
};

export default TempperaturePage;
