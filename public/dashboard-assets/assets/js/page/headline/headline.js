// get all posts
$(document).ready(function () {
    $("#postId").select2({
        searchInputPlaceholder: "Cari Judul Pos",
        placeholder: "Cari Judul Pos",
        ajax: {
            url: "/get-post",
            type: "GET",
            delay: 250,
            minimumInputLength: 5,
            dataType: "json",
            data: (params) => {
                return {
                    title: params.term,
                    _token: token,
                };
            },
            processResults: (data) => {
                return {
                    results: $.map(data, (item) => {
                        return {
                            id: item.ID,
                            text: item.post_title,
                        };
                    }),
                };
            },
        },
    });

    $("#postId").select2("focus");
    $("#postId").on("select2:open", () => {
        const searchInput = $("#postId")
            .data("select2")
            .$dropdown.find(".select2-search__field")[0];
        if (searchInput) searchInput.focus();
    });

    $("#editPostId").select2({
        placeholder: "Masukkan Judul Pos",
        ajax: {
            url: "/get-post",
            type: "GET",
            delay: 250,
            minimumInputLength: 5,
            dataType: "json",
            data: (params) => {
                return {
                    title: params.term,
                    _token: token,
                };
            },
            processResults: (data) => {
                return {
                    results: $.map(data, (item) => {
                        return {
                            id: item.ID,
                            text: item.post_title,
                        };
                    }),
                };
            },
        },
    });
});

// check post id apakah sudah dipakai atau belum
$("#postId").on("change", function () {
    var id = $(this).val();
    Swal.fire({
        didOpen: () => {
            Swal.showLoading();
        },
    });

    // check id
    $.ajax({
        url: "/check-post-id-headline/" + id,
        type: "GET",
        dataType: "json",
        success: function (response) {
            Swal.close();
            if (response.status == 400) {
                $(".select2-selection--single").css({
                    "border-color": "red",
                });
                $(".warning-pos-title").text(response.message);
                $("#btnSubmit").attr("disabled", true);
            } else {
                $(".select2-selection--single").css({
                    "border-color": "#95a0f4",
                });
                $(".warning-pos-title").text(" ");
                $("#btnSubmit").attr("disabled", false);
            }
        },
    });
});

// check order number pakah sudah dipakai atau belum
$("#orderNumber").on("change", function () {
    var number = $(this).val();
    Swal.fire({
        didOpen: () => {
            Swal.showLoading();
        },
    });

    // check number
    $.ajax({
        url: "/check-order-number-headline/" + number,
        type: "GET",
        dataType: "json",
        success: function (response) {
            Swal.close();
            if (response.status == 400) {
                $("#orderNumber").addClass("is-invalid");
                $(".warning-order-number").text(response.message);
                $("#btnSubmit").attr("disabled", true);
            } else {
                $("#orderNumber").removeClass("is-invalid");
                $(".warning-order-number").text(" ");
                $("#btnSubmit").attr("disabled", false);
            }
        },
    });
});

// show modal
$("body").on("click", "#changeOrderNumber", function () {
    $("#modalChangeOrderNumber").modal("show");

    var number = $(this).data("number");
    var id = $(this).data("id");
    var postId = $(this).data("postid");
    var postTitle = $(this).data("posttitle");

    $("#editOrderNumber").val(number);
    $("#nomor").val(number);
    $("#id").val(id);

    // enable button simpan dan menghapus warning
    $(".select2-selection--single").css({
        "border-color": "#95a0f4",
    });
    $(".warning-edit-pos-title").text(" ");
    $("#btnUpdate").attr("disabled", false);

    // hapus selected options
    var index = $("#editPostId").get(0).selectedIndex;
    $("#editPostId option:eq(" + index + ")").remove();

    // append option baru
    $("#editPostId").append(new Option(postTitle, postId));

    // menghapus warning di number
    $("#editOrderNumber").removeClass("is-invalid");
    $(".warning-edit-order-number").text(" ");
    $("#btnUpdate").attr("disabled", false);
});

// check edit order number pakah sudah dipakai atau belum
$("#editOrderNumber").on("change", function () {
    var number = $(this).val();
    var id = $("#id").val();

    Swal.fire({
        didOpen: () => {
            Swal.showLoading();
        },
    });

    // check number
    $.ajax({
        url: "/check-edit-order-number-headline/" + id + "/" + number,
        type: "GET",
        dataType: "json",
        success: function (response) {
            Swal.close();
            if (response.status == 400) {
                $("#editOrderNumber").addClass("is-invalid");
                $(".warning-edit-order-number").text(response.message);
                $("#btnUpdate").attr("disabled", true);
            } else {
                $("#editOrderNumber").removeClass("is-invalid");
                $(".warning-edit-order-number").text(" ");
                $("#btnUpdate").attr("disabled", false);
            }
        },
    });
});

// check edit post id apakah sudah dipakai atau belum
$("#editPostId").on("change", function () {
    var id = $(this).val();
    var idHeadline = $("#id").val();
    console.log(idHeadline);
    Swal.fire({
        didOpen: () => {
            Swal.showLoading();
        },
    });

    // check id
    $.ajax({
        url: "/check-post-edit-id-headline/" + id + "/" + idHeadline,
        type: "GET",
        dataType: "json",
        success: function (response) {
            console.log(response);
            Swal.close();
            if (response.status == 400) {
                $(".select2-selection--single").css({
                    "border-color": "red",
                });
                $(".warning-edit-pos-title").text(response.message);
                $("#btnUpdate").attr("disabled", true);
            } else {
                $(".select2-selection--single").css({
                    "border-color": "#95a0f4",
                });
                $(".warning-edit-pos-title").text(" ");
                $("#btnUpdate").attr("disabled", false);
            }
        },
    });
});
