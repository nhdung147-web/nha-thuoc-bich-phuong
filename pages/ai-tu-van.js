
const danhSachThuocAI = {
    "panadol": { ten: "Panadol (Paracetamol)", thanhPhan: "Paracetamol 500mg", lieuDung: "1-2 viên/lần, cách 4-6 giờ, tối đa 8 viên/ngày", tacDung: "Giảm đau, hạ sốt", tacDungPhu: "Hiếm gặp: buồn nôn, phát ban. Quá liều gây hại gan.", chongChiDinh: "Người suy gan nặng, dị ứng paracetamol", baoQuan: "Nơi khô ráo, dưới 30°C" },
    "vitamin c": { ten: "Vitamin C", thanhPhan: "Acid ascorbic", lieuDung: "500-1000mg/ngày", tacDung: "Tăng cường miễn dịch, chống oxy hóa", tacDungPhu: "Liều cao có thể gây rối loạn tiêu hóa", chongChiDinh: "Người sỏi thận nên thận trọng", baoQuan: "Nơi khô ráo, tránh ánh sáng" },
    "omega 3": { ten: "Omega 3", thanhPhan: "EPA, DHA từ dầu cá", lieuDung: "1-2 viên/ngày sau ăn", tacDung: "Hỗ trợ tim mạch, trí não, thị lực", tacDungPhu: "Có thể gây ợ hơi mùi cá", chongChiDinh: "Người rối loạn đông máu cần hỏi bác sĩ", baoQuan: "Nơi mát, tránh ánh sáng trực tiếp" }
};


const vungTinNhan = document.querySelector("#vungTinNhan");
const oNhapChat = document.querySelector("#oNhapChat");
const nutGuiChat = document.querySelector("#nutGuiChat");
const dangGoChat = document.querySelector("#dangGoChat");

function layGioHienTai() {
    const now = new Date();
    return now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
}

function themTinNhanNguoiDung(noiDung) {
    vungTinNhan.innerHTML += `
        <div class="tinNhan tinNhanNguoiDung">
            <div class="noiDungTinNhan">
                <div class="bongChat bongChatNguoiDung">${noiDung}</div>
                <span class="thoiGianChat">${layGioHienTai()}</span>
            </div>
            <div class="avatarChat avatarNguoiDung">🧑</div>
        </div>
    `;
    vungTinNhan.scrollTop = vungTinNhan.scrollHeight;
}

function themTinNhanAI(noiDungHtml) {
    vungTinNhan.innerHTML += `
        <div class="tinNhan tinNhanAI">
            <div class="avatarChat avatarAI">🤖</div>
            <div class="noiDungTinNhan">
                <div class="bongChat bongChatAI">${noiDungHtml}</div>
                <span class="thoiGianChat">${layGioHienTai()}</span>
            </div>
        </div>
    `;
    vungTinNhan.scrollTop = vungTinNhan.scrollHeight;
}

function timThongTinThuoc(cauHoi) {
    const cauHoiThuong = cauHoi.toLowerCase();

    for (const tenKhoa in danhSachThuocAI) {
        if (cauHoiThuong.includes(tenKhoa)) {
            const t = danhSachThuocAI[tenKhoa];
            return `
                <strong>${t.ten}</strong><br><br>
                <b>Thành phần:</b> ${t.thanhPhan}<br>
                <b>Liều dùng:</b> ${t.lieuDung}<br>
                <b>Tác dụng:</b> ${t.tacDung}<br>
                <b>Tác dụng phụ:</b> ${t.tacDungPhu}<br>
                <b>Chống chỉ định:</b> ${t.chongChiDinh}<br>
                <b>Bảo quản:</b> ${t.baoQuan}<br><br>
                <em>💊 Thông tin tham khảo. Vui lòng hỏi dược sĩ trước khi sử dụng.</em>
            `;
        }
    }

    return `
        Tôi chưa có dữ liệu chi tiết về loại thuốc này.<br><br>
        Thử hỏi về: <b>Panadol</b>, <b>Vitamin C</b>, <b>Omega 3</b><br><br>
        <em>Tôi không thể chẩn đoán bệnh. Vui lòng gặp bác sĩ để được thăm khám chính xác.</em>
    `;
}

function guiTinNhan() {
    const noiDung = oNhapChat.value.trim();
    if (noiDung === "") return;

    themTinNhanNguoiDung(noiDung);
    oNhapChat.value = "";
    dangGoChat.style.display = "flex";
    vungTinNhan.scrollTop = vungTinNhan.scrollHeight;

    setTimeout(function () {
        dangGoChat.style.display = "none";
        themTinNhanAI(timThongTinThuoc(noiDung));
    }, 1200);
}

nutGuiChat.addEventListener("click", guiTinNhan);
oNhapChat.addEventListener("keydown", function (e) {
    if (e.key === "Enter") guiTinNhan();
});

document.querySelectorAll(".mucCongCu").forEach(function (muc) {
    muc.addEventListener("click", function () {
        themTinNhanAI(`Tính năng "<b>${muc.textContent}</b>" đang được phát triển. Sẽ sớm ra mắt! 🚀`);
    });
});

document.querySelector("#nutUpload").addEventListener("click", function () {
    themTinNhanAI("Tính năng tải ảnh lên đang được phát triển.");
});
document.querySelector("#nutMicro").addEventListener("click", function () {
    themTinNhanAI("Tính năng ghi âm giọng nói đang được phát triển.");
});