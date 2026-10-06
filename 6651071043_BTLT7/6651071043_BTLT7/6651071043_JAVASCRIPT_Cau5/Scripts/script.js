// Danh sách ảnh theo đề (URL + kích thước)
var ds = [
    { src: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg', w: 240, h: 160 },
    { src: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg', w: 320, h: 195 },
    { src: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg', w: 500, h: 343 }
];
// Nếu URL của đề không còn tải được -> hiện khung giữ đúng kích thước, ghi rõ URL lỗi
function loiAnh(img) {
    var i = $(img);
    var ph = $('<div class="ph"></div>').css({ width: i.attr('width') + 'px', height: i.attr('height') + 'px' })
        .text('Không tải được ảnh: ' + i.attr('src'));
    i.replaceWith(ph);
}
function display_random_image() { // DOM
    var a = ds[Math.floor(Math.random() * ds.length)];
    var img = document.createElement('img');
    img.src = a.src; img.width = a.w; img.height = a.h;
    img.onerror = function () { loiAnh(img); };
    var k = document.getElementById('khung');
    k.innerHTML = ''; k.appendChild(img);
}
$(document).ready(function () { // jQuery
    $('#btnJq').click(function () {
        var a = ds[Math.floor(Math.random() * ds.length)];
        var img = $('<img>').attr({ src: a.src, width: a.w, height: a.h }).on('error', function () { loiAnh(this); });
        $('#khung').empty().append(img);
    });
});
