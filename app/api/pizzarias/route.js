import axios from "axios";
import { NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL + "pizzerias";
console.log(baseUrl);

export const GET = async () => {
  try {
    const response = await axios.get(baseUrl);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export const POST = async (request) => {
  const params = await request.json();

  try {
    const response = await axios.post(url, params);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}