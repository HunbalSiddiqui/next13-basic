import Link from "next/link";

export default function Home() {
  return (
    <main className="py-48 px-48">
      <Link href={"/dashboard"}>Go to dashboard</Link>
    </main>
  )
}
