import React from "react";

export default function NotFoundPage() {
  return (
    <main className=" bg-white text-gray-800 px-6 md:px-10 lg:px-14 py-16 flex flex-col items-center">
      {/* Logo */}
      <header className="flex flex-col items-center text-center mb-12">
        <h1 className="font-[Bebas_Neue] text-6xl sm:text-7xl text-gray-900 uppercase mb-4">
          404
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">
          Oops! The page you are looking for cannot be found.
        </p>
      </header>

      {/* Info Section */}
      <section className="max-w-4xl text-center">
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          It looks like the URL you entered doesn’t exist or has been moved.
          Please check the address or return to the homepage.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-semibold shadow-md transition"
        >
          Go to Homepage
        </a>
      </section>

    </main>
  );
}
