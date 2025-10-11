import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // 👈 بنجيب id من الـ URL

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog Post #{id}</h1>
      <p>
        This is the detailed content for blog post number <strong>{id}</strong>.
      </p>
    </div>
  );
}
