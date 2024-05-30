
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>
    <h1>HomePage</h1>
    <Link href="/loginpage">Login</Link>
    <Link href="/post">Post a Job</Link>
  </div>
    </main>
  );
}
