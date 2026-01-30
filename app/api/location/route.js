import { NextResponse } from "next/server";
import { getLocations } from "./location-utils";

export async function GET(_request) {
  const locationsData = getLocations();

  return NextResponse.json(locationsData);
}
