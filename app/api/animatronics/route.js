import axios from "axios";
import { NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL + "animatronics";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const franchise = searchParams.get('franchise');
  const name = searchParams.get('name');

    try {
      if(franchise || name) {
        //tratativa das querys
        const franchiseCondition = franchise === undefined || franchise === null ? '' : `franchise=${franchise}`;
        const nameCondition = name === undefined || name === null ? '' : `name=${name}`;

        //requisição filtrada
        const response = await axios.get(`${baseUrl}?${franchiseCondition}&${nameCondition}`);
        return NextResponse.json(response.data);

      } else {
        const response = await axios.get(`${baseUrl}`);
        return NextResponse.json(response.data);
      }
    } catch(e) {
        console.log("[ORDER_GET]", e.data.errors);
        return new NextResponse(e.data.errors, { status: 500 });
    }
}

export async function POST(request) {
    const params = await request.json();
  
    try {
      const response = await axios.post(baseUrl, params);
  
      return NextResponse.json(response.data);
    } catch (e) {

      console.log("[ORDER_POST]", e.response.data.errors);
      return new NextResponse(e.response.data.errors, {status: 500});
    }
  }