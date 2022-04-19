import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, san-serif", lineHeight: "1.4" }}>
      <h1>Mein Blog</h1>
      <Link to="/posts" className="text-xl1 text-blue-600 underline">
        Blog Posts
      </Link>
    </div>
  );
}
