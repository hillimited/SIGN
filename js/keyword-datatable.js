$(document).ready(function () {
    $('#overall_comment_datatable').dataTable();
});
$(document).ready(function () {
    $('#positive_comment_datatable').dataTable();
});
$(document).ready(function () {
    $('#negative_comment_datatable').dataTable();
});
$(document).ready(function () {
    $('#neutral_comment_datatable').dataTable();
});
$(document).ready(function () {
    $('#overall_post_datatable').dataTable();
});
$(document).ready(function () {
    $('#positive_post_datatable').dataTable();
});
$(document).ready(function () {
    $('#negative_post_datatable').dataTable();
});
$(document).ready(function () {
    $('#neutral_post_datatable').dataTable();
});

$.extend( $.fn.dataTable.defaults, {
    "scrollY": "350px",
    "scrollCollapse": true,
    "paging": false,

    "searching": false,

    "order": [ 1, 'desc' ],

    "columnDefs": [{ "orderable": false, "targets": 0 }],

    "infoCallback": false
} );