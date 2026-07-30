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

function layDiemTichLuyVip() {
    try {
        return Number(localStorage.getItem(khoaTheoTaiKhoan("diemTichLuy"))) || 0;
    } catch (error) {
        return 0;
    }
}

const bacThangHang = [
    { ten: "Member", moc: 0 },
    { ten: "Silver", moc: 500 },
    { ten: "Gold", moc: 1500 },
    { ten: "Platinum", moc: 4000 },
    { ten: "Diamond", moc: 10000 }
];

function tinhHangHienTai(diem) {
    let hangHienTai = bacThangHang[0];
    for (let i = 0; i < bacThangHang.length; i++) {
        if (diem >= bacThangHang[i].moc) {
            hangHienTai = bacThangHang[i];
        }
    }
    return hangHienTai;
}

function tinhHangTiepTheo(diem) {
    for (let i = 0; i < bacThangHang.length; i++) {
        if (diem < bacThangHang[i].moc) {
            return bacThangHang[i];
        }
    }
    return null;
}

function capNhatGiaoDienVip() {
    const daDangNhap = localStorage.getItem("daDangNhap") === "true";
    const tenKhachVip = document.querySelector("#tenKhachVip");
    const hangThanhVienVip = document.querySelector("#hangThanhVienVip");
    const soDiemVipLon = document.querySelector("#soDiemVipLon");

    if (!daDangNhap) {
        tenKhachVip.textContent = "Khách";
        hangThanhVienVip.textContent = "Vui lòng đăng nhập để xem hạng thành viên";
        soDiemVipLon.textContent = "0";
        document.querySelector("#thanhTienTrinhFill").style.width = "0%";
        document.querySelector("#ghiChuTienTrinh").textContent = "Đăng nhập để bắt đầu tích điểm";
        return;
    }

    let thongTin = {};
    try {
        thongTin = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("thongTinCaNhan"))) || {};
    } catch (error) {
        thongTin = {};
    }

    const diem = layDiemTichLuyVip();
    const hangHienTai = tinhHangHienTai(diem);
    const hangTiepTheo = tinhHangTiepTheo(diem);

    tenKhachVip.textContent = thongTin.hoTen || "Thành viên";
    hangThanhVienVip.textContent = "Hạng " + hangHienTai.ten;
    soDiemVipLon.textContent = diem.toLocaleString();

    document.querySelector("#diemHienTaiText").textContent = diem.toLocaleString() + " điểm";

    if (hangTiepTheo) {
        const diemCanCoDeVuotMoc = hangTiepTheo.moc - hangHienTai.moc;
        const diemDaCoTrongBac = diem - hangHienTai.moc;
        const phanTram = Math.min(100, Math.round((diemDaCoTrongBac / diemCanCoDeVuotMoc) * 100));

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

function veVoucherVip() {
    const luoiVoucher = document.querySelector("#luoiVoucher");
    const diem = layDiemTichLuyVip();
    const hangHienTai = tinhHangHienTai(diem);

    const danhSachVoucher = [
        { ten: "Giảm 10%", dieuKien: "Đơn từ 200.000đ", ma: "SALE10" },
        { ten: "Giảm 20%", dieuKien: "Đơn từ 500.000đ", ma: "WELCOME20" },
        { ten: "Miễn phí ship", dieuKien: "Dành cho hạng Gold trở lên", khoa: ["Gold", "Platinum", "Diamond"].includes(hangHienTai.ten) === false },
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

function veLichSuDiemVip() {
    const lichSuDiemVip = document.querySelector("#lichSuDiemVip");
    let donHangDaCo = [];
    try {
        donHangDaCo = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("lichSuDonHang"))) || [];
    } catch (error) {
        donHangDaCo = [];
    }

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

capNhatGiaoDienVip();
veVoucherVip();
veLichSuDiemVip();