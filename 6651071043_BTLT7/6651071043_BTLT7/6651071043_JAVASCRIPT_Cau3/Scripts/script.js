function insert_Row() { // DOM
    var t = document.getElementById('sampleTable');
    var n = t.rows.length + 1;
    var row = t.insertRow(-1); // -1 = cuối bảng
    row.insertCell(0).innerHTML = 'Row' + n + ' cell1';
    row.insertCell(1).innerHTML = 'Row' + n + ' cell2';
}
$(document).ready(function () { // jQuery
    $('#btnJq').click(function () {
        var n = $('#sampleTable tr').length + 1;
        $('#sampleTable').append('<tr><td>Row' + n + ' cell1</td><td>Row' + n + ' cell2</td></tr>');
    });
});
