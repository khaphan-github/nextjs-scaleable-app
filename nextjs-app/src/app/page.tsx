"use client"
import Link from "next/link";
import { useCustomTheme } from "@/context/theme.context";

export default function Page() {
  const { theme, toggleTheme } = useCustomTheme();

  return (
    <div className="p-4 text-center" style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <nav>
        <Link href="/">Go Home</Link> <br />
        <Link href="/category">Go to category</Link> <br />
        <Link href="/blog">Go to blog</Link> <br />
        <Link href="/feed">Go to demo intercepting routes</Link> <br />
        <Link href="/landingpage">Go to landing page</Link> <br />
        <Link href="/use-query">Go to Use query</Link> <br />
      </nav>
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}
