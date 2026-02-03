import { useEffect } from "react";
import { title, abstract } from "../content/article";

export default function SEOHead() {
  useEffect(() => {
    document.title = `${title} | Tạp chí Quản lý nhà nước`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const desc = abstract.slice(0, 160).trim() + (abstract.length > 160 ? "…" : "");
      metaDescription.setAttribute("content", desc);
    }
  }, []);
  return null;
}
