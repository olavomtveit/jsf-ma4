import Link from "next/link";

export default function Heading({ content }) {
  return (
    <>
      <header className="app-header">
        <nav>
          <span>
            <b>{content}</b>
          </span>{" "}
          | <Link href="/">Home</Link> | <Link href="/results">Results</Link> |{" "}
          <Link href="/about-us">About us</Link>
        </nav>
      </header>
    </>
  );
}
