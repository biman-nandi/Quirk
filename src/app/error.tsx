"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-4xl">
        ⚠️
      </div>

      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-600">
        Something went wrong
      </p>

      <h1 className="mb-3 text-3xl font-bold tracking-tight">
        Oops! Something broke.
      </h1>

      <p className="mb-8 max-w-md text-gray-500">
        We encountered an unexpected error.
        Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-emerald-800 px-6 py-3 text-white transition hover:bg-emerald-900"
      >
        Try Again
      </button>
    </div>
  );
}