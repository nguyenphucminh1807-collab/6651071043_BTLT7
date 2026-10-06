$(document).ready(function () {
    $('#linkForm').submit(function (e) {
        e.preventDefault(); // không để form reload trang
        var link = $.trim($('#linkInput').val());
        if (link === '') { alert('Vui lòng nhập đường link!'); return; }
        if (!/^https?:\/\//i.test(link)) link = 'https://' + link; // tự thêm https nếu thiếu
        var ok = false;
        try { var u = new URL(link); ok = u.hostname.indexOf('.') > 0 || u.hostname === 'localhost'; } catch (err) { ok = false; }
        if (!ok) { alert('Đường link không hợp lệ!'); return; }
        if (confirm('Bạn có muốn chuyển đến: ' + link + ' ?')) {
            window.location.href = link; // OK -> chuyển trang. Cancel -> không làm gì
        }
    });
});
