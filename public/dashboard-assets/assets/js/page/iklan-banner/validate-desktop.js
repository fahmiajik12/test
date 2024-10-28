$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

$("body").on("change", "#page", function () {
    var val = $(this).val();

    if (val == "Home") {
        $("#validate-desktop-home").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    } else if (val == "List Berita") {
        $("#validate-desktop-list-berita").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    } else if (val == "Halaman Berita") {
        $("#validate-desktop-berita").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    }
});

$("body").on("click", ".desktop-home", function () {
    var letak = $(this).val();
    var page = $("#page").val();
    var deviceType = $("#deviceType").val();

    $.ajax({
        url: "/admin/validate-placement-banner",
        data: {
            letak: letak,
            page: page,
            deviceType: deviceType,
        },
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            if (response.exists == false) {
                $("#validate-desktop-home").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-desktop-home").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});

$("body").on("click", ".desktop-list-berita", function () {
    var letak = $(this).val();
    var page = $("#page").val();
    var deviceType = $("#deviceType").val();
    var menu = $("#menu").val();

    $.ajax({
        url: "/admin/validate-placement-banner-list-berita",
        data: {
            letak: letak,
            page: page,
            deviceType: deviceType,
            menu: menu,
        },
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            if (response.exists == false) {
                $("#validate-desktop-list-berita").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-desktop-list-berita").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});

$("body").on("click", ".desktop-berita", function () {
    var letak = $(this).val();
    var page = $("#page").val();
    var deviceType = $("#deviceType").val();

    $.ajax({
        url: "/admin/validate-placement-banner",
        data: {
            letak: letak,
            page: page,
            deviceType: deviceType,
        },
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            console.log(response);
            if (response.exists == false) {
                $("#validate-desktop-berita").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-desktop-berita").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});
