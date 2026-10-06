// DOM thuần. return false để form không reload trang
function getFormvalue() {
    var f = document.getElementById('form1');
    var ten = f.elements['fname'].value + ' ' + f.elements['lname'].value;
    document.getElementById('kq').innerHTML = 'DOM: ' + ten;
    return false;
}
$(document).ready(function () {
    $('#btnJq').click(function () {
        var ten = $('input[name="fname"]').val() + ' ' + $('input[name="lname"]').val();
        $('#kq').text('jQuery: ' + ten);
    });
});
