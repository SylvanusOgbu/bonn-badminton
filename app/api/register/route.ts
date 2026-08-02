import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { error } = await supabaseAdmin.from("members").insert([
      {
        first_name: body.firstName,
        surname: body.surname,
        nickname: body.nickname,
        skill_level: body.level,
        has_racket: body.racket === "Yes",
        has_shuttles: body.shuttles === "Yes",
        supports_shuttles: body.support === "Yes",
        split_payment: body.payment === "Yes",
        hangout_interest: body.hangout,
        notes: body.notes,
      },
    ]);

    if (error) {
      console.error(error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}