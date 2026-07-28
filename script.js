const danhSach = [
    { ten: "Thuốc cảm cúm", gia: 25000, anh: "https://vnras.com/drug/wp-content/uploads/2025/08/Panadol-Cam-Cum-2.jpg", tonkho: 10, chitiet: "Thuốc cảm cúm Panadol giúp giảm đau, hạ sốt, giảm các triệu chứng cảm cúm.", danhMuc: "thuốc cảm cúm", nhomLon: "Thuốc" },
    { ten: "Thuốc huyết áp", gia: 45000, anh: "https://www.vinmec.com/static/uploads/medium_20200220_013447_856538_thuoc_Coversyl_max_1800x1800_jpg_ca76a051fe.jpg", tonkho: 0, chitiet: "Thuốc huyết áp Coversyl max giúp kiểm soát huyết áp.", danhMuc: "thuốc huyết áp", nhomLon: "Thuốc" },
    { ten: "Thuốc tiểu đường", gia: 60000, anh: "https://cdn.diag.vn/2024/11/9de5c0aa-diamicron-mr-30mg-1.jpg", tonkho: 8, chitiet: "Thuốc tiểu đường Diamicron MR giúp kiểm soát đường huyết.", danhMuc: "thuốc tiểu đường", nhomLon: "Thuốc" },
    { ten: "thuốc tiêu hóa", gia: 100000, anh: "https://www.vinmec.com/static/uploads/medium_20200220_013447_856538_thuoc_Coversyl_max_1800x1800_jpg_ca76a051fe.jpg", tonkho: 5, chitiet: "Thuốc tiêu hóa Coversyl max giúp cải thiện chức năng tiêu hóa.", danhMuc: "thuốc tiêu hóa", nhomLon: "Thuốc" },

    { ten: "vitamin A", gia: 50000, anh: "https://myphamxachtayduc.vn/wp-content/uploads/2016/11/Doppelherz-aktiv-Vitamin-A-2500-I.E.jpg", tonkho: 15, chitiet: "Vitamin A Doppelherz aktiv hỗ trợ sức khỏe mắt và da.", danhMuc: "vitamin", nhomLon: "Vitamin" },
    { ten: "vitamin C", gia: 50000, anh: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hrm/hrm50020/y/24.jpg", tonkho: 12, chitiet: "Vitamin C Iherb giúp tăng cường hệ miễn dịch.", danhMuc: "vitamin", nhomLon: "Vitamin" },

    { ten: "Sữa non tăng đề kháng", gia: 350000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuqG3sI0tgobeTp_zJnejHdZL7dK8QS--pQWqDxJ0aP8iYNZcg5fdhfzL&s=10", tonkho: 20, chitiet: "Sữa non Alma Colostrum hỗ trợ tăng cường sức đề kháng cho cơ thể.", danhMuc: "thực phẩm chức năng", nhomLon: "Thực phẩm chức năng" },
    { ten: "Viên uống Omega 3", gia: 280000, anh: "https://orihiro.vn/wp-content/uploads/2020/04/20.png", tonkho: 25, chitiet: "Omega 3 hỗ trợ tim mạch, tốt cho trí não và thị lực.", danhMuc: "thực phẩm chức năng", nhomLon: "Thực phẩm chức năng" },
    { ten: "Viên uống Collagen", gia: 420000, anh: "https://heluva.vn/wp-content/uploads/2020/08/product-3.jpg", tonkho: 10, chitiet: "Collagen hỗ trợ làm đẹp da, chống lão hóa.", danhMuc: "thực phẩm chức năng", nhomLon: "Thực phẩm chức năng" },

    { ten: "Kem chống nắng Anessa", gia: 550000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VSdoDVFZp2dQlefK0iJSGRtc0Y8NQ20md-HmMyiPcg&s=10", tonkho: 12, chitiet: "Kem chống nắng Anessa bảo vệ da khỏi tia UV, chống nước.", danhMuc: "kem chống nắng", nhomLon: "Dược mỹ phẩm" },
    { ten: "Kem dưỡng ẩm Cetaphil", gia: 320000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFF9xP1cK64T9YJu4VtHdiBrPmPuV5_UkVtjWp--ZEg&s=10", tonkho: 18, chitiet: "Kem dưỡng ẩm Cetaphil dịu nhẹ, phù hợp da nhạy cảm.", danhMuc: "kem dưỡng da", nhomLon: "Dược mỹ phẩm" },
    { ten: "Serum Vitamin C", gia: 480000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxPk00amo5sbTSM4_za_c-pK1tJWE7Q0hbtuP0blZTw&s=10", tonkho: 9, chitiet: "Serum Vitamin C giúp sáng da, mờ thâm nám.", danhMuc: "kem dưỡng da", nhomLon: "Dược mỹ phẩm" },

    { ten: "Nhiệt kế điện tử", gia: 120000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH-9P8LDkBU1-82y9f52ikhrXTmfEPNolAnSEEnOpZMesvRIe3VR5hd3p&s=10", tonkho: 30, chitiet: "Nhiệt kế điện tử đo nhanh, chính xác, an toàn cho cả gia đình.", danhMuc: "dụng cụ y tế", nhomLon: "Dụng cụ y tế" },
    { ten: "Máy đo huyết áp", gia: 890000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqE7iA_H7Hy31kHkT495BuFry5hnYjXop5YfKO2IhRz4dCmFVerP_Jj0c&s=10", tonkho: 7, chitiet: "Máy đo huyết áp bắp tay tự động, hiển thị kết quả rõ ràng.", danhMuc: "dụng cụ y tế", nhomLon: "Dụng cụ y tế" },
    { ten: "Khẩu trang y tế", gia: 45000, anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__TAgJKXKp5Gf4i2a_hLnChSQaNlxp5K2enXp7i6a_JQNLUO1rwiCBVk&s=10", tonkho: 50, chitiet: "Khẩu trang y tế 4 lớp, kháng khuẩn, hộp 50 cái.", danhMuc: "dụng cụ y tế", nhomLon: "Dụng cụ y tế" }
];

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

const oDanhSach = document.querySelector("#dsSanPham");
const khungYeuThich = document.querySelector("#khungYeuThich");
const noiDungKhungYeuThich = document.querySelector("#noiDungKhungYeuThich");
const dongKhungYeuThichButton = document.querySelector("#dongKhungYeuThich");
const thongBao = document.querySelector("#thongBao");
const thongBaoStripItems = Array.from(document.querySelectorAll(".thongBaoItem"));
let viTriThongBaoHienTai = 0;

function hienThiThongBao(message, type = "info") {
    const thongTam = document.createElement("div");
    thongTam.className = `thongItem ${type}`;
    thongTam.textContent = message;
    thongBao.appendChild(thongTam);

    setTimeout(function () {
        thongTam.remove();
    }, 2200);
}

function capNhatYeuThich() {
    return;
}

function hienThiKhungYeuThich() {
    const yeuThich = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("sanPhamYeuThich"))) || [];

    if (!noiDungKhungYeuThich) {
        return;
    }

    noiDungKhungYeuThich.innerHTML = "";

    if (yeuThich.length === 0) {
        noiDungKhungYeuThich.innerHTML = "<p>Chưa có sản phẩm yêu thích nào.</p>";
        return;
    }

    yeuThich.forEach(function (tenSp) {
        const sp = danhSach.find(function (sanPhamItem) {
            return sanPhamItem.ten === tenSp;
        });

        if (!sp) {
            return;
        }

        noiDungKhungYeuThich.innerHTML += `
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
    });
}

function moKhungYeuThich() {
    if (khungYeuThich) {
        hienThiKhungYeuThich();
        khungYeuThich.style.display = "flex";
    }
}

function dongKhungYeuThich() {
    if (khungYeuThich) {
        khungYeuThich.style.display = "none";
    }
}

function themVaoGioHangTuSanPham(tenSanPham, giaSanPham, tonKhoGoc) {
    if (!gioHang[tenSanPham]) {
        gioHang[tenSanPham] = { soLuong: 0, gia: giaSanPham };
    }

    if (gioHang[tenSanPham].soLuong >= tonKhoGoc) {
        hienThiThongBao(`Kho chỉ còn ${tonKhoGoc} sản phẩm "${tenSanPham}".`, "error");
        return;
    }

    gioHang[tenSanPham].soLuong = gioHang[tenSanPham].soLuong + 1;
    hienThiThongBao(`Đã thêm ${tenSanPham} vào giỏ hàng.`, "success");
    capNhatGioHang();
}

function vedanhsach(mang) {
    oDanhSach.innerHTML = "";
    const yeuThich = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("sanPhamYeuThich"))) || [];

    mang.forEach(function (sp) {
        const daYeuThich = yeuThich.includes(sp.ten);
        oDanhSach.innerHTML += `
            <li>
                <img src="${sp.anh}" alt="${sp.ten}" width="100" height="100">
                <span class="tenSanPham">${sp.ten}</span> - ${sp.gia.toLocaleString()}đ
                <br>
                <p class="chitiet" style="display:none;">${sp.chitiet}</p>
                <button class="nutYeuThich ${daYeuThich ? 'active' : ''}" data-ten="${sp.ten}">❤</button>
                <button class="nutThemGio" data-ten="${sp.ten}" data-gia="${sp.gia}" data-tonkho="${sp.tonkho}" ${sp.tonkho === 0 ? 'disabled' : ''}>${sp.tonkho === 0 ? 'Hết hàng' : 'Thêm'}</button>
                <button class="nutbogio" data-ten="${sp.ten}" data-gia="${sp.gia}">hủy</button>
            </li>
        `;
    });
}

vedanhsach(danhSach);

const tatCaSanPham = document.querySelectorAll("li");

tatCaSanPham.forEach(function (motSanPham) {
    motSanPham.addEventListener("click", function () {
        motSanPham.style.color = "red";
    });
    motSanPham.addEventListener("mouseover", function () {
        motSanPham.style.color = "orange";
    });
    motSanPham.addEventListener("mouseout", function () {
        motSanPham.style.color = "black";
    });
});

const oTimKiem = document.querySelector("#oTimKiem");

oTimKiem.addEventListener("input", function () {
    const tuKhoa = oTimKiem.value.toLowerCase();
    const ketQuaLoc = danhSach.filter(function (sp) {
        return sp.ten.toLowerCase().includes(tuKhoa);
    });
    vedanhsach(ketQuaLoc);
});

const oPhuongThucThanhToan = document.querySelector("#phuongThucThanhToan");

function layPhuongThucThanhToanText() {
    const bang = {
        tienMat: "Tiền mặt",
        theNganHang: "Thẻ ngân hàng",
        chuyenKhoan: "Chuyển khoản",
        viDienTu: "Ví điện tử"
    };
    return bang[oPhuongThucThanhToan.value] || "Chưa chọn";
}

let gioHang = {};
try {
    gioHang = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("gioHang"))) || {};
} catch (error) {
    gioHang = {};
}

const chiTietGioHang = document.querySelector("#chiTietGioHang");
const soLuong = document.querySelector("#soLuong");
const tongTienHienThi = document.querySelector("#tongTien");
const dongGiamGia = document.querySelector("#dongGiamGia");
const tongSauGiamHienThi = document.querySelector("#tongSauGiam");
const maGiamGiaInput = document.querySelector("#maGiamGia");
const nutApDungMaGiamGia = document.querySelector("#nutApDungMaGiamGia");
const nutXoaMaGiamGia = document.querySelector("#nutXoaMaGiamGia");
const thongBaoMaGiamGia = document.querySelector("#thongBaoMaGiamGia");
const dungDiemCheckbox = document.querySelector("#dungDiemCheckbox");
const thongTinDiemThanhToan = document.querySelector("#thongTinDiemThanhToan");

let maGiamGiaHienTai = "";
let soTienGiam = 0;

function layDiemTichLuy() {
    try {
        return Number(localStorage.getItem(khoaTheoTaiKhoan("diemTichLuy"))) || 0;
    } catch (error) {
        return 0;
    }
}

function capNhatHienThiTichDiem() {
    const diem = layDiemTichLuy();
    if (soDiemTich) {
        soDiemTich.textContent = diem.toLocaleString();
    }
    if (dongDiem) {
        dongDiem.textContent = `Điểm tích lũy: ${diem.toLocaleString()} điểm`;
    }
    if (thongTinDiemThanhToan) {
        thongTinDiemThanhToan.textContent = `Điểm hiện có: ${diem.toLocaleString()} điểm (1 điểm = 1.000đ)`;
    }
    if (dungDiemCheckbox) {
        dungDiemCheckbox.disabled = diem <= 0;
        if (diem <= 0 && dungDiemCheckbox.checked) {
            dungDiemCheckbox.checked = false;
        }
    }
}

function tinhTongTien() {
    let tongTien = 0;
    Object.keys(gioHang).forEach(function (tenSanPham) {
        const sanPham = gioHang[tenSanPham];
        tongTien += sanPham.gia * sanPham.soLuong;
    });
    return tongTien;
}

function capNhatGiamGiaHienThi() {
    const tongTien = tinhTongTien();
    const maGiamGia = maGiamGiaHienTai.toUpperCase();

    if (!maGiamGia) {
        soTienGiam = 0;
        dongGiamGia.textContent = "Giảm giá: 0đ";
        tongSauGiamHienThi.textContent = "Còn lại: 0đ";
        return;
    }

    const bangMa = {
        SALE10: 0.1,
        WELCOME20: 0.2,
        SAVE30: 0.3
    };

    const tyLeGiam = bangMa[maGiamGia] || 0;
    if (tyLeGiam > 0) {
        soTienGiam = Math.round(tongTien * tyLeGiam);
        dongGiamGia.textContent = `Giảm giá: ${soTienGiam.toLocaleString()}đ`;
        tongSauGiamHienThi.textContent = `Còn lại: ${(tongTien - soTienGiam).toLocaleString()}đ`;
    } else {
        soTienGiam = 0;
        dongGiamGia.textContent = "Giảm giá: 0đ";
        tongSauGiamHienThi.textContent = "Còn lại: 0đ";
    }
}

capNhatGioHang();

oDanhSach.addEventListener("click", function (e) {
    if (e.target.classList.contains("nutThemGio")) {
        const tenSanPham = e.target.dataset.ten;
        const giaSanPham = Number(e.target.dataset.gia);
        const tonKhoGoc = Number(e.target.dataset.tonkho);
        themVaoGioHangTuSanPham(tenSanPham, giaSanPham, tonKhoGoc);
    }

    if (e.target.classList.contains("nutbogio")) {
        const tenSanPham = e.target.dataset.ten;

        if (gioHang[tenSanPham] && gioHang[tenSanPham].soLuong > 0) {
            gioHang[tenSanPham].soLuong = gioHang[tenSanPham].soLuong - 1;

            if (gioHang[tenSanPham].soLuong <= 0) {
                delete gioHang[tenSanPham];
            }

            capNhatGioHang();
            hienThiThongBao(`Đã giảm số lượng ${tenSanPham}.`, "info");
        }
    }

    if (e.target.classList.contains("nutYeuThich")) {
        const tenSanPham = e.target.dataset.ten;
        const yeuThich = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("sanPhamYeuThich"))) || [];
        const viTri = yeuThich.indexOf(tenSanPham);

        if (viTri === -1) {
            yeuThich.push(tenSanPham);
            hienThiThongBao(`Đã thêm ${tenSanPham} vào yêu thích.`, "success");
        } else {
            yeuThich.splice(viTri, 1);
            hienThiThongBao(`Đã bỏ ${tenSanPham} khỏi yêu thích.`, "info");
        }

        localStorage.setItem(khoaTheoTaiKhoan("sanPhamYeuThich"), JSON.stringify(yeuThich));
        capNhatYeuThich();
        hienThiKhungYeuThich();
        vedanhsach(danhSach);
    }

    if (e.target.classList.contains("tenSanPham")) {
        const chiTiet = e.target.closest("li").querySelector(".chitiet");
        if (chiTiet.style.display === "none") {
            chiTiet.style.display = "block";
        } else {
            chiTiet.style.display = "none";
        }
    }
});

const oSapXepGia = document.querySelector("#oSapXepGia");
oSapXepGia.addEventListener("change", function () {
    const giaTri = oSapXepGia.value;
    let danhSachSapXep = [...danhSach];
    if (giaTri === "tang") {
        danhSachSapXep.sort(function (a, b) {
            return a.gia - b.gia;
        });
    } else if (giaTri === "giam") {
        danhSachSapXep.sort(function (a, b) {
            return b.gia - a.gia;
        });
    }
    vedanhsach(danhSachSapXep);
});

const nutDangNhap = document.querySelector("#nutDangNhap");
const containerDangNhap = document.querySelector("#containerDangNhap");
const nutChuyenDangKy = document.querySelector("#nutChuyenDangKy");
const nutChuyenDangNhap = document.querySelector("#nutChuyenDangNhap");
const dongContainerDangNhap = document.querySelector("#dongContainerDangNhap");
const nutXacNhanDangNhap2 = document.querySelector("#nutXacNhanDangNhap2");
const nutXacNhanDangKy = document.querySelector("#nutXacNhanDangKy");
const cacNutMangXaHoi = document.querySelectorAll(".nutMangXaHoi");
const nutThongTinGiaoHang = document.querySelector("#nutThongTinGiaoHang");
const formThongTinGiaoHang = document.querySelector("#formThongTinGiaoHang");
const nutLuuThongTin = document.querySelector("#nutLuuThongTin");
const khungThongTinGiaoHang = document.querySelector("#khungThongTinGiaoHang");
const nutGioHangIcon = document.querySelector("#nutGioHangIcon");
const khungGioHang = document.querySelector("#khungGioHang");
const mucSanPhamYeuThich = document.querySelector("#mucSanPhamYeuThich");
const mucXemTichDiem = document.querySelector("#mucXemTichDiem");
const khungMenuChucNang = document.querySelector("#menuChucNang");
const tieuDeMenuChucNang = document.querySelector("#tieuDeMenuChucNang");
const noiDungMenuChucNang = document.querySelector("#noiDungMenuChucNang");
const dongMenuChucNang = document.querySelector("#dongMenuChucNang");
const khungTichDiem = document.querySelector("#khungTichDiem");
const soDiemTich = document.querySelector("#soDiemTich");
const dongDiem = document.querySelector("#dongDiem");

function capNhatThongTinCaNhan(duLieuMoi = {}) {
    const thongTinMacDinh = {
        hoTen: "Nguyễn Huy Dung",
        soDienThoai: "070 1516 1407",
        email: "dung.nguyen@nhathuocbichphuong.vn",
        ngaySinh: "14/07/1995",
        diaChi: "Quang Trung / 110 Tổ 9, KP 8, Trị An, Đồng Nai",
        maThanhVien: "BP-147",
        capDo: "Thành viên bạc"
    };

    let thongTinHienTai = {};
    try {
        thongTinHienTai = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("thongTinCaNhan"))) || {};
    } catch (error) {
        thongTinHienTai = {};
    }

    const thongTinMoi = {
        ...thongTinMacDinh,
        ...thongTinHienTai,
        ...duLieuMoi
    };

    localStorage.setItem(khoaTheoTaiKhoan("thongTinCaNhan"), JSON.stringify(thongTinMoi));
    return thongTinMoi;
}

function capNhatNutDangNhap() {
    if (localStorage.getItem("daDangNhap") === "true") {
        nutDangNhap.textContent = "Đăng xuất";
    } else {
        nutDangNhap.textContent = "Đăng nhập";
    }
}

capNhatNutDangNhap();

function taiLaiDuLieuCaNhan() {
    gioHang = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("gioHang"))) || {};
    maGiamGiaHienTai = "";
    if (maGiamGiaInput) {
        maGiamGiaInput.value = "";
    }
    capNhatGioHang();
    capNhatHienThiTichDiem();
    taiThongTinGiaoHang();
    capNhatLichSuDonHang();
    vedanhsach(danhSach);
}

nutDangNhap.addEventListener("click", function (event) {
    event.stopPropagation();

    if (localStorage.getItem("daDangNhap") === "true") {
        const xacNhan = confirm("Bạn có muốn đăng xuất không?");

        if (xacNhan) {
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

const cacNutHienThiMK = document.querySelectorAll(".nutHienThiMK");
cacNutHienThiMK.forEach(function (nut) {
    nut.addEventListener("click", function () {
        const oInput = document.querySelector("#" + nut.dataset.target);
        if (oInput.type === "password") {
            oInput.type = "text";
            nut.textContent = "🙈";
        } else {
            oInput.type = "password";
            nut.textContent = "👁️";
        }
    });
});

dongContainerDangNhap.addEventListener("click", function () {
    containerDangNhap.style.display = "none";
});

nutChuyenDangKy.addEventListener("click", function () {
    containerDangNhap.classList.add("active");
});

nutChuyenDangNhap.addEventListener("click", function () {
    containerDangNhap.classList.remove("active");
});

nutXacNhanDangNhap2.addEventListener("click", function () {
    const taiKhoan = document.querySelector("#dnTaiKhoan").value;
    const matKhau = document.querySelector("#dnMatKhau").value;

    if (taiKhoan === "" || matKhau === "") {
        hienThiThongBao("Vui lòng nhập đủ tài khoản và mật khẩu.", "error");
        return;
    }

    if (taiKhoan === "Nguyenhuydung147" && matKhau === "Nguyenhuydung147") {
        localStorage.setItem("daDangNhap", "true");
        localStorage.setItem("tenTaiKhoanHienTai", taiKhoan);

        taiLaiDuLieuCaNhan();
        capNhatThongTinCaNhan({ hoTen: taiKhoan });

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

    if (hoTen === "" || taiKhoan === "" || matKhau === "") {
        hienThiThongBao("Vui lòng nhập đủ thông tin đăng ký.", "error");
        return;
    }

    hienThiThongBao("Đăng ký demo thành công! Cần Backend thật để lưu tài khoản.", "success");
    containerDangNhap.classList.remove("active");
});

cacNutMangXaHoi.forEach(function (nut) {
    nut.addEventListener("click", function () {
        const tenMang = nut.dataset.mang;
        hienThiThongBao("Đăng nhập bằng " + tenMang + "", "info");
    });
});

const cacNutMoMenu = document.querySelectorAll(".nutMoMenu");
const megaMenu = document.querySelector("#megaMenu");
const cotPhai = document.querySelector("#cotPhai");
const nutTatCaSanPham = document.querySelector("#nutTatCaSanPham");

function veCotPhai(mang) {
    cotPhai.innerHTML = mang.map(function (sp) {
        return `<span class="mucCotPhai" data-ten="${sp.ten}">${sp.ten}</span>`;
    }).join("");
}

cacNutMoMenu.forEach(function (nut) {
    nut.addEventListener("click", function () {
        const nhomChinh = nut.dataset.nhom;
        const dangMoDungNhomNay = megaMenu.style.display === "flex" && megaMenu.dataset.nhomDangMo === nhomChinh;

        if (dangMoDungNhomNay) {
            megaMenu.style.display = "none";
            return;
        }

        const dsTrongNhom = danhSach.filter(function (sp) {
            return sp.nhomLon === nhomChinh;
        });

        veCotPhai(dsTrongNhom);
        megaMenu.style.display = "flex";
        megaMenu.dataset.nhomDangMo = nhomChinh;
    });
});

cotPhai.addEventListener("click", function (e) {
    if (e.target.classList.contains("mucCotPhai")) {
        const ten = e.target.dataset.ten;
        const ketQua = danhSach.filter(function (sp) { return sp.ten === ten; });
        vedanhsach(ketQua);
        megaMenu.style.display = "none";
    }
});

document.addEventListener("click", function (e) {
    const laNutMoMenu = e.target.classList.contains("nutMoMenu");
    const laBenTrongMenu = megaMenu.contains(e.target);
    if (!laNutMoMenu && !laBenTrongMenu) {
        megaMenu.style.display = "none";
    }

    const clickTrongMenuBaGach = menuBaGach.contains(e.target) || e.target === dauBaGach;
    if (!clickTrongMenuBaGach) {
        menuBaGach.style.display = "none";
    }

    const clickTrongKhungGioHang = khungGioHang.contains(e.target) || e.target === nutGioHangIcon;
    if (!clickTrongKhungGioHang && khungGioHang.style.display === "block") {
        khungGioHang.style.display = "none";
    }

    const clickTrongFormDangNhap = containerDangNhap.contains(e.target) || e.target === nutDangNhap;
    if (!clickTrongFormDangNhap && containerDangNhap.style.display === "block") {
        containerDangNhap.style.display = "none";
    }

    const clickTrongThongTinGiaoHang = khungThongTinGiaoHang.contains(e.target) || e.target === nutThongTinGiaoHang;
    if (!clickTrongThongTinGiaoHang && formThongTinGiaoHang.style.display === "block") {
        formThongTinGiaoHang.style.display = "none";
    }
});

nutTatCaSanPham.addEventListener("click", function () {
    vedanhsach(danhSach);
});

const dauBaGach = document.getElementById("dauBaGach");
const menuBaGach = document.getElementById("menuBaGach");

function moKhungMenu(tieuDe, html) {
    if (!khungMenuChucNang || !tieuDeMenuChucNang || !noiDungMenuChucNang) {
        return;
    }

    tieuDeMenuChucNang.textContent = tieuDe;
    noiDungMenuChucNang.innerHTML = html;
    khungMenuChucNang.style.display = "flex";
}

function dongKhungMenu() {
    if (khungMenuChucNang) {
        khungMenuChucNang.style.display = "none";
    }
}

function daDangNhapChua() {
    return localStorage.getItem("daDangNhap") === "true";
}

function yeuCauDangNhap(tenChucNang) {
    moKhungMenu("Cần đăng nhập", `
        <div class="bangThongTin">
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
        const tenHienThi = {
            thongTin: "Thông tin cá nhân",
            yeuThich: "Sản phẩm yêu thích",
            tichDiem: "Tích điểm",
            donHang: "Đơn hàng của tôi"
        };
        yeuCauDangNhap(tenHienThi[action]);
        return;
    }

    switch (action) {
        case "donHang":
            let donHangDaCoHienThi = [];
            try {
                donHangDaCoHienThi = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("lichSuDonHang"))) || [];
            } catch (error) {
                donHangDaCoHienThi = [];
            }

            if (donHangDaCoHienThi.length === 0) {
                moKhungMenu("Đơn hàng của tôi", `
            <div class="bangThongTin">
                <div class="hangThongTin">Bạn chưa có đơn hàng nào.</div>
            </div>
        `);
            } else {
                const htmlDonHang = donHangDaCoHienThi.slice(0, 10).map(function (donHang) {
                    return `
                <div class="hangThongTin">
                    <strong>${donHang.thoiGian}</strong><br>
                    Sản phẩm: ${donHang.sanPham.join(", ")}<br>
                    Tổng tiền: ${donHang.tongTien.toLocaleString()}đ
                </div>
            `;
                }).join("");

                moKhungMenu("Đơn hàng của tôi", `
            <div class="bangThongTin">
                ${htmlDonHang}
            </div>
        `);
            }
            break;

        case "thongTin":
            const thongTinCaNhan = capNhatThongTinCaNhan();
            moKhungMenu("Thông tin cá nhân", `
                <div class="bangThongTin">
                    <div class="hangThongTin"><strong>Họ và tên:</strong> ${thongTinCaNhan.hoTen}</div>
                    <div class="hangThongTin"><strong>Số điện thoại:</strong> ${thongTinCaNhan.soDienThoai}</div>
                    <div class="hangThongTin"><strong>Email:</strong> ${thongTinCaNhan.email}</div>
                    <div class="hangThongTin"><strong>Ngày sinh:</strong> ${thongTinCaNhan.ngaySinh}</div>
                    <div class="hangThongTin"><strong>Địa chỉ:</strong> ${thongTinCaNhan.diaChi}</div>
                    <div class="hangThongTin"><strong>Mã thành viên:</strong> ${thongTinCaNhan.maThanhVien}</div>
                    <div class="hangThongTin"><strong>Cấp độ:</strong> ${thongTinCaNhan.capDo}</div>
                </div>
            `);
            break;

        case "yeuThich":
            moKhungYeuThich();
            break;

        case "tichDiem":
            if (khungTichDiem) {
                khungTichDiem.style.display = "block";
                capNhatHienThiTichDiem();
            }
            moKhungMenu("Tích điểm", `
                <div class="bangThongTin">
                    <div class="hangThongTin"><strong>Điểm hiện tại:</strong> ${layDiemTichLuy().toLocaleString()} điểm</div>
                    <div class="hangThongTin"><strong>Tỷ lệ quy đổi:</strong> 1 điểm = 1.000đ</div>
                    <div class="hangThongTin">Sử dụng điểm khi thanh toán để giảm giá trực tiếp.</div>
                </div>
            `);
            break;

        case "hoTro":
            moKhungMenu("Hỗ trợ / Liên hệ", `
                <div class="bangThongTin">
                    <div class="hangThongTin"><strong>Hotline:</strong> 1900 1234</div>
                    <div class="hangThongTin"><strong>Email:</strong> hotro@nhathuocbichphuong.vn</div>
                    <div class="hangThongTin"><strong>Giờ làm việc:</strong> 7:30 - 20:00, cả tuần</div>
                </div>
            `);
            break;
    }
}

const cacMucMenu = document.querySelectorAll("#menuBaGach .mucMenu");

cacMucMenu.forEach(function (muc) {
    muc.addEventListener("click", function (event) {
        event.stopPropagation();
        menuBaGach.style.display = "none";
        xuLyMucMenu(muc.dataset.action);
        hienThiThongBao("Đã mở chức năng phù hợp.", "info");
    });
});

if (dongKhungYeuThichButton) {
    dongKhungYeuThichButton.addEventListener("click", function () {
        dongKhungYeuThich();
    });
}

if (khungYeuThich) {
    khungYeuThich.addEventListener("click", function (event) {
        if (event.target === khungYeuThich) {
            dongKhungYeuThich();
        }
    });
}

if (khungMenuChucNang) {
    khungMenuChucNang.addEventListener("click", function (event) {
        if (event.target === khungMenuChucNang) {
            dongKhungMenu();
        }
    });
}

noiDungMenuChucNang.addEventListener("click", function (e) {
    if (e.target.id === "nutTiepTucDangNhap") {
        e.stopPropagation();
        dongKhungMenu();
        menuBaGach.style.display = "none";
        containerDangNhap.classList.remove("active");
        containerDangNhap.style.display = "block";
    }
});

if (dongMenuChucNang) {
    dongMenuChucNang.addEventListener("click", function () {
        dongKhungMenu();
    });
}

if (noiDungKhungYeuThich) {
    noiDungKhungYeuThich.addEventListener("click", function (event) {
        if (event.target.classList.contains("nutBoYeuThichKhung")) {
            const tenSanPham = event.target.dataset.ten;
            const yeuThich = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("sanPhamYeuThich"))) || [];
            const viTri = yeuThich.indexOf(tenSanPham);

            if (viTri !== -1) {
                yeuThich.splice(viTri, 1);
                localStorage.setItem(khoaTheoTaiKhoan("sanPhamYeuThich"), JSON.stringify(yeuThich));
                capNhatYeuThich();
                hienThiKhungYeuThich();
                vedanhsach(danhSach);
                hienThiThongBao(`Đã bỏ ${tenSanPham} khỏi yêu thích.`, "info");
            }
        }

        if (event.target.classList.contains("nutThemGioYeuThich")) {
            const tenSanPham = event.target.dataset.ten;
            const giaSanPham = Number(event.target.dataset.gia);
            const tonKhoGoc = Number(event.target.dataset.tonkho);
            themVaoGioHangTuSanPham(tenSanPham, giaSanPham, tonKhoGoc);
        }
    });
}

mucXemTichDiem.addEventListener("click", function (event) {
    event.stopPropagation();
    if (khungTichDiem.style.display === "block") {
        khungTichDiem.style.display = "none";
    } else {
        khungTichDiem.style.display = "block";
        capNhatHienThiTichDiem();
    }
});

dauBaGach.addEventListener("click", function (event) {
    event.stopPropagation();
    menuBaGach.style.display = menuBaGach.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (suKien) {
    if (
        !menuBaGach.contains(suKien.target) &&
        suKien.target !== dauBaGach
    ) {
        menuBaGach.style.display = "none";
    }
});

function layThongTinGiaoHang() {
    return {
        hoTen: document.querySelector("#hoTenNguoiNhan").value.trim(),
        soDienThoai: document.querySelector("#soDienThoai").value.trim(),
        diaChi: document.querySelector("#diaChiGiaoHang").value.trim()
    };
}

function taiThongTinGiaoHang() {
    try {
        const duLieu = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("thongTinGiaoHang"))) || {};
        document.querySelector("#hoTenNguoiNhan").value = duLieu.hoTen || "";
        document.querySelector("#soDienThoai").value = duLieu.soDienThoai || "";
        document.querySelector("#diaChiGiaoHang").value = duLieu.diaChi || "";
        if (duLieu.hoTen || duLieu.soDienThoai || duLieu.diaChi) {
            nutThongTinGiaoHang.textContent = "Thông tin giao hàng ✓";
        } else {
            nutThongTinGiaoHang.textContent = "Thông tin giao hàng";
        }
    } catch (error) {
        nutThongTinGiaoHang.textContent = "Thông tin giao hàng";
    }
}

function luuThongTinGiaoHang() {
    const thongTin = layThongTinGiaoHang();
    localStorage.setItem(khoaTheoTaiKhoan("thongTinGiaoHang"), JSON.stringify(thongTin));
    if (thongTin.hoTen || thongTin.soDienThoai || thongTin.diaChi) {
        nutThongTinGiaoHang.textContent = "Thông tin giao hàng ✓";
    }
}

function capNhatGioHang() {

    let tongSoLuong = 0;
    let tongTien = 0;

    chiTietGioHang.innerHTML = "";

    const danhSachSanPham = Object.keys(gioHang);

    if (danhSachSanPham.length === 0) {
        chiTietGioHang.innerHTML = "<p>Giỏ hàng đang trống.</p>";
    } else {
        danhSachSanPham.forEach(function (tenSanPham) {
            const sanPham = gioHang[tenSanPham];
            tongSoLuong += sanPham.soLuong;
            tongTien += sanPham.gia * sanPham.soLuong;

            chiTietGioHang.innerHTML += `

            <div class="sanPhamTrongGio">

                <p>
                    <b>${tenSanPham}</b>
                </p>

                <p>
                    Giá: ${sanPham.gia.toLocaleString()}đ
                </p>

                <button
                class="giamSoLuong"
                data-ten="${tenSanPham}">
                -
                </button>

                <span>
                    ${sanPham.soLuong}
                </span>

                <button
                class="tangSoLuong"
                data-ten="${tenSanPham}">
                +
                </button>

                <button
                class="xoaSanPham"
                data-ten="${tenSanPham}">
                🗑
                </button>
                <hr>
            </div>

            `;
        });
    }

    soLuong.textContent = tongSoLuong;
    tongTienHienThi.textContent = tongTien.toLocaleString();
    capNhatGiamGiaHienThi();
    localStorage.setItem(khoaTheoTaiKhoan("gioHang"), JSON.stringify(gioHang));
}

chiTietGioHang.addEventListener("click", function (e) {

    const ten =
        e.target.dataset.ten;

    if (e.target.classList.contains("tangSoLuong")) {

        gioHang[ten].soLuong++;
        capNhatGioHang();
    }

    if (e.target.classList.contains("giamSoLuong")) {

        gioHang[ten].soLuong--;

        if (gioHang[ten].soLuong <= 0) {
            delete gioHang[ten];
        }
        capNhatGioHang();
    }

    if (e.target.classList.contains("xoaSanPham")) {

        delete gioHang[ten];
        capNhatGioHang();
    }

});

const nutXoaGio =
    document.querySelector("#nutXoaGio");

nutXoaGio.addEventListener(
    "click",
    function () {

        if (confirm("Bạn có muốn xóa toàn bộ giỏ hàng không?")) {

            gioHang = {};
            capNhatGioHang();

        }

    });

nutApDungMaGiamGia.addEventListener("click", function () {
    const maNhap = maGiamGiaInput.value.trim().toUpperCase();
    const bangMa = {
        SALE10: 0.1,
        WELCOME20: 0.2,
        SAVE30: 0.3
    };

    if (!maNhap) {
        thongBaoMaGiamGia.textContent = "Vui lòng nhập mã giảm giá.";
        thongBaoMaGiamGia.style.color = "#b45309";
        return;
    }

    if (bangMa[maNhap]) {
        maGiamGiaHienTai = maNhap;
        capNhatGioHang();
        thongBaoMaGiamGia.textContent = `Đã áp dụng mã ${maNhap}.`;
        thongBaoMaGiamGia.style.color = "#0f6cbd";
        hienThiThongBao(`Đã áp dụng mã ${maNhap}.`, "success");
    } else {
        maGiamGiaHienTai = "";
        capNhatGioHang();
        thongBaoMaGiamGia.textContent = "Mã giảm giá không hợp lệ.";
        thongBaoMaGiamGia.style.color = "#dc2626";
        hienThiThongBao("Mã giảm giá không hợp lệ.", "error");
    }
});

nutXoaMaGiamGia.addEventListener("click", function () {
    maGiamGiaHienTai = "";
    maGiamGiaInput.value = "";
    capNhatGioHang();
    thongBaoMaGiamGia.textContent = "Đã xóa mã giảm giá.";
    thongBaoMaGiamGia.style.color = "#4c7a9a";
    hienThiThongBao("Đã xóa mã giảm giá.", "info");
});

const nutThanhToan =
    document.querySelector("#nutThanhToan");

nutThanhToan.addEventListener("click", function () {

    if (Object.keys(gioHang).length === 0) {
        hienThiThongBao("Giỏ hàng đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.", "error");
        return;
    }

    const thongTinGiaoHang = layThongTinGiaoHang();
    const thongTinBiThieu = [];

    if (!thongTinGiaoHang.hoTen) thongTinBiThieu.push("Họ tên người nhận");
    if (!thongTinGiaoHang.soDienThoai) thongTinBiThieu.push("Số điện thoại");
    if (!thongTinGiaoHang.diaChi) thongTinBiThieu.push("Địa chỉ giao hàng");

    if (thongTinBiThieu.length > 0) {
        khungThongTinGiaoHang.style.display = "block";
        formThongTinGiaoHang.style.display = "block";
        hienThiThongBao(`Thiếu thông tin giao hàng: ${thongTinBiThieu.join(", ")}.`, "error");
        return;
    }

    const xacNhanThanhToan = confirm("Bạn chắc chắn muốn thanh toán?");
    if (!xacNhanThanhToan) {
        return;
    }

    let tongTien = 0;
    let hoaDon = "===== HÓA ĐƠN =====\n\n";

    Object.keys(gioHang).forEach(function (ten) {
        const sp = gioHang[ten];
        const thanhTien = sp.gia * sp.soLuong;
        tongTien += thanhTien;
        hoaDon += `${ten}\nSL: ${sp.soLuong}\nThành tiền: ${thanhTien.toLocaleString()}đ\n\n`;
    });

    let tongTienSauGiam = Math.max(0, tongTien - soTienGiam);
    let diemDaDung = 0;
    let tienGiamDiem = 0;

    if (dungDiemCheckbox && dungDiemCheckbox.checked) {
        const diemCo = layDiemTichLuy();
        const diemToiDa = Math.min(diemCo, Math.floor(tongTienSauGiam / 1000));
        if (diemToiDa > 0) {
            diemDaDung = diemToiDa;
            tienGiamDiem = diemDaDung * 1000;
            tongTienSauGiam = Math.max(0, tongTienSauGiam - tienGiamDiem);
            localStorage.setItem(khoaTheoTaiKhoan("diemTichLuy"), String(diemCo - diemDaDung));
            hienThiThongBao(`Đã dùng ${diemDaDung} điểm, giảm ${tienGiamDiem.toLocaleString()}đ.`, "success");
        } else {
            hienThiThongBao("Bạn không đủ điểm để dùng.", "info");
        }
    }

    const diemMoi = Math.floor(tongTienSauGiam / 10000);
    const diemHienTai = layDiemTichLuy();
    localStorage.setItem(khoaTheoTaiKhoan("diemTichLuy"), String(diemHienTai + diemMoi));

    hoaDon += `Thông tin giao hàng:\nHọ tên: ${thongTinGiaoHang.hoTen}\nSĐT: ${thongTinGiaoHang.soDienThoai}\nĐịa chỉ: ${thongTinGiaoHang.diaChi}\n\nPhương thức: ${layPhuongThucThanhToanText()}\nTổng tiền: ${tongTienSauGiam.toLocaleString()}đ\nCảm ơn quý khách!`;

    const donHangMoi = {
        thoiGian: new Date().toLocaleString("vi-VN"),
        tongTien: tongTienSauGiam,
        sanPham: Object.keys(gioHang).map(function (ten) {
            return `${ten} x${gioHang[ten].soLuong}`;
        })
    };

    let donHangDaCo = [];
    try {
        donHangDaCo = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("lichSuDonHang"))) || [];
    } catch (error) {
        donHangDaCo = [];
    }

    donHangDaCo.unshift(donHangMoi);
    localStorage.setItem(khoaTheoTaiKhoan("lichSuDonHang"), JSON.stringify(donHangDaCo));

    capNhatHienThiTichDiem();
    hienThiThongBao("Đặt hàng thành công! Đơn hàng đã được lưu vào lịch sử.", "success");
    capNhatLichSuDonHang();
    gioHang = {};
    capNhatGioHang();
});

nutThongTinGiaoHang.addEventListener("click", function (event) {
    event.stopPropagation();
    const dangMo = formThongTinGiaoHang.style.display === "block";
    formThongTinGiaoHang.style.display = dangMo ? "none" : "block";
    khungThongTinGiaoHang.style.display = "block";
    if (!dangMo) {
        taiThongTinGiaoHang();
    }
});

nutLuuThongTin.addEventListener("click", function () {
    luuThongTinGiaoHang();
    formThongTinGiaoHang.style.display = "none";
});

nutGioHangIcon.addEventListener(
    "click",
    function (event) {
        event.stopPropagation();
        if (khungGioHang.style.display === "block") {
            khungGioHang.style.display = "none";
        } else {
            khungGioHang.style.display = "block";
        }
    });

function capNhatLichSuDonHang() {
    const lichSuDonHang = document.querySelector("#lichSuDonHang");
    if (!lichSuDonHang) {
        return;
    }

    let donHangDaCo = [];

    try {
        donHangDaCo = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("lichSuDonHang"))) || [];
    } catch (error) {
        donHangDaCo = [];
    }

    if (donHangDaCo.length === 0) {
        lichSuDonHang.innerHTML = "<p>Chưa có đơn hàng nào.</p>";
        return;
    }

    lichSuDonHang.innerHTML = donHangDaCo.slice(0, 5).map(function (donHang) {
        return `
            <div class="donHangItem">
                <b>${donHang.thoiGian}</b><br>
                Tổng: ${donHang.tongTien.toLocaleString()}đ<br>
                Sản phẩm: ${donHang.sanPham.join(", ")} 
            </div>
        `;
    }).join("");
}

taiThongTinGiaoHang();

if (thongBaoStripItems.length > 0) {
    function chayThongBaoStrip() {
        thongBaoStripItems.forEach(function (item, index) {
            item.classList.toggle("active", index === viTriThongBaoHienTai);
        });
        viTriThongBaoHienTai = (viTriThongBaoHienTai + 1) % thongBaoStripItems.length;
    }

    chayThongBaoStrip();
    setInterval(chayThongBaoStrip, 3500);
}

capNhatGioHang();
capNhatYeuThich();
capNhatLichSuDonHang();

const hopThoaiGiaoHang = document.querySelector("#hopThoaiGiaoHang");
const dongHopThoaiGiaoHang = document.querySelector("#dongHopThoaiGiaoHang");
const nenMo = document.querySelector(".nenMo");
const nutGiaoHangNhanh = document.querySelector("#nutGiaoHangNhanh");
const nutXacNhanDatHang = document.querySelector("#xacNhanDatHang");
const ketQuaKhuVuc = document.querySelector("#ketQuaKhuVuc");

nutGiaoHangNhanh.addEventListener("click", function () {
    hopThoaiGiaoHang.style.display = "flex";
});

dongHopThoaiGiaoHang.addEventListener("click", function () {
    hopThoaiGiaoHang.style.display = "none";
});

nenMo.addEventListener("click", function () {
    hopThoaiGiaoHang.style.display = "none";
});

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
        hopThoaiGiaoHang.style.display = "none";
    }
});

nutXacNhanDatHang.disabled = true;


ketQuaKhuVuc.innerHTML = `
<div class="theKetQua">
<h4>🚚 Kiểm tra giao hàng</h4>
<p>Nhập địa chỉ bên trái rồi nhấn<b>Kiểm tra khu vực</b></p>

</div>

`;

const tinhThanh = document.querySelector("#tinhThanh");
const quanHuyen = document.querySelector("#quanHuyen");
const xaPhuong = document.querySelector("#xaPhuong");
const diaChiChiTiet = document.querySelector("#diaChiChiTiet");
const soDienThoaiGiaoHang = document.querySelector("#soDienThoaiGiaoHang");
const kiemTraKhuVuc = document.querySelector("#kiemTraKhuVuc");

const khuVucGiaoNhanh = [
    "Vĩnh An",
    "Tân Bình",
    "Hiếu Liêm",
    "Mã Đà",
    "Bình Lợi",
    "Thạnh Phú"
];

const khuVucLanCan = [
    "Biên Hòa",
    "Trảng Bom",
    "Định Quán",
    "Long Thành"
];

kiemTraKhuVuc.addEventListener("click", function () {

    if (tinhThanh.value === "") {
        alert("Vui lòng chọn tỉnh/thành.");
        return;
    }

    if (quanHuyen.value === "") {
        alert("Vui lòng chọn huyện.");
        return;
    }

    if (xaPhuong.value === "") {
        alert("Vui lòng chọn xã.");
        return;
    }

    if (diaChiChiTiet.value.trim() === "") {
        alert("Vui lòng nhập địa chỉ.");
        return;
    }

    if (soDienThoaiGiaoHang.value.trim() === "") {
        alert("Vui lòng nhập số điện thoại.");
        return;
    }

    if (khuVucGiaoNhanh.includes(xaPhuong.value)) {

        ketQuaKhuVuc.innerHTML = `

        <div class="theKetQua">

            <h4 class="thanhCong">✅ Giao hàng nhanh</h4>

            <p><b>Khu vực:</b> ${xaPhuong.value}</p>
            <p><b>Khoảng cách:</b> Dưới 10 km</p>
            <p><b>Thời gian:</b> 20 - 45 phút</p>
            <p><b>Phí giao:</b> 15.000đ</p>
            <p><b>Trạng thái:</b> Có thể giao ngay hôm nay.</p>
        </div>

        `;

        nutXacNhanDatHang.disabled = false;
        return;
    }

    if (khuVucLanCan.includes(xaPhuong.value)) {
        ketQuaKhuVuc.innerHTML = `
        <div class="theKetQua">

            <h4 class="canhBao">⚠ Khu vực lân cận</h4>

            <p><b>Khu vực:</b> ${xaPhuong.value}</p>
            <p><b>Khoảng cách:</b> 10 - 30 km</p>
            <p><b>Thời gian:</b> 60 - 120 phút</p>
            <p><b>Phí giao:</b> 30.000đ</p>
            <p><b>Trạng thái:</b> Có thể giao trong ngày.</p>
        </div>

        `;

        nutXacNhanDatHang.disabled = false;
        return;
    }

    ketQuaKhuVuc.innerHTML = `

    <div class="theKetQua">

        <h4 class="thatBai"> ❌ Ngoài phạm vi giao hàng</h4>
        
        <p><b>Khu vực:</b> ${xaPhuong.value}</p>
        <p>Địa chỉ của bạn hiện chưa nằm trong phạm vi giao nhanh.</p>
        <p>Nhà thuốc sẽ liên hệ để tư vấn phương án vận chuyển phù hợp.</p>
    </div>

    `;

    nutXacNhanDatHang.disabled = true;
});

nutXacNhanDatHang.addEventListener("click", function () {
    if (nutXacNhanDatHang.disabled) {
        hienThiThongBao("Vui lòng kiểm tra khu vực giao hàng trước.", "error");
        return;
    }
    if (Object.keys(gioHang).length === 0) {
        hienThiThongBao("Giỏ hàng đang trống.", "error");
        return;
    }

    const tongTienHienTai = tinhTongTien();
    const maDonHang = "DH" + Date.now();

    const donHangMoi = {
        thoiGian: new Date().toLocaleString("vi-VN"),
        tongTien: tongTienHienTai,
        sanPham: Object.keys(gioHang).map(function (ten) {
            return `${ten} x${gioHang[ten].soLuong}`;
        }),
        diaChi: `${diaChiChiTiet.value}, ${xaPhuong.value}, ${quanHuyen.value}, ${tinhThanh.value}`,
        thanhToan: layPhuongThucThanhToanText()
    };

    let donHangDaCo = [];
    try {
        donHangDaCo = JSON.parse(localStorage.getItem(khoaTheoTaiKhoan("lichSuDonHang"))) || [];
    } catch (error) {
        donHangDaCo = [];
    }
    donHangDaCo.unshift(donHangMoi);
    localStorage.setItem(khoaTheoTaiKhoan("lichSuDonHang"), JSON.stringify(donHangDaCo));

    hienThiThongBao("🎉 Đặt hàng thành công! Mã đơn: " + maDonHang, "success");

    gioHang = {};
    capNhatGioHang();
    hopThoaiGiaoHang.style.display = "none";
});