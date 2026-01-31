import { NextResponse } from "next/server";
import { getLocationByName } from "../location-utils";

export async function GET(_request, { params }) {
  const { name } = params;

  try {
    const singleLocation = getLocationByName(name);

    // if (!singleLocation) {
    //   return NextResponse.json(
    //     { message: "Location not found" },
    //     { status: 404 },
    //   );
    // }
    return NextResponse.json(singleLocation);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
