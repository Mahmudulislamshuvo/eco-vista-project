import { cache } from "react";

export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${process.env.B_DATA_API_KEY}`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocationList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getCoordinatesFromLocation = async (locationName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`,
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getResolvedLatLong = async (location, lat, lon) => {
  // console.log("getResolvedLatLong - initial:", { location, lat, lon });
  if (lat && lon) {
    // console.log("getResolvedLatLong - returning from initial lat/lon:", {
    //   lat,
    //   lon,
    // });
    return { lat, lon };
  }

  const locationLatlong = await getCoordinatesFromLocation(location);
  // console.log("getResolvedLatLong - from getCoordinatesFromLocation:", locationLatlong);

  if (locationLatlong?.latitude && locationLatlong?.longitude) {
    const resolvedLat = locationLatlong.latitude;
    const resolvedLon = locationLatlong.longitude;
    // console.log("getResolvedLatLong - returning from resolved API call:", { lat: resolvedLat, lon: resolvedLon });
    return { lat: resolvedLat, lon: resolvedLon };
  }
  // console.log("getResolvedLatLong - no lat/lon resolved, returning undefined");
  return undefined; // Explicitly return undefined if no coordinates are resolved
};
