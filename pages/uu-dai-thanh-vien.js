//================================================================
// LƯU TRỮ THEO TÀI KHOẢN (giống hệt nguyên tắc bên script.js chính)
//================================================================
function taiKhoanHienTai() {
    if (localStorage.getItem("daDangNhap") === "true") {
        return localStorage.getItem("tenTaiKhoanHienTai");
    }
    return null;
}

function khoaTheoTaiKhoan(tenKhoa) {
    const tk = taiKhoanHienTai();
    return tk ? `${tenKhoa}_${tk}` : tenKhoa;
}

function docJSON(key, macDinh) {
    try {
        const gt = JSON.parse(localStorage.getItem(key));
        return gt === null || gt === undefined ? macDinh : gt;
    } catch (loi) {
        return macDinh;
    }
}

function layDiemTichLuyVip() {
    return Number(localStorage.getItem(khoaTheoTaiKhoan("diemTichLuy"))) || 0;
}

//================================================================
// CÁC BẬC HẠNG THÀNH VIÊN
//================================================================
const bacThangHang = [
    { ten: "Member", moc: 0 },
    { ten: "Silver", moc: 500 },
    { ten: "Gold", moc: 1500 },
    { ten: "Platinum", moc: 4000 },
    { ten: "Diamond", moc: 10000 }
];

function tinhHangHienTai(diem) {
    let hang = bacThangHang[0];
    for (let i = 0; i < bacThangHang.length; i++) {
        if (diem >= bacThangHang[i].moc) hang = bacThangHang[i];
    }
    return hang;
}

function tinhHangTiepTheo(diem) {
    for (let i = 0; i < bacThangHang.length; i++) {
        if (diem < bacThangHang[i].moc) return bacThangHang[i];
    }
    return null;
}

//================================================================
// VẼ GIAO DIỆN CHÍNH: thẻ hạng + thanh tiến trình
//================================================================
function capNhatGiaoDienVip() {
    const tenKhachVip = document.querySelector("#tenKhachVip");
    const hangThanhVienVip = document.querySelector("#hangThanhVienVip");
    const soDiemVipLon = document.querySelector("#soDiemVipLon");

    if (localStorage.getItem("daDangNhap") !== "true") {
        tenKhachVip.textContent = "Khách";
        hangThanhVienVip.textContent = "Vui lòng đăng nhập để xem hạng thành viên";
        soDiemVipLon.textContent = "0";
        document.querySelector("#thanhTienTrinhFill").style.width = "0%";
        document.querySelector("#ghiChuTienTrinh").textContent = "Đăng nhập để bắt đầu tích điểm";
        return;
    }

    const thongTin = docJSON(khoaTheoTaiKhoan("thongTinCaNhan"), {});
    const diem = layDiemTichLuyVip();
    const hangHienTai = tinhHangHienTai(diem);
    const hangTiepTheo = tinhHangTiepTheo(diem);

    tenKhachVip.textContent = thongTin.hoTen || "Thành viên";
    hangThanhVienVip.textContent = "Hạng " + hangHienTai.ten;
    soDiemVipLon.textContent = diem.toLocaleString();
    document.querySelector("#diemHienTaiText").textContent = diem.toLocaleString() + " điểm";

    if (hangTiepTheo) {
        const canDe = hangTiepTheo.moc - hangHienTai.moc;
        const daCo = diem - hangHienTai.moc;
        const phanTram = Math.min(100, Math.round((daCo / canDe) * 100));

        document.querySelector("#diemMucTieuText").textContent = "Mục tiêu: " + hangTiepTheo.moc.toLocaleString() + " điểm";
        document.querySelector("#thanhTienTrinhFill").style.width = phanTram + "%";
        document.querySelector("#ghiChuTienTrinh").textContent = `Tích thêm ${(hangTiepTheo.moc - diem).toLocaleString()} điểm để lên hạng ${hangTiepTheo.ten}`;
    } else {
        document.querySelector("#diemMucTieuText").textContent = "Hạng cao nhất";
        document.querySelector("#thanhTienTrinhFill").style.width = "100%";
        document.querySelector("#ghiChuTienTrinh").textContent = "Bạn đã đạt hạng thành viên cao nhất!";
    }

    document.querySelectorAll(".theHangNho").forEach(function (the) {
        the.classList.toggle("hangDangCo", the.dataset.hang === hangHienTai.ten);
    });
}

//================================================================
// VẼ DANH SÁCH VOUCHER (khóa/mở tùy theo hạng hiện tại)
//================================================================
function veVoucherVip() {
    const luoiVoucher = document.querySelector("#luoiVoucher");
    const diem = layDiemTichLuyVip();
    const hangHienTai = tinhHangHienTai(diem);
    const hangDuMienPhiShip = ["Gold", "Platinum", "Diamond"].includes(hangHienTai.ten);

    const danhSachVoucher = [
        { ten: "Giảm 10%", dieuKien: "Đơn từ 200.000đ", ma: "SALE10", khoa: false },
        { ten: "Giảm 20%", dieuKien: "Đơn từ 500.000đ", ma: "WELCOME20", khoa: false },
        { ten: "Miễn phí ship", dieuKien: "Dành cho hạng Gold trở lên", khoa: !hangDuMienPhiShip },
        { ten: "Quà sinh nhật", dieuKien: "Dành cho hạng Diamond", khoa: hangHienTai.ten !== "Diamond" }
    ];

    luoiVoucher.innerHTML = danhSachVoucher.map(function (v) {
        return `
            <div class="theVoucher ${v.khoa ? 'theVoucherKhoa' : ''}">
                <p class="tenVoucher">${v.ten}</p>
                <p class="dieuKienVoucher">${v.dieuKien}</p>
                ${v.ma ? `<p class="maVoucher">Mã: ${v.ma}</p>` : ''}
                ${v.khoa ? '<p class="trangThaiVoucher">🔒 Chưa mở khóa</p>' : '<p class="trangThaiVoucher">✅ Có thể dùng</p>'}
            </div>
        `;
    }).join("");
}

//================================================================
// VẼ LỊCH SỬ TÍCH ĐIỂM (dựa trên lịch sử đơn hàng đã có)
//================================================================
function veLichSuDiemVip() {
    const lichSuDiemVip = document.querySelector("#lichSuDiemVip");
    const donHangDaCo = docJSON(khoaTheoTaiKhoan("lichSuDonHang"), []);

    if (donHangDaCo.length === 0) {
        lichSuDiemVip.innerHTML = "<p>Chưa có lịch sử tích điểm.</p>";
        return;
    }

    lichSuDiemVip.innerHTML = donHangDaCo.slice(0, 10).map(function (donHang) {
        const diemCong = Math.floor(donHang.tongTien / 10000);
        return `
            <div class="dongLichSuDiem">
                <span>${donHang.thoiGian}</span>
                <span class="diemCongVip">+${diemCong} điểm</span>
            </div>
        `;
    }).join("");
}

//================================================================
// KHỞI TẠO
//================================================================
capNhatGiaoDienVip();
veVoucherVip();
veLichSuDiemVip();