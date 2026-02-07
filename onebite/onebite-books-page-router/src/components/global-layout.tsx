import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useEffect } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/book/1");
  }, []);
  return (
    <div>
      <header>
        <Link href={"/"}>Home</Link>&nbsp;
        <Link href={"/search"} prefetch={false}>
          Search
        </Link>
        &nbsp;
        <button
          onClick={() => {
            router.push("/book/1");
          }}
        >
          Book no.1
        </button>
        &nbsp;
      </header>
      <main>{children}</main>
      <footer>@winterlood</footer>
    </div>
  );
}
