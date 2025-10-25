import AnimatedSection from "../components/AnimatedSection";

export default function Battle() {
  return (
    <AnimatedSection id="battle" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs tracking-widest uppercase text-amber-600 font-bold">
          Chương 3
        </p>

        <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-[#0F172A]">
          Điện Biên Phủ Trên Không
          <br />
          <span className="text-amber-600">Tháng 12/1972</span>
        </h2>

        <div className="mt-10 bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-3xl border-2 border-amber-200">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
            🎯 Chiến Dịch Linebacker II
          </h3>

          <div className="space-y-4 text-lg text-[#334155]">
            <p>
              <strong>Thời gian:</strong> 18-29/12/1972 (12 ngày đêm)
            </p>
            <p>
              <strong>Mục tiêu của Mỹ:</strong> Buộc Việt Nam chấp nhận điều
              kiện tại Hội nghị Paris bằng đòn tấn công dồn dập nhất
            </p>
            <p>
              <strong>Quy mô:</strong> 729 lượt B-52, hàng nghìn lượt máy bay
              chiến thuật, ném hàng chục nghìn tấn bom
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <span className="text-4xl">⚔️</span>
              Cuộc Đối Đầu
            </h3>
            <ul className="space-y-4 text-lg text-[#334155]">
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  B-52 được mệnh danh "pháo đài bay" - biểu tượng sức mạnh không
                  quân Mỹ
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  Hà Nội trở thành "lò lửa" với hệ thống phòng không dày đặc
                  nhất thế giới
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  Tinh thần "quyết tử để Tổ quốc quyết sinh" lan tỏa khắp thủ đô
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <span className="text-4xl">🏆</span>
              Kết Quả
            </h3>
            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <p className="text-2xl font-black text-red-600 mb-4">
                Mỹ thất bại thảm hại
              </p>
              <ul className="space-y-3 text-[#334155]">
                <li>
                  <strong>81 máy bay</strong> bị bắn rơi (34 chiếc B-52)
                </li>
                <li>
                  <strong>30/12/1972:</strong> Mỹ tuyên bố ngừng ném bom
                </li>
                <li>
                  <strong>27/1/1973:</strong> Ký Hiệp định Paris - Công nhận
                  thất bại
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
