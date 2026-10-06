// Cách 1: DOM thuần - gọi từ onclick trong HTML
function js_style() {
    var p = document.getElementById('text');
    p.style.fontSize = '24px';
    p.style.fontFamily = 'Courier New, monospace';
    p.style.color = 'red';
}
// Cách 2: jQuery
$(document).ready(function () {
    $('#jqstyle').click(function () {
        $('#text').css({ 'font-size': '32px', 'font-family': 'Georgia, serif', 'color': 'blue' });
    });
});
