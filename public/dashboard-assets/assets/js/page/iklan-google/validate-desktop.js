$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

$("body").on("change", "#page", function () {
    var val = $(this).val();

    if (val == "Home") {
        $("#validate-letak-home").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    } else if (val == "List Berita") {
        $("#validate-letak-list").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    } else if (val == "Halaman Berita") {
        $("#validate-letak-berita").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    }
});

$("body").on("click", ".letak-home", function () {
    var letak = $(this).val();
    var halaman = $("#page").val();
    var deviceType = $("#deviceType").val();

    $.ajax({
        url: "/admin/validate-placement",
        data: {
            letak: letak,
            halaman: halaman,
            deviceType: deviceType,
        },
        type: "GET",
        dataType: "json",
        success: function (response) {
            if (response.exists == false) {
                $("#validate-letak-home").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-letak-home").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});

$("body").on("click", ".letak-list", function () {
    var letak = $(this).val();
    var menu = $("#menu").val();
    var halaman = $("#page").val();
    var deviceType = $("#deviceType").val();

    $.ajax({
        url: "/admin/validate-placement-list",
        data: {
            letak: letak,
            halaman: halaman,
            menu: menu,
            deviceType: deviceType,
        },
        type: "GET",
        dataType: "json",
        success: function (response) {
            if (response.exists == false) {
                $("#validate-letak-list").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-letak-list").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});

$("body").on("click", ".letak-berita", function () {
    var letak = $(this).val();
    var halaman = $("#page").val();
    var deviceType = $("#deviceType").val();

    $.ajax({
        url: "/admin/validate-placement",
        data: {
            letak: letak,
            halaman: halaman,
            deviceType: deviceType,
        },
        type: "GET",
        dataType: "json",
        success: function (response) {
            if (response.exists == false) {
                $("#validate-letak-berita").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-letak-berita").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});
