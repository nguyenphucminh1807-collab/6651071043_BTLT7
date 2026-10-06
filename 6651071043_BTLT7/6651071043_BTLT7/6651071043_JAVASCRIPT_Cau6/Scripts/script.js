function getOptions() { // DOM
    var s = document.getElementById('mySelect'), ds = [];
    for (var i = 0; i < s.options.length; i++) ds.push(s.options[i].text);
    alert('Có ' + s.options.length + ' mục: ' + ds.join(', '));
}
$(document).ready(function () { // jQuery
    $('#btnJq').click(function () {
        var ds = [];
        $('#mySelect option').each(function () { ds.push($(this).text()); });
        alert('Có ' + $('#mySelect option').length + ' mục: ' + ds.join(', '));
    });
});
