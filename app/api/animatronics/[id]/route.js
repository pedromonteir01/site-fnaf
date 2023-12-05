import axios from "axios";
import { NextResponse } from "next/server";

const baseUrl = process.env.BASE_URL + "animatronics";
console.log(baseUrl);

export async function GET(request, { params }) {
  const { id } = params;

    try {
        const response = await axios.get(`${baseUrl}/${id}`);

        return NextResponse.json(response.data);
    } catch(e) {
        console.log("[ORDER_GET]", e);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
  
    try {
      const response = await axios.put(`${baseUrl}/${id}`, body);
  
      return NextResponse.json(response.data);
    } catch (e) {
      console.log("[ORDER_POST]", e);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }

  export async function DELETE(request, { params }) {
    const { id } = params;

    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
  
      return NextResponse.json(response.data);
    } catch (e) {
      console.log("[ORDER_POST]", e);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }