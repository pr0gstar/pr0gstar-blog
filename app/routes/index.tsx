import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, san-serif", lineHeight: "1.4" }}>
      <h1>Mein Blog</h1>
      <Link to="/posts" className="text-xl1 text-blue-600 underline">
        Blog Posts
      </Link>
      <br />
      <Link to="/admin" className="text-xl1 text-red-600 underline">
        Admin
      </Link>
    </div>
  );
}
