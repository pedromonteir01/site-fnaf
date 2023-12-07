import axios from "axios";
import { NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL + "pizzerias";
console.log(baseUrl);

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);

  const franchise = searchParams.get("franchise");

  try {
    if(franchise){
      const franchiseCondition = franchise === undefined || franchise === null ? '' : `franchise=${franchise}`
      const response = await axios.get(`${baseUrl}?${franchiseCondition}`);
    return NextResponse.json(response.data);
    }else{
      const response = await axios.get(`${baseUrl}`);
      return NextResponse.json(response.data)
    }
    
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export const POST = async (request) => {
  const params = await request.json();

  try {
    const response = await axios.post(baseUrl, params);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}