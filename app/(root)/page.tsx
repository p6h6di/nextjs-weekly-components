import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen w-3/5 flex-col items-start justify-center">
      <h1 className="mb-8 text-4xl font-semibold antialiased">
        Weekly Components
      </h1>
      <div>
        <Link
          href="infinite-horizontal-scroll"
          className="text-lg font-normal decoration-blue-500 decoration-2 underline-offset-2 antialiased hover:underline"
        >
          Infinite Horizontal Scroll Animation
        </Link>
      </div>
    </div>
  );
}
