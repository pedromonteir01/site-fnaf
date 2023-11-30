import axios from "axios";
import { NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL + "animatronics";
console.log(baseUrl);

export async function GET() {
    try {
        const response = await axios.get(baseUrl);
        return NextResponse.json(response.data);
    } catch(e) {
        console.log("[ORDER_GET]", e);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function POST(request) {
    const params = await request.json();
  
    try {
      const response = await axios.post(baseUrl, params);
  
      return NextResponse.json(response.data);
    } catch (e) {
      console.log("[ORDER_POST]", e);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }