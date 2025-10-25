import { FaTrophy, FaBook } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

export default function Victory() {
  return (
    <AnimatedSection
      id="victory"
      className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-white/80 font-bold">
          Chương 4
        </p>

        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
          Dự Đoán Đúng Đắn
          <br />
          Của Bác Hồ
        </h2>

        <div className="mt-12 max-w-3xl mx-auto space-y-6 text-xl leading-relaxed">
          <p>
            Dự đoán của Chủ tịch Hồ Chí Minh năm 1967 đã{" "}
            <strong>hoàn toàn trở thành hiện thực</strong>.
          </p>

          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30 text-left">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaTrophy className="text-3xl" />
              Về Thời Điểm
            </h3>
            <p>
              Mỹ thất bại quyết định trên bầu trời Hà Nội (12/1972), sau đó chỉ
              1 tháng phải ký Hiệp định Paris (27/1/1973).
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30 text-left">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FaBook className="text-3xl" />
              Về Bản Chất
            </h3>
            <p>
              Không phải thua ở chiến trường miền Nam trước, mà phải thua ở Hà
              Nội - <strong>biểu tượng ý chí Việt Nam</strong>. Đây là thất bại
              về ý chí chiến lược, không chỉ quân sự.
            </p>
          </div>

          <div className="mt-12 p-10 bg-white text-[#0F172A] rounded-3xl shadow-2xl">
            <p className="text-2xl font-black mb-4">💡 Ý Nghĩa Lịch Sử</p>
            <p className="text-lg leading-relaxed">
              Dự đoán này cho thấy <strong>trí tuệ chiến lược</strong> của Chủ
              tịch Hồ Chí Minh - biết nhìn thấy tất yếu lịch sử trong những biến
              động phức tạp của chiến tranh, và khẳng định{" "}
              <strong>sức mạnh của ý chí dân tộc</strong> trước bất kỳ sức mạnh
              quân sự nào.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
