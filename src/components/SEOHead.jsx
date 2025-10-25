import { useEffect } from "react";

export default function SEOHead() {
  useEffect(() => {
    document.title = "Điện Biên Phủ Trên Không 1972 - Chiến Thắng Lịch Sử";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Khám phá câu chuyện lịch sử về chiến dịch Điện Biên Phủ trên không tháng 12/1972 - Chiến thắng vĩ đại của quân và dân Hà Nội trước B-52 Mỹ."
      );
    }
  }, []);
  return null;
}
