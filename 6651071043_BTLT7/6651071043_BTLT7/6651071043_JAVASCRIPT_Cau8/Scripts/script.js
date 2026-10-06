function tinh(op) {
    var sa = $.trim($('#a').val()), sb = $.trim($('#b').val());
    var a = Number(sa), b = Number(sb), kq;
    $('#loi').text(''); $('#kq').val('');
    if (sa === '' || sb === '' || isNaN(a) || isNaN(b)) { $('#loi').text('Biểu thức không hợp lệ: hai toán hạng phải là số!'); return; }
    if (op == '+') kq = a + b;
    else if (op == '-') kq = a - b;
    else if (op == 'x') kq = a * b;
    else if (op == '^') kq = Math.pow(a, b);
    else if (op == '/') {
        if (b === 0) { $('#loi').text('Không thể chia cho 0!'); return; }
        kq = a / b;
    }
    $('#kq').val(kq);
}
$(document).ready(function () {
    $('.op').click(function () { tinh($(this).text()); }); // chuột
    $('#a, #b').keydown(function (e) { // bàn phím
        var m = { '+': '+', '-': '-', '*': 'x', 'x': 'x', '/': '/', '^': '^' };
        if (m[e.key]) { e.preventDefault(); tinh(m[e.key]); }
    });
});
