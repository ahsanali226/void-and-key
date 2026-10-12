import { NextResponse } from "next/server";

interface BookingSubmission {
    client_name?: string;
    client_email?: string;
    client_notes?: string;
    meeting_type?: string;
    meeting_date?: string;
    meeting_time?: string;
    timezone?: string;
}

export async function POST(request: Request) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
        return NextResponse.json(
            { error: "Booking service is not configured." },
            { status: 500 },
        );
    }

    let body: BookingSubmission;
    try {
        body = (await request.json()) as BookingSubmission;
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const client_name = body.client_name?.trim();
    const client_email = body.client_email?.trim();
    const client_notes = body.client_notes?.trim() || null;
    const meeting_type = body.meeting_type?.trim();
    const meeting_date = body.meeting_date?.trim();
    const meeting_time = body.meeting_time?.trim();
    const timezone = body.timezone?.trim() || null;

    if (!client_name || !client_email || !meeting_type || !meeting_date || !meeting_time) {
        return NextResponse.json(
            { error: "Name, email, meeting type, date, and time are required." },
            { status: 400 },
        );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(client_email);
    if (!emailIsValid) {
        return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
        method: "POST",
        headers: {
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
        },
        body: JSON.stringify({
            client_name,
            client_email,
            client_notes,
            meeting_type,
            meeting_date,
            meeting_time,
            timezone,
        }),
        cache: "no-store",
    });

    if (!response.ok) {
        const upstreamError = await response.text();
        console.error("Supabase booking submission failed", upstreamError);
        return NextResponse.json(
            {
                error:
                    process.env.NODE_ENV === "development"
                        ? `Supabase error: ${upstreamError}`
                        : "We could not save your booking. Please try again.",
            },
            { status: 502 },
        );
    }

    return NextResponse.json({ success: true });
}
