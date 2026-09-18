import { NextResponse } from "next/server";

interface ContactSubmission {
    name?: string;
    email?: string;
    service?: string;
    message?: string;
}

export async function POST(request: Request) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
        return NextResponse.json(
            { error: "Contact service is not configured." },
            { status: 500 },
        );
    }

    let body: ContactSubmission;
    try {
        body = (await request.json()) as ContactSubmission;
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const service = body.service?.trim() || null;
    const message = body.message?.trim();

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Name, email, and project details are required." },
            { status: 400 },
        );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
        return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, service, message }),
        cache: "no-store",
    });

    if (!response.ok) {
        const upstreamError = await response.text();
        console.error("Supabase contact submission failed", upstreamError);
        return NextResponse.json(
            {
                error:
                    process.env.NODE_ENV === "development"
                        ? `Supabase error: ${upstreamError}`
                        : "We could not send your inquiry. Please try again.",
            },
            { status: 502 },
        );
    }

    return NextResponse.json({ success: true });
}
