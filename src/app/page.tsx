import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { Form } from "./form";

export default function Home({
  searchParams: { error },
}: {
  searchParams: { error?: string };
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center gap-16 p-4 lg:p-24">
      <div className="absolute right-1 top-1 p-4">
      <Link
        href="https://github.com/BrokenR3C0RD/internect.info"
        className="block text-gray-500 transition-colors hover:text-gray-700"
      >
        <GithubIcon
          className="inline-block"
          size={20}
        />
        This fork
      </Link>
      <Link
        href="https://github.com/mozzius/internect.info"
        className="block text-gray-500 transition-colors hover:text-gray-700"
      >
        <GithubIcon
          className="inline-block"
          size={20}
        />
        Original
      </Link>
      </div>
      <div>
        <p className="font-mono text-lg">inter.epqu.ca</p>
        <p className="font-mono text-lg italic">Based on <Link href="https://internect.info/" className="text-gray-500 transition-colors hover:text-gray-700">internect.info</Link></p>
        <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Resolve a <span className="text-[#0085ff]">Bluesky</span> handle
        </h1>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Form />
    </main>
  );
}
