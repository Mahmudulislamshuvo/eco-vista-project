import AQIComonent from "@/components/AQIComonent";

const AqiPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <AQIComonent lat={latitude} lon={longitude} />;
};

export default AqiPage;
