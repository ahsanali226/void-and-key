"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-black p-6 text-center text-white">
        <h2 className="text-2xl font-bold text-amber">Something went wrong!</h2>
        <p className="mt-2 text-sm text-white/70">
          {error.message || "An unexpected global error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-amber px-6 py-2.5 font-medium text-black transition hover:bg-amber-light"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
