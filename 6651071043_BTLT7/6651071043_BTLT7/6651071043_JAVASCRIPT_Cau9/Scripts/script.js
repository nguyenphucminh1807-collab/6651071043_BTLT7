function ngayHopLe(s) {
    var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(s); // mm/dd/yyyy hoặc mm-dd-yyyy (cùng 1 dấu phân cách)
    if (!m) return 'Định dạng phải là mm/dd/yyyy hoặc mm-dd-yyyy';
    var th = +m[1], ng = +m[3], nam = +m[4];
    if (th < 1 || th > 12) return 'Tháng phải từ 1 đến 12';
    if (nam >= new Date().getFullYear()) return 'Năm phải nhỏ hơn năm hiện tại';
    if (nam < 1900) return 'Năm không hợp lệ';
    var maxNgay = new Date(nam, th, 0).getDate(); // số ngày của tháng
    if (ng < 1 || ng > maxNgay) return 'Tháng ' + th + ' chỉ có ' + maxNgay + ' ngày';
    return '';
}
function emailHopLe(s) {
    // account: tối đa 1 dấu chấm; domain: ít nhất 1 dấu chấm
    return /^[^@\s.]+(\.[^@\s.]+)?@[^@\s.]+(\.[^@\s.]+)+$/.test(s);
}
$(document).ready(function () {
    $('#btnFinish').click(function () {
        $('.err').text('');
        var ok = true;
        function loi(id, msg) { $('#e_' + id).text(msg); ok = false; }
        $.each(['name', 'email', 'bday', 'street', 'city', 'zip'], function (i, id) {
            if ($.trim($('#' + id).val()) === '') loi(id, 'Không được để trống');
        });
        if (!$('input[name=sex]:checked').length) loi('sex', 'Phải chọn giới tính');
        if ($('#region').val() === '') loi('region', 'Phải chọn region');
        var email = $.trim($('#email').val());
        if (email !== '' && !emailHopLe(email)) loi('email', 'Email sai: cần dạng ten.ho@domain.com');
        var b = $.trim($('#bday').val());
        if (b !== '') { var m = ngayHopLe(b); if (m) loi('bday', m); }
        var z = $.trim($('#zip').val());
        if (z !== '' && !/^\d{5}$/.test(z)) loi('zip', 'ZIP phải đúng 5 chữ số');
        if (ok) alert('Đăng ký thành công!');
    });
    $('#btnClear').click(function () {
        $('#frm')[0].reset();
        $('.err').text('');
    });
});
