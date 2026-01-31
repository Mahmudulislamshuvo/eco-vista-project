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
  console.log(location, lat, lon);
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatlong = await getCoordinatesFromLocation(location);

  if (locationLatlong.latitude && locationLatlong.longitude) {
    const lat = locationLatlong.latitude;
    const lon = locationLatlong.longitude;

    return { lat, lon };
  }
};
