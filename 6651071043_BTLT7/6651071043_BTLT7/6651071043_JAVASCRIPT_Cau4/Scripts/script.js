function removecolor() { // DOM
    var s = document.getElementById('colorSelect');
    if (s.options.length == 0) { alert('Danh sách đã hết màu!'); return; }
    s.remove(s.selectedIndex);
}
$(document).ready(function () { // jQuery
    $('#btnJq').click(function () {
        if ($('#colorSelect option').length == 0) { alert('Danh sách đã hết màu!'); return; }
        $('#colorSelect option:selected').remove();
    });
});
