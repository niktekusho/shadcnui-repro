import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-2 leading-6 px-8 py-4">
      <h1 className="text-3xl font-semibold leading-10">
        Shadcn reproduction issues
      </h1>
      <p>
        Shadcn Reproduction Issues This repository serves as a collection of
        reproducible cases for issues encountered while using Shadcn. It
        includes minimal examples and detailed steps to help diagnose and
        resolve bugs efficiently.
      </p>
      <h2 className="font-bold pt-8">Issues discovered:</h2>
      <ul className="list-disc list-inside">
        <li>
          <Link prefetch href={"/command/command-dialog"} className="underline">
            Default CommandDialog built into shadcn is missing required
            children.
          </Link>
        </li>
      </ul>
    </main>
  );
}
