
// 1. DỮ LIỆU SẢN PHẨM
const danhSach = [
    { ten: "Thuốc cảm cúm", gia: 25000, anh: "https://vnras.com/drug/wp-content/uploads/2025/08/Panadol-Cam-Cum-2.jpg", tonkho: 10, chitiet: "Thuốc cảm cúm Panadol giúp giảm đau, hạ sốt, giảm các triệu chứng cảm cúm.", danhMuc: "thuốc cảm cúm", nhomLon: "Thuốc" },
    { ten: "Thuốc huyết áp", gia: 45000, anh: "https://www.vinmec.com/static/uploads/medium_20200220_013447_856538_thuoc_Coversyl_max_1800x1800_jpg_ca76a051fe.jpg", tonkho: 8, chitiet: "Thuốc huyết áp Coversyl max giúp kiểm soát huyết áp.", danhMuc: "thuốc huyết áp", nhomLon: "Thuốc" },
    { ten: "Thuốc tiểu đường", gia: 60000, anh: "https://cdn.diag.vn/2024/11/9de5c0aa-diamicron-mr-30mg-1.jpg", tonkho: 8, chitiet: "Thuốc tiểu đường Diamicron MR giúp kiểm soát đường huyết.", danhMuc: "thuốc tiểu đường", nhomLon: "Thuốc" },
    { ten: "Thuốc tiêu hóa", gia: 100000, anh: "https://www.vinmec.com/static/uploads/medium_20200220_013447_856538_thuoc_Coversyl_max_1800x1800_jpg_ca76a051fe.jpg", tonkho: 5, chitiet: "Thuốc tiêu hóa giúp cải thiện chức năng tiêu hóa.", danhMuc: "thuốc tiêu hóa", nhomLon: "Thuốc" },
    { ten: "Vitamin A", gia: 50000, anh: "https://myphamxachtayduc.vn/wp-content/uploads/2016/11/Doppelherz-aktiv-Vitamin-A-2500-I.E.jpg", tonkho: 15, chitiet: "Vitamin A hỗ trợ sức khỏe mắt và da.", danhMuc: "vitamin", nhomLon: "Vitamin" },
    { ten: "Vitamin C", gia: 50000, anh: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hrm/hrm50020/y/24.jpg", tonkho: 12, chitiet: "Vitamin C giúp tăng cường hệ miễn dịch.", danhMuc: "vitamin", nhomLon: "Vitamin" },
    { ten: "Sữa non tăng đề kháng", gia: 350000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuqG3sI0tgobeTp_zJnejHdZL7dK8QS--pQWqDxJ0aP8iYNZcg5fdhfzL&s=10", tonkho: 20, chitiet: "Sữa non hỗ trợ tăng cường sức đề kháng cho cơ thể.", danhMuc: "thực phẩm chức năng", nhomLon: "Thực phẩm chức năng" },
    { ten: "Viên uống Omega 3", gia: 280000, anh: "https://orihiro.vn/wp-content/uploads/2020/04/20.png", tonkho: 25, chitiet: "Omega 3 hỗ trợ tim mạch, tốt cho trí não và thị lực.", danhMuc: "thực phẩm chức năng", nhomLon: "Thực phẩm chức năng" },
    { ten: "Viên uống Collagen", gia: 420000, anh: "https://heluva.vn/wp-content/uploads/2020/08/product-3.jpg", tonkho: 10, chitiet: "Collagen hỗ trợ làm đẹp da, chống lão hóa.", danhMuc: "thực phẩm chức năng", nhomLon: "Thực phẩm chức năng" },
    { ten: "Kem chống nắng Anessa", gia: 550000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VSdoDVFZp2dQlefK0iJSGRtc0Y8NQ20md-HmMyiPcg&s=10", tonkho: 12, chitiet: "Kem chống nắng bảo vệ da khỏi tia UV, chống nước.", danhMuc: "kem chống nắng", nhomLon: "Dược mỹ phẩm" },
    { ten: "Kem dưỡng ẩm Cetaphil", gia: 320000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFF9xP1cK64T9YJu4VtHdiBrPmPuV5_UkVtjWp--ZEg&s=10", tonkho: 18, chitiet: "Kem dưỡng ẩm dịu nhẹ, phù hợp da nhạy cảm.", danhMuc: "kem dưỡng da", nhomLon: "Dược mỹ phẩm" },
    { ten: "Serum Vitamin C", gia: 480000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxPk00amo5sbTSM4_za_c-pK1tJWE7Q0hbtuP0blZTw&s=10", tonkho: 9, chitiet: "Serum giúp sáng da, mờ thâm nám.", danhMuc: "kem dưỡng da", nhomLon: "Dược mỹ phẩm" },
    { ten: "Nhiệt kế điện tử", gia: 120000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH-9P8LDkBU1-82y9f52ikhrXTmfEPNolAnSEEnOpZMesvRIe3VR5hd3p&s=10", tonkho: 30, chitiet: "Nhiệt kế điện tử đo nhanh, chính xác.", danhMuc: "dụng cụ y tế", nhomLon: "Dụng cụ y tế" },
    { ten: "Máy đo huyết áp", gia: 890000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqE7iA_H7Hy31kHkT495BuFry5hnYjXop5YfKO2IhRz4dCmFVerP_Jj0c&s=10", tonkho: 7, chitiet: "Máy đo huyết áp bắp tay tự động.", danhMuc: "dụng cụ y tế", nhomLon: "Dụng cụ y tế" },
    { ten: "Khẩu trang y tế", gia: 45000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__TAgJKXKp5Gf4i2a_hLnChSQaNlxp5K2enXp7i6a_JQNLUO1rwiCBVk&s=10", tonkho: 50, chitiet: "Khẩu trang y tế 4 lớp, kháng khuẩn, hộp 50 cái.", danhMuc: "dụng cụ y tế", nhomLon: "Dụng cụ y tế" }
];

// 2. TIỆN ÍCH DÙNG CHUNG (helper functions)

// Lấy tên tài khoản đang đăng nhập (null nếu là khách vãng lai)
function taiKhoanHienTai() {
    if (localStorage.getItem("daDangNhap") === "true") {
        return localStorage.getItem("tenTaiKhoanHienTai");
    }
    return null;
}

// Ghép tên khóa localStorage riêng theo từng tài khoản (vd: "gioHang_admin")
function khoaTheoTaiKhoan(tenKhoa) {
    const tk = taiKhoanHienTai();
    return tk ? `${tenKhoa}_${tk}` : tenKhoa;
}

// Hiện thông báo nhỏ (toast) góc màn hình, tự biến mất sau ~2 giây
const thongBao = document.querySelector("#thongBao");
function hienThiThongBao(noiDung, loai = "info") {
    const item = document.createElement("div");
    item.className = `thongItem ${loai}`;
    item.textContent = noiDung;
    thongBao.appendChild(item);
    setTimeout(function () { item.remove(); }, 2200);
}

// Đọc an toàn 1 key JSON trong localStorage, trả về mặc định nếu lỗi/không có
function docJSON(key, macDinh) {
    try {
        const gt = JSON.parse(localStorage.getItem(key));
        return gt === null || gt === undefined ? macDinh : gt;
    } catch (loi) {
        return macDinh;
    }
}

// DANH SÁCH SẢN PHẨM: VẼ DANH SÁCH + TÌM KIẾM + SẮP XẾP

const oDanhSach = document.querySelector("#dsSanPham");

function vedanhsach(mang) {
    const yeuThich = docJSON(khoaTheoTaiKhoan("sanPhamYeuThich"), []);

    oDanhSach.innerHTML = "";
    mang.forEach(function (sp) {
        const daYeuThich = yeuThich.includes(sp.ten);
        oDanhSach.innerHTML += `
            <li>
                <img src="${sp.anh}" alt="${sp.ten}" width="100" height="100">
                <span class="tenSanPham">${sp.ten}</span> - ${sp.gia.toLocaleString()}đ
                <br>
                <span class="nutXemChiTiet">▾ Xem công dụng, thông tin sản phẩm</span>
                <p class="chitiet" style="display:none;">${sp.chitiet}</p>
                <button class="nutYeuThich ${daYeuThich ? 'active' : ''}" data-ten="${sp.ten}">❤</button>
                <button class="nutThemGio" data-ten="${sp.ten}" data-gia="${sp.gia}" data-tonkho="${sp.tonkho}" ${sp.tonkho === 0 ? 'disabled' : ''}>${sp.tonkho === 0 ? 'Hết hàng' : 'Thêm'}</button>
                <button class="nutbogio" data-ten="${sp.ten}" data-gia="${sp.gia}">hủy</button>
            </li>
        `;
    });
}

vedanhsach(danhSach);

const oTimKiem = document.querySelector("#oTimKiem");
oTimKiem.addEventListener("input", function () {
    const tuKhoa = oTimKiem.value.toLowerCase();
    vedanhsach(danhSach.filter(function (sp) { return sp.ten.toLowerCase().includes(tuKhoa); }));
});

const oSapXepGia = document.querySelector("#oSapXepGia");
oSapXepGia.addEventListener("change", function () {
    let ds = [...danhSach];
    if (oSapXepGia.value === "tang") ds.sort(function (a, b) { return a.gia - b.gia; });
    else if (oSapXepGia.value === "giam") ds.sort(function (a, b) { return b.gia - a.gia; });
    vedanhsach(ds);
});

// Sự kiện chung trên toàn danh sách: thêm giỏ / hủy / yêu thích / xem chi tiết
oDanhSach.addEventListener("click", function (e) {

    if (e.target.classList.contains("nutThemGio")) {
        themVaoGioHang(e.target.dataset.ten, Number(e.target.dataset.gia), Number(e.target.dataset.tonkho));
    }

    if (e.target.classList.contains("nutbogio")) {
        giamSanPhamTrongGio(e.target.dataset.ten);
    }

    if (e.target.classList.contains("nutYeuThich")) {
        toggleYeuThich(e.target.dataset.ten);
        vedanhsach(danhSach);
    }

    if (e.target.classList.contains("tenSanPham") || e.target.classList.contains("nutXemChiTiet")) {
        const li = e.target.closest("li");
        const chiTiet = li.querySelector(".chitiet");
        const nutXem = li.querySelector(".nutXemChiTiet");
        const dangAn = chiTiet.style.display === "none";
        chiTiet.style.display = dangAn ? "block" : "none";
        nutXem.textContent = dangAn ? "▴ Ẩn bớt" : "▾ Xem công dụng, thông tin sản phẩm";
    }
});

//  YÊU THÍCH (dùng chung cho cả thẻ sản phẩm và popup yêu thích)

function toggleYeuThich(ten) {
    const yeuThich = docJSON(khoaTheoTaiKhoan("sanPhamYeuThich"), []);
    const viTri = yeuThich.indexOf(ten);

    if (viTri === -1) {
        yeuThich.push(ten);
        hienThiThongBao(`Đã thêm ${ten} vào yêu thích.`, "success");
    } else {
        yeuThich.splice(viTri, 1);
        hienThiThongBao(`Đã bỏ ${ten} khỏi yêu thích.`, "info");
    }
    localStorage.setItem(khoaTheoTaiKhoan("sanPhamYeuThich"), JSON.stringify(yeuThich));
}

const khungYeuThich = document.querySelector("#khungYeuThich");
const noiDungKhungYeuThich = document.querySelector("#noiDungKhungYeuThich");
const dongKhungYeuThichButton = document.querySelector("#dongKhungYeuThich");

function hienThiKhungYeuThich() {
    const yeuThich = docJSON(khoaTheoTaiKhoan("sanPhamYeuThich"), []);

    if (yeuThich.length === 0) {
        noiDungKhungYeuThich.innerHTML = "<p>Chưa có sản phẩm yêu thích nào.</p>";
        return;
    }

    noiDungKhungYeuThich.innerHTML = yeuThich.map(function (tenSp) {
        const sp = danhSach.find(function (s) { return s.ten === tenSp; });
        if (!sp) return "";
        return `
            <div class="mucYeuThich">
                <div>
                    <strong>${sp.ten}</strong>
                    <span>${sp.gia.toLocaleString()}đ</span>
                </div>
                <div class="hangNutYeuThichKhung">
                    <button type="button" class="nutThemGioYeuThich" data-ten="${sp.ten}" data-gia="${sp.gia}" data-tonkho="${sp.tonkho}">Thêm vào giỏ</button>
                    <button type="button" class="nutBoYeuThichKhung" data-ten="${sp.ten}">Bỏ</button>
                </div>
            </div>
        `;
    }).join("");
}

function moKhungYeuThich() { hienThiKhungYeuThich(); khungYeuThich.style.display = "flex"; }
function dongKhungYeuThich() { khungYeuThich.style.display = "none"; }

dongKhungYeuThichButton.addEventListener("click", dongKhungYeuThich);
khungYeuThich.addEventListener("click", function (e) { if (e.target === khungYeuThich) dongKhungYeuThich(); });

noiDungKhungYeuThich.addEventListener("click", function (e) {
    if (e.target.classList.contains("nutBoYeuThichKhung")) {
        toggleYeuThich(e.target.dataset.ten);
        hienThiKhungYeuThich();
        vedanhsach(danhSach);
    }
    if (e.target.classList.contains("nutThemGioYeuThich")) {
        themVaoGioHang(e.target.dataset.ten, Number(e.target.dataset.gia), Number(e.target.dataset.tonkho));
    }
});



//  GIỎ HÀNG (dữ liệu + tính tổng + mã giảm giá + điểm)

let gioHang = docJSON(khoaTheoTaiKhoan("gioHang"), {});

const chiTietGioHang = document.querySelector("#chiTietGioHang");
const soLuongHienThi = document.querySelector("#soLuong");
const tongTienHienThi = document.querySelector("#tongTien");
const dongGiamGia = document.querySelector("#dongGiamGia");
const dongDiem = document.querySelector("#dongDiem");
const tongSauGiamHienThi = document.querySelector("#tongSauGiam");
const maGiamGiaInput = document.querySelector("#maGiamGia");
const nutApDungMaGiamGia = document.querySelector("#nutApDungMaGiamGia");
const nutXoaMaGiamGia = document.querySelector("#nutXoaMaGiamGia");
const thongBaoMaGiamGia = document.querySelector("#thongBaoMaGiamGia");
const dungDiemCheckbox = document.querySelector("#dungDiemCheckbox");
const thongTinDiemThanhToan = document.querySelector("#thongTinDiemThanhToan");
const oPhuongThucThanhToan = document.querySelector("#phuongThucThanhToan");

let maGiamGiaHienTai = "";
let soTienGiam = 0;

// //......// Bảng mã giảm giá demo - CHỈ MỘT nơi định nghĩa, mọi chỗ khác đều gọi hàm này,
// tránh viết lặp lại bangMa ở nhiều chỗ như code cũ.
function layBangMaGiamGia() {
    return { SALE10: 0.1, WELCOME20: 0.2, SAVE30: 0.3 };
}

function layPhuongThucThanhToanText() {
    const bang = { tienMat: "Tiền mặt", theNganHang: "Thẻ ngân hàng", chuyenKhoan: "Chuyển khoản", viDienTu: "Ví điện tử" };
    return bang[oPhuongThucThanhToan.value] || "Chưa chọn";
}

function layDiemTichLuy() {
    return Number(localStorage.getItem(khoaTheoTaiKhoan("diemTichLuy"))) || 0;
}

function capNhatHienThiTichDiem() {
    const diem = layDiemTichLuy();
    dongDiem.textContent = `Điểm tích lũy: ${diem.toLocaleString()} điểm`;
    thongTinDiemThanhToan.textContent = `Điểm hiện có: ${diem.toLocaleString()} điểm (1 điểm = 1.000đ)`;
    dungDiemCheckbox.disabled = diem <= 0;
    if (diem <= 0) dungDiemCheckbox.checked = false;
}

function tinhTongTien() {
    let tong = 0;
    Object.keys(gioHang).forEach(function (ten) { tong += gioHang[ten].gia * gioHang[ten].soLuong; });
    return tong;
}

function capNhatGiamGiaHienThi() {
    const tongTien = tinhTongTien();
    const tyLe = layBangMaGiamGia()[maGiamGiaHienTai.toUpperCase()] || 0;
    soTienGiam = Math.round(tongTien * tyLe);
    dongGiamGia.textContent = `Giảm giá: ${soTienGiam.toLocaleString()}đ`;
    tongSauGiamHienThi.textContent = `Còn lại: ${Math.max(0, tongTien - soTienGiam).toLocaleString()}đ`;
}

// //......// Hàm DUY NHẤT để vẽ lại + lưu giỏ hàng - mọi thao tác (thêm/bớt/xóa) đều gọi hàm này ở cuối
function capNhatGioHang() {
    const danhSachTen = Object.keys(gioHang);
    let tongSoLuong = 0;

    if (danhSachTen.length === 0) {
        chiTietGioHang.innerHTML = "<p>Giỏ hàng đang trống.</p>";
    } else {
        chiTietGioHang.innerHTML = "";
        danhSachTen.forEach(function (ten) {
            const sp = gioHang[ten];
            tongSoLuong += sp.soLuong;
            chiTietGioHang.innerHTML += `
                <div class="sanPhamTrongGio">
                    <p><b>${ten}</b></p>
                    <p>Giá: ${sp.gia.toLocaleString()}đ</p>
                    <button class="giamSoLuong" data-ten="${ten}">-</button>
                    <span>${sp.soLuong}</span>
                    <button class="tangSoLuong" data-ten="${ten}">+</button>
                    <button class="xoaSanPham" data-ten="${ten}">🗑</button>
                    <hr>
                </div>
            `;
        });
    }

    soLuongHienThi.textContent = tongSoLuong;
    tongTienHienThi.textContent = tinhTongTien().toLocaleString();
    capNhatGiamGiaHienThi();
    localStorage.setItem(khoaTheoTaiKhoan("gioHang"), JSON.stringify(gioHang));
}

// //......// Hàm DUY NHẤT xử lý "thêm 1 sản phẩm vào giỏ" - dùng chung cho: nút Thêm ở thẻ sản phẩm,
// nút Thêm trong popup yêu thích. Trước đây bị viết lặp lại ở 2 nơi.
function themVaoGioHang(ten, gia, tonKhoGoc) {
    if (!gioHang[ten]) gioHang[ten] = { soLuong: 0, gia: gia };

    if (gioHang[ten].soLuong >= tonKhoGoc) {
        hienThiThongBao(`Kho chỉ còn ${tonKhoGoc} sản phẩm "${ten}".`, "error");
        return;
    }
    gioHang[ten].soLuong++;
    hienThiThongBao(`Đã thêm ${ten} vào giỏ hàng.`, "success");
    capNhatGioHang();
}

function giamSanPhamTrongGio(ten) {
    if (gioHang[ten] && gioHang[ten].soLuong > 0) {
        gioHang[ten].soLuong--;
        if (gioHang[ten].soLuong <= 0) delete gioHang[ten];
        capNhatGioHang();
    }
}

chiTietGioHang.addEventListener("click", function (e) {
    const ten = e.target.dataset.ten;
    if (e.target.classList.contains("tangSoLuong")) { gioHang[ten].soLuong++; capNhatGioHang(); }
    if (e.target.classList.contains("giamSoLuong")) { giamSanPhamTrongGio(ten); }
    if (e.target.classList.contains("xoaSanPham")) { delete gioHang[ten]; capNhatGioHang(); }
});

const nutXoaGio = document.querySelector("#nutXoaGio");
nutXoaGio.addEventListener("click", function () {
    if (confirm("Bạn có muốn xóa toàn bộ giỏ hàng không?")) {
        gioHang = {};
        capNhatGioHang();
    }
});

nutApDungMaGiamGia.addEventListener("click", function () {
    const maNhap = maGiamGiaInput.value.trim().toUpperCase();
    if (!maNhap) { thongBaoMaGiamGia.textContent = "Vui lòng nhập mã giảm giá."; return; }

    if (layBangMaGiamGia()[maNhap]) {
        maGiamGiaHienTai = maNhap;
        capNhatGioHang();
        thongBaoMaGiamGia.textContent = `Đã áp dụng mã ${maNhap}.`;
        hienThiThongBao(`Đã áp dụng mã ${maNhap}.`, "success");
    } else {
        maGiamGiaHienTai = "";
        capNhatGioHang();
        thongBaoMaGiamGia.textContent = "Mã giảm giá không hợp lệ.";
        hienThiThongBao("Mã giảm giá không hợp lệ.", "error");
    }
});

nutXoaMaGiamGia.addEventListener("click", function () {
    maGiamGiaHienTai = "";
    maGiamGiaInput.value = "";
    capNhatGioHang();
    thongBaoMaGiamGia.textContent = "Đã xóa mã giảm giá.";
});

const nutGioHangIcon = document.querySelector("#nutGioHangIcon");
const khungGioHang = document.querySelector("#khungGioHang");
nutGioHangIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    khungGioHang.style.display = khungGioHang.style.display === "block" ? "none" : "block";
});



//  THÔNG TIN GIAO HÀNG (form trong giỏ hàng - họ tên / sđt / địa chỉ dạng chữ tự do)

const nutThongTinGiaoHang = document.querySelector("#nutThongTinGiaoHang");
const formThongTinGiaoHang = document.querySelector("#formThongTinGiaoHang");
const nutLuuThongTin = document.querySelector("#nutLuuThongTin");
const khungThongTinGiaoHang = document.querySelector("#khungThongTinGiaoHang");

function layThongTinGiaoHang() {
    return {
        hoTen: document.querySelector("#hoTenNguoiNhan").value.trim(),
        soDienThoai: document.querySelector("#soDienThoai").value.trim(),
        diaChi: document.querySelector("#diaChiGiaoHang").value.trim()
    };
}

function taiThongTinGiaoHang() {
    const dl = docJSON(khoaTheoTaiKhoan("thongTinGiaoHang"), {});
    document.querySelector("#hoTenNguoiNhan").value = dl.hoTen || "";
    document.querySelector("#soDienThoai").value = dl.soDienThoai || "";
    document.querySelector("#diaChiGiaoHang").value = dl.diaChi || "";
    nutThongTinGiaoHang.textContent = (dl.hoTen || dl.soDienThoai || dl.diaChi) ? "Thông tin giao hàng ✓" : "Thông tin giao hàng";
}

nutThongTinGiaoHang.addEventListener("click", function (e) {
    e.stopPropagation();
    formThongTinGiaoHang.style.display = formThongTinGiaoHang.style.display === "block" ? "none" : "block";
});

nutLuuThongTin.addEventListener("click", function () {
    const tt = layThongTinGiaoHang();
    localStorage.setItem(khoaTheoTaiKhoan("thongTinGiaoHang"), JSON.stringify(tt));
    nutThongTinGiaoHang.textContent = (tt.hoTen || tt.soDienThoai || tt.diaChi) ? "Thông tin giao hàng ✓" : "Thông tin giao hàng";
    formThongTinGiaoHang.style.display = "none";
    hienThiThongBao("Đã lưu thông tin giao hàng.", "success");
});



//  KIỂM TRA KHU VỰC GIAO HÀNG NHANH (modal)
// //......// PHẦN MỚI: nếu đã có địa chỉ cấu trúc (Tỉnh/Huyện/Xã) lưu từ lần kiểm tra
// trước, mở modal sẽ hiện thẳng thẻ tóm tắt + nút "Kiểm tra lại", bỏ qua bước
// chọn lại Tỉnh/Huyện/Xã/số điện thoại như cũ (tránh dư thừa thao tác).

const hopThoaiGiaoHang = document.querySelector("#hopThoaiGiaoHang");
const dongHopThoaiGiaoHang = document.querySelector("#dongHopThoaiGiaoHang");
const linkKiemTraGiaoNhanh = document.querySelector("#linkKiemTraGiaoNhanh");
const khungNhapDiaChiMoi = document.querySelector("#khungNhapDiaChiMoi");
const khungDiaChiDaLuu = document.querySelector("#khungDiaChiDaLuu");
const tomTatDiaChiDaLuu = document.querySelector("#tomTatDiaChiDaLuu");
const nutKiemTraLaiDiaChiCu = document.querySelector("#nutKiemTraLaiDiaChiCu");
const nutNhapDiaChiKhac = document.querySelector("#nutNhapDiaChiKhac");

const tinhThanh = document.querySelector("#tinhThanh");
const quanHuyen = document.querySelector("#quanHuyen");
const xaPhuong = document.querySelector("#xaPhuong");
const diaChiChiTiet = document.querySelector("#diaChiChiTiet");
const soDienThoaiGiaoHang = document.querySelector("#soDienThoaiGiaoHang");
const kiemTraKhuVuc = document.querySelector("#kiemTraKhuVuc");
const ketQuaKhuVuc = document.querySelector("#ketQuaKhuVuc");
const xacNhanDatHang = document.querySelector("#xacNhanDatHang");

const khuVucGiaoNhanh = ["Vĩnh An", "Tân Bình", "Thạnh Phú"];
const khuVucLanCan = ["Mã Đà", "Hiếu Liêm", "Bình Lợi"];

let ketQuaGiaoHangHienTai = null;
xacNhanDatHang.disabled = true;

// //......// Hàm DUY NHẤT chạy logic "kiểm tra 1 xã có thuộc khu vực nào" - dùng chung
// cho cả nhánh nhập mới lẫn nhánh dùng lại địa chỉ đã lưu, tránh viết if/else 2 lần.
function chayKiemTraKhuVuc(tenXa) {
    if (khuVucGiaoNhanh.includes(tenXa)) {
        ketQuaKhuVuc.innerHTML = `
            <div class="theKetQua">
                <h4 class="thanhCong">✅ Giao hàng nhanh</h4>
                <p><b>Khu vực:</b> ${tenXa}</p>
                <p><b>Thời gian:</b> 20 - 45 phút</p>
                <p><b>Phí giao:</b> 15.000đ</p>
            </div>
        `;
        ketQuaGiaoHangHienTai = { thoiGianText: "20 - 45 phút (giao nhanh)", loai: 'giaoNhanh' };
    } else if (khuVucLanCan.includes(tenXa)) {
        ketQuaKhuVuc.innerHTML = `
            <div class="theKetQua">
                <h4 class="canhBao">⚠ Khu vực lân cận</h4>
                <p><b>Khu vực:</b> ${tenXa}</p>
                <p><b>Thời gian:</b> 60 - 120 phút</p>
                <p><b>Phí giao:</b> 30.000đ</p>
            </div>
        `;
        ketQuaGiaoHangHienTai = { thoiGianText: "60 - 120 phút (khu vực lân cận)", loai: 'lancan' };
    } else {
        ketQuaKhuVuc.innerHTML = `
            <div class="theKetQua">
                <h4 class="thatBai">❌ Ngoài phạm vi giao nhanh</h4>
                <p><b>Khu vực:</b> ${tenXa}</p>
                <p>Nhà thuốc sẽ liên hệ tư vấn phương án vận chuyển phù hợp.</p>
            </div>
        `;
        ketQuaGiaoHangHienTai = { thoiGianText: "Nhà thuốc sẽ liên hệ để báo thời gian giao hàng cụ thể", loai: 'khong' };
    }
    xacNhanDatHang.disabled = false;
}

// //......// Đọc địa chỉ cấu trúc đã lưu (nếu có), quyết định hiện nhánh nào khi mở modal
function moModalGiaoHang() {
    const daLuu = docJSON(khoaTheoTaiKhoan("diaChiGiaoHangDaLuu"), null);

    if (daLuu) {
        khungDiaChiDaLuu.style.display = "block";
        khungNhapDiaChiMoi.style.display = "none";
        tomTatDiaChiDaLuu.innerHTML = `
            <p><b>${daLuu.diaChiChiTiet}</b></p>
            <p>${daLuu.xa}, ${daLuu.huyen}, ${daLuu.tinh}</p>
            <p>SĐT: ${daLuu.soDienThoai}</p>
        `;
    } else {
        khungDiaChiDaLuu.style.display = "none";
        khungNhapDiaChiMoi.style.display = "block";
    }

    hopThoaiGiaoHang.style.display = "flex";
}

if (linkKiemTraGiaoNhanh) {
    linkKiemTraGiaoNhanh.addEventListener("click", function (e) {
        e.preventDefault();
        // Đóng khung giỏ hàng và mở modal kiểm tra giao hàng nhanh
        khungGioHang.style.display = "none";
        moModalGiaoHang();
    });
}

dongHopThoaiGiaoHang.addEventListener("click", function () {
    hopThoaiGiaoHang.style.display = "none";
});

// Nhánh 1: khách bấm "Kiểm tra lại" trên địa chỉ ĐÃ LƯU - không cần nhập gì thêm
nutKiemTraLaiDiaChiCu.addEventListener("click", function () {
    const daLuu = docJSON(khoaTheoTaiKhoan("diaChiGiaoHangDaLuu"), null);
    if (!daLuu) return;
    chayKiemTraKhuVuc(daLuu.xa);
});

// Nhánh 2: khách muốn đổi sang địa chỉ khác - hiện lại form nhập tay như cũ
nutNhapDiaChiKhac.addEventListener("click", function () {
    khungDiaChiDaLuu.style.display = "none";
    khungNhapDiaChiMoi.style.display = "block";
});

// Nhánh 3: khách nhập địa chỉ MỚI, bấm Kiểm tra khu vực -> lưu lại làm địa chỉ mặc định cho lần sau
kiemTraKhuVuc.addEventListener("click", function () {
    if (tinhThanh.value === "") { hienThiThongBao("Vui lòng chọn tỉnh/thành.", "error"); return; }
    if (quanHuyen.value === "") { hienThiThongBao("Vui lòng chọn huyện.", "error"); return; }
    if (xaPhuong.value === "") { hienThiThongBao("Vui lòng chọn xã.", "error"); return; }
    if (diaChiChiTiet.value.trim() === "") { hienThiThongBao("Vui lòng nhập địa chỉ.", "error"); return; }
    if (soDienThoaiGiaoHang.value.trim() === "") { hienThiThongBao("Vui lòng nhập số điện thoại.", "error"); return; }

    chayKiemTraKhuVuc(xaPhuong.value);

    localStorage.setItem(khoaTheoTaiKhoan("diaChiGiaoHangDaLuu"), JSON.stringify({
        tinh: tinhThanh.value,
        huyen: quanHuyen.value,
        xa: xaPhuong.value,
        diaChiChiTiet: diaChiChiTiet.value.trim(),
        soDienThoai: soDienThoaiGiaoHang.value.trim()
    }));
});

xacNhanDatHang.addEventListener("click", function () {
    if (xacNhanDatHang.disabled) {
        hienThiThongBao("Vui lòng kiểm tra khu vực giao hàng trước.", "error");
        return;
    }
    if (Object.keys(gioHang).length === 0) {
        hienThiThongBao("Giỏ hàng đang trống. Vui lòng thêm sản phẩm trước.", "error");
        return;
    }

    // //......// Lấy thông tin địa chỉ vừa dùng (dù là địa chỉ cũ hay mới nhập) để đổ vào form thanh toán
    const daLuu = docJSON(khoaTheoTaiKhoan("diaChiGiaoHangDaLuu"), null);
    if (daLuu) {
        document.querySelector("#soDienThoai").value = daLuu.soDienThoai;
        document.querySelector("#diaChiGiaoHang").value = `${daLuu.diaChiChiTiet}, ${daLuu.xa}, ${daLuu.huyen}, ${daLuu.tinh}`;
    }

    hopThoaiGiaoHang.style.display = "none";
    khungGioHang.style.display = "block";
    hienThiThongBao("Đã xác nhận khu vực giao hàng. Vui lòng hoàn tất thanh toán.", "success");
});

// THANH TOÁN + POPUP THÀNH CÔNG

const nutThanhToan = document.querySelector("#nutThanhToan");
const popupThanhCong = document.querySelector("#popupThanhCong");
const nutDongPopupThanhCong = document.querySelector("#nutDongPopupThanhCong");

function taoPhaoHoa() {
    const canvas = document.querySelector("#phaoHoa");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const mauSac = ["#E15B4F", "#16786D", "#0B4F4A", "#FFD166", "#4FC3E8"];
    const hat = [];
    for (let i = 0; i < 80; i++) {
        hat.push({ x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height, r: 3 + Math.random() * 4, mau: mauSac[Math.floor(Math.random() * mauSac.length)], toc: 2 + Math.random() * 3 });
    }

    let dem = 0;
    function ve() {
        dem++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hat.forEach(function (h) {
            h.y += h.toc;
            ctx.fillStyle = h.mau;
            ctx.beginPath();
            ctx.arc(h.x, h.y, h.r, 0, Math.PI * 2);
            ctx.fill();
        });
        if (dem < 90) requestAnimationFrame(ve);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ve();
}

function hienPopupThanhCong(donHang) {
    document.querySelector("#noiDungPopupThanhCong").innerHTML = `
        <strong>Mã đơn hàng:</strong> ${donHang.maDonHang}<br>
        <strong>Khách hàng:</strong> ${donHang.tenKhachHang}<br>
        <strong>Phương thức thanh toán:</strong> ${donHang.phuongThucThanhToan}<br>
        <strong>Tổng tiền:</strong> ${donHang.tongTien.toLocaleString()}đ<br>
        <strong>Dự kiến giao hàng:</strong> ${donHang.duKienGiaoHang}<br><br>
        <strong>Đã thanh toán thành công.</strong><br>
        Cảm ơn bạn đã ủng hộ quầy thuốc chúng tôi.
    `;

    // Hiển thị popup và pháo hoa
    popupThanhCong.style.display = "flex";
    taoPhaoHoa();

    // Thêm/loại bỏ badge 'Giao hàng nhanh' trong popup
    const popupNoiDung = document.querySelector("#popupThanhCong .popupNoiDung");
    if (popupNoiDung) {
        const existing = popupNoiDung.querySelector('.badgeGiaoNhanh');
        if (donHang.fastDelivery) {
            if (!existing) {
                const b = document.createElement('span');
                b.className = 'badgeGiaoNhanh';
                b.textContent = 'Giao hàng nhanh';
                popupNoiDung.querySelector('h2').insertAdjacentElement('afterend', b);
            }
        } else if (existing) {
            existing.remove();
        }
    }

    // Nút xem đơn thuốc và tiền
    const xemDonBtn = document.querySelector("#xemDon");
    const chiTietDon = document.querySelector("#chiTietDon");
    if (xemDonBtn) {
        xemDonBtn.onclick = function () {
            if (chiTietDon.style.display === "block") {
                chiTietDon.style.display = "none";
                xemDonBtn.textContent = "Xem đơn thuốc và tiền";
            } else {
                chiTietDon.innerHTML = `
                    <p><strong>Đơn thuốc:</strong></p>
                    <ul style="margin:6px 0 8px 18px;">
                        ${donHang.sanPham.map(s => `<li>${s}</li>`).join("")}
                    </ul>
                    <p><strong>Tổng tiền:</strong> ${donHang.tongTien.toLocaleString()}đ</p>
                `;
                chiTietDon.style.display = "block";
                xemDonBtn.textContent = "Ẩn đơn thuốc";
            }
        };
    }
}

nutDongPopupThanhCong.addEventListener("click", function () { popupThanhCong.style.display = "none"; });
popupThanhCong.addEventListener("click", function (e) { if (e.target === popupThanhCong) popupThanhCong.style.display = "none"; });

nutThanhToan.addEventListener("click", function () {
    if (Object.keys(gioHang).length === 0) {
        hienThiThongBao("Giỏ hàng đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.", "error");
        return;
    }

    // Nếu khách chưa kiểm tra giao hàng nhanh thì vẫn cho phép thanh toán.
    // Nếu đã kiểm tra, dùng thông tin đó để hiển thị dự kiến giao hàng; nếu chưa, để thông báo chung.

    const thongTinGiaoHang = layThongTinGiaoHang();
    const thieu = [];
    if (!thongTinGiaoHang.hoTen) thieu.push("Họ tên người nhận");
    if (!thongTinGiaoHang.soDienThoai) thieu.push("Số điện thoại");
    if (!thongTinGiaoHang.diaChi) thieu.push("Địa chỉ giao hàng");

    if (thieu.length > 0) {
        khungThongTinGiaoHang.style.display = "block";
        formThongTinGiaoHang.style.display = "block";
        hienThiThongBao(`Thiếu thông tin giao hàng: ${thieu.join(", ")}.`, "error");
        return;
    }

    if (!confirm("Bạn chắc chắn muốn thanh toán?")) return;

    let tongTienSauGiam = Math.max(0, tinhTongTien() - soTienGiam);

    if (dungDiemCheckbox.checked) {
        const diemCo = layDiemTichLuy();
        const diemToiDa = Math.min(diemCo, Math.floor(tongTienSauGiam / 1000));
        if (diemToiDa > 0) {
            tongTienSauGiam = Math.max(0, tongTienSauGiam - diemToiDa * 1000);
            localStorage.setItem(khoaTheoTaiKhoan("diemTichLuy"), String(diemCo - diemToiDa));
        }
    }

    const diemMoi = Math.floor(tongTienSauGiam / 10000);
    localStorage.setItem(khoaTheoTaiKhoan("diemTichLuy"), String(layDiemTichLuy() + diemMoi));

    const maDonHang = "DH" + Date.now();
    const thongTinCN = docJSON(khoaTheoTaiKhoan("thongTinCaNhan"), {});

    const donHangMoi = {
        maDonHang: maDonHang,
        thoiGian: new Date().toLocaleString("vi-VN"),
        tongTien: tongTienSauGiam,
        sanPham: Object.keys(gioHang).map(function (ten) { return `${ten} x${gioHang[ten].soLuong}`; }),
        tenKhachHang: thongTinGiaoHang.hoTen || thongTinCN.hoTen || "Khách hàng",
        phuongThucThanhToan: layPhuongThucThanhToanText(),
        duKienGiaoHang: ketQuaGiaoHangHienTai ? ketQuaGiaoHangHienTai.thoiGianText : "Thời gian giao sẽ được xác nhận bởi nhà thuốc",
        fastDelivery: ketQuaGiaoHangHienTai ? (ketQuaGiaoHangHienTai.loai === 'giaoNhanh') : false
    };

    const donHangDaCo = docJSON(khoaTheoTaiKhoan("lichSuDonHang"), []);
    donHangDaCo.unshift(donHangMoi);
    localStorage.setItem(khoaTheoTaiKhoan("lichSuDonHang"), JSON.stringify(donHangDaCo));

    capNhatHienThiTichDiem();
    hienPopupThanhCong(donHangMoi);

    gioHang = {};
    ketQuaGiaoHangHienTai = null;
    xacNhanDatHang.disabled = true;
    maGiamGiaHienTai = "";
    maGiamGiaInput.value = "";
    capNhatGioHang();
    khungGioHang.style.display = "none";
});


//================================================================
// 9. ĐĂNG NHẬP / ĐĂNG KÝ
//================================================================
const nutDangNhap = document.querySelector("#nutDangNhap");
const containerDangNhap = document.querySelector("#containerDangNhap");
const nutChuyenDangKy = document.querySelector("#nutChuyenDangKy");
const nutChuyenDangNhap = document.querySelector("#nutChuyenDangNhap");
const dongContainerDangNhap = document.querySelector("#dongContainerDangNhap");
const nutXacNhanDangNhap2 = document.querySelector("#nutXacNhanDangNhap2");
const nutXacNhanDangKy = document.querySelector("#nutXacNhanDangKy");
const cacNutMangXaHoi = document.querySelectorAll(".nutMangXaHoi");

function capNhatNutDangNhap() {
    nutDangNhap.textContent = localStorage.getItem("daDangNhap") === "true" ? "Đăng xuất" : "Đăng nhập";
}
capNhatNutDangNhap();

// //......// Gọi lại MỌI dữ liệu riêng tư khi đổi tài khoản (đăng nhập/đăng xuất) - 1 nơi duy nhất
function taiLaiDuLieuCaNhan() {
    gioHang = docJSON(khoaTheoTaiKhoan("gioHang"), {});
    maGiamGiaHienTai = "";
    maGiamGiaInput.value = "";
    capNhatGioHang();
    capNhatHienThiTichDiem();
    taiThongTinGiaoHang();
    vedanhsach(danhSach);
}

nutDangNhap.addEventListener("click", function (event) {
    event.stopPropagation();
    if (localStorage.getItem("daDangNhap") === "true") {
        if (confirm("Bạn có muốn đăng xuất không?")) {
            localStorage.removeItem("daDangNhap");
            localStorage.removeItem("tenTaiKhoanHienTai");
            taiLaiDuLieuCaNhan();
            capNhatNutDangNhap();
            hienThiThongBao("Đã đăng xuất", "info");
        }
    } else {
        containerDangNhap.classList.remove("active");
        containerDangNhap.style.display = "block";
    }
});

document.querySelectorAll(".nutHienThiMK").forEach(function (nut) {
    nut.addEventListener("click", function () {
        const oInput = document.querySelector("#" + nut.dataset.target);
        const dangAn = oInput.type === "password";
        oInput.type = dangAn ? "text" : "password";
        nut.textContent = dangAn ? "🙈" : "👁️";
    });
});

dongContainerDangNhap.addEventListener("click", function () { containerDangNhap.style.display = "none"; });
nutChuyenDangKy.addEventListener("click", function () { containerDangNhap.classList.add("active"); });
nutChuyenDangNhap.addEventListener("click", function () { containerDangNhap.classList.remove("active"); });

nutXacNhanDangNhap2.addEventListener("click", function () {
    const taiKhoan = document.querySelector("#dnTaiKhoan").value;
    const matKhau = document.querySelector("#dnMatKhau").value;

    if (taiKhoan === "" || matKhau === "") { hienThiThongBao("Vui lòng nhập đủ tài khoản và mật khẩu.", "error"); return; }

    // //......// DEMO ONLY: tài khoản cố định, KHÔNG dùng cách này khi có Backend thật
    if (taiKhoan === "Nguyenhuydung147" && matKhau === "Nguyenhuydung147") {
        localStorage.setItem("daDangNhap", "true");
        localStorage.setItem("tenTaiKhoanHienTai", taiKhoan);
        taiLaiDuLieuCaNhan();

        const ttcn = docJSON(khoaTheoTaiKhoan("thongTinCaNhan"), {});
        ttcn.hoTen = ttcn.hoTen || taiKhoan;
        localStorage.setItem(khoaTheoTaiKhoan("thongTinCaNhan"), JSON.stringify(ttcn));

        hienThiThongBao("Đăng nhập thành công! Xin chào " + taiKhoan, "success");
        containerDangNhap.style.display = "none";
        document.querySelector("#dnTaiKhoan").value = "";
        document.querySelector("#dnMatKhau").value = "";
        capNhatNutDangNhap();
    } else {
        hienThiThongBao("Sai tài khoản hoặc mật khẩu.", "error");
    }
});

nutXacNhanDangKy.addEventListener("click", function () {
    const hoTen = document.querySelector("#dkHoTen").value;
    const taiKhoan = document.querySelector("#dkTaiKhoan").value;
    const matKhau = document.querySelector("#dkMatKhau").value;

    if (hoTen === "" || taiKhoan === "" || matKhau === "") { hienThiThongBao("Vui lòng nhập đủ thông tin đăng ký.", "error"); return; }

    hienThiThongBao("Đăng ký demo thành công! Cần Backend thật để lưu tài khoản.", "success");
    containerDangNhap.classList.remove("active");
});

cacNutMangXaHoi.forEach(function (nut) {
    nut.addEventListener("click", function () {
        hienThiThongBao("Đăng nhập bằng " + nut.dataset.mang + " (demo, cần Backend thật).", "info");
    });
});

// MEGA MENU DANH MỤC

const cacNutMoMenu = document.querySelectorAll(".nutMoMenu");
const megaMenu = document.querySelector("#megaMenu");
const cotPhai = document.querySelector("#cotPhai");
const nutTatCaSanPham = document.querySelector("#nutTatCaSanPham");

function veCotPhai(mang) {
    cotPhai.innerHTML = mang.map(function (sp) { return `<span class="mucCotPhai" data-ten="${sp.ten}">${sp.ten}</span>`; }).join("");
}

cacNutMoMenu.forEach(function (nut) {
    nut.addEventListener("click", function () {
        const nhom = nut.dataset.nhom;
        const dangMo = megaMenu.style.display === "flex" && megaMenu.dataset.nhomDangMo === nhom;
        if (dangMo) { megaMenu.style.display = "none"; return; }

        veCotPhai(danhSach.filter(function (sp) { return sp.nhomLon === nhom; }));
        megaMenu.style.display = "flex";
        megaMenu.dataset.nhomDangMo = nhom;
    });
});

cotPhai.addEventListener("click", function (e) {
    if (e.target.classList.contains("mucCotPhai")) {
        vedanhsach(danhSach.filter(function (sp) { return sp.ten === e.target.dataset.ten; }));
        megaMenu.style.display = "none";
    }
});

nutTatCaSanPham.addEventListener("click", function () { vedanhsach(danhSach); });

//  dấu ba gạch + khung chức năng (đơn hàng / thông tin cá nhân / tích điểm / hỗ trợ)

const dauBaGach = document.querySelector("#dauBaGach");
const menuBaGach = document.querySelector("#menuBaGach");
const khungMenuChucNang = document.querySelector("#menuChucNang");
const tieuDeMenuChucNang = document.querySelector("#tieuDeMenuChucNang");
const noiDungMenuChucNang = document.querySelector("#noiDungMenuChucNang");
const dongMenuChucNang = document.querySelector("#dongMenuChucNang");

dauBaGach.addEventListener("click", function (e) {
    e.stopPropagation();
    menuBaGach.style.display = menuBaGach.style.display === "block" ? "none" : "block";
});

function moKhungMenu(tieuDe, html) {
    tieuDeMenuChucNang.textContent = tieuDe;
    noiDungMenuChucNang.innerHTML = html;
    khungMenuChucNang.style.display = "flex";
}
function dongKhungMenu() { khungMenuChucNang.style.display = "none"; }

function daDangNhapChua() { return localStorage.getItem("daDangNhap") === "true"; }

function yeuCauDangNhap(tenChucNang) {
    moKhungMenu("Cần đăng nhập", `
        <div class="bangThongTinChucNang">
            <div class="hangThongTin">Bạn cần đăng nhập để xem "${tenChucNang}".</div>
        </div>
        <div class="hangNutYeuCauDangNhap">
            <button type="button" id="nutTiepTucDangNhap" class="nutKhungMenu">Đăng nhập ngay</button>
        </div>
    `);
}

function xuLyMucMenu(action) {
    const canDangNhap = ["thongTin", "yeuThich", "tichDiem", "donHang"];

    if (canDangNhap.includes(action) && !daDangNhapChua()) {
        const tenHienThi = { thongTin: "Thông tin cá nhân", yeuThich: "Sản phẩm yêu thích", tichDiem: "Tích điểm", donHang: "Đơn hàng của tôi" };
        yeuCauDangNhap(tenHienThi[action]);
        return;
    }

    switch (action) {
        case "donHang": {
            const donHangDaCo = docJSON(khoaTheoTaiKhoan("lichSuDonHang"), []);
            if (donHangDaCo.length === 0) {
                moKhungMenu("Đơn hàng của tôi", `<div class="bangThongTinChucNang"><div class="hangThongTin">Bạn chưa có đơn hàng nào.</div></div>`);
            } else {
                const html = donHangDaCo.slice(0, 10).map(function (d) {
                    return `<div class="hangThongTin"><strong>${d.thoiGian}</strong> ${d.fastDelivery ? '<span class="badgeGiaoNhanh">Giao nhanh</span>' : ''}<br>Sản phẩm: ${d.sanPham.join(", ")}<br>Tổng tiền: ${d.tongTien.toLocaleString()}đ</div>`;
                }).join("");
                moKhungMenu("Đơn hàng của tôi", `<div class="bangThongTinChucNang">${html}</div>`);
            }
            break;
        }
        case "thongTin": {
            const macDinh = { hoTen: taiKhoanHienTai() || "Khách", soDienThoai: "Chưa cập nhật", email: "Chưa cập nhật", diaChi: "Chưa cập nhật" };
            const tt = { ...macDinh, ...docJSON(khoaTheoTaiKhoan("thongTinCaNhan"), {}) };
            moKhungMenu("Thông tin cá nhân", `
                <div class="bangThongTinChucNang">
                    <div class="hangThongTin"><strong>Họ và tên:</strong> ${tt.hoTen}</div>
                    <div class="hangThongTin"><strong>Số điện thoại:</strong> ${tt.soDienThoai}</div>
                    <div class="hangThongTin"><strong>Email:</strong> ${tt.email}</div>
                    <div class="hangThongTin"><strong>Địa chỉ:</strong> ${tt.diaChi}</div>
                </div>
            `);
            break;
        }
        case "yeuThich":
            moKhungYeuThich();
            break;
        case "tichDiem":
            moKhungMenu("Tích điểm", `
                <div class="bangThongTinChucNang">
                    <div class="hangThongTin"><strong>Điểm hiện tại:</strong> ${layDiemTichLuy().toLocaleString()} điểm</div>
                    <div class="hangThongTin"><strong>Tỷ lệ quy đổi:</strong> 1 điểm = 1.000đ</div>
                    <div class="hangThongTin">Sử dụng điểm khi thanh toán để giảm giá trực tiếp.</div>
                </div>
            `);
            break;
        case "hoTro":
            moKhungMenu("Hỗ trợ / Liên hệ", `
                <div class="bangThongTinChucNang">
                    <div class="hangThongTin"><strong>Hotline:</strong> 0915.559.667</div>
                    <div class="hangThongTin"><strong>Giờ làm việc:</strong> 07:00 - 21:00, cả tuần</div>
                </div>
            `);
            break;
    }
}

document.querySelectorAll("#menuBaGach .mucMenu[data-action]").forEach(function (muc) {
    muc.addEventListener("click", function (e) {
        e.stopPropagation();
        menuBaGach.style.display = "none";
        xuLyMucMenu(muc.dataset.action);
    });
});

dongMenuChucNang.addEventListener("click", dongKhungMenu);
khungMenuChucNang.addEventListener("click", function (e) { if (e.target === khungMenuChucNang) dongKhungMenu(); });

noiDungMenuChucNang.addEventListener("click", function (e) {
    if (e.target.id === "nutTiepTucDangNhap") {
        e.stopPropagation();
        dongKhungMenu();
        menuBaGach.style.display = "none";
        containerDangNhap.classList.remove("active");
        containerDangNhap.style.display = "block";
    }
});

//  THÔNG BÁO KHUYẾN MÃI (strip chạy tự động)

const thongBaoStripItems = Array.from(document.querySelectorAll(".thongBaoItem"));
let viTriThongBaoHienTai = 0;
if (thongBaoStripItems.length > 0) {
    function chayThongBaoStrip() {
        thongBaoStripItems.forEach(function (item, index) { item.classList.toggle("active", index === viTriThongBaoHienTai); });
        viTriThongBaoHienTai = (viTriThongBaoHienTai + 1) % thongBaoStripItems.length;
    }
    chayThongBaoStrip();
    setInterval(chayThongBaoStrip, 3500);
}
// 13. ĐÓNG CÁC KHUNG NỔI KHI BẤM RA NGOÀI (đặt CUỐI CÙNG vì cần tham chiếu mọi khung ở trên)

document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("nutMoMenu") && !megaMenu.contains(e.target)) {
        megaMenu.style.display = "none";
    }
    if (!menuBaGach.contains(e.target) && e.target !== dauBaGach) {
        menuBaGach.style.display = "none";
    }
    if (!containerDangNhap.contains(e.target) && e.target !== nutDangNhap && containerDangNhap.style.display === "block") {
        containerDangNhap.style.display = "none";
    }
    if (!khungGioHang.contains(e.target) && e.target !== nutGioHangIcon && khungGioHang.style.display === "block") {
        khungGioHang.style.display = "none";
    }
    if (!khungThongTinGiaoHang.contains(e.target) && e.target !== nutThongTinGiaoHang && formThongTinGiaoHang.style.display === "block") {
        formThongTinGiaoHang.style.display = "none";
    }
});

// 14. KHỞI TẠO (chạy 1 lần khi trang vừa load xong)

capNhatGioHang();
capNhatHienThiTichDiem();
taiThongTinGiaoHang();
