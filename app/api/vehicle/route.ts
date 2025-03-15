import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { regNumber } = await req.json();
  
  try {
    const response = await axios.get(
      `https://akfell-datautlevering.atlas.vegvesen.no/enkeltoppslag/kjoretoydata?kjennemerke=${regNumber}`,
      {
        headers: {
          'SVV-Authorization': process.env.CAR_API,
        }
      }
    );
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch vehicle data' },
      { status: 500 }
    );
  }
}
