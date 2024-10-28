$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

$("body").on("change", "#page", function () {
    var val = $(this).val();

    if (val == "Home") {
        $("#validate-letak-home-mobile").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    } else if (val == "List Berita") {
        $("#validate-letak-list-mobile").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    } else if (val == "Halaman Berita") {
        $("#validate-letak-berita-mobile").attr("hidden", true);
        $("#btnSubmit").attr("disabled", false);
    }
});

$("body").on("click", ".letak-home-mobile", function () {
    var letak = $(this).val();
    var halaman = $("#page").val();
    var deviceType = $("#deviceType").val();

    console.log(halaman, deviceType, letak);

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
                $("#validate-letak-home-mobile").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-letak-home-mobile").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});

$("body").on("click", ".letak-list-mobile", function () {
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
                $("#validate-letak-list-mobile").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-letak-list-mobile").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});

$("body").on("click", ".letak-berita-mobile", function () {
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
                $("#validate-letak-berita-mobile").attr("hidden", true);
                $("#btnSubmit").attr("disabled", false);
            } else {
                $("#validate-letak-berita-mobile").attr("hidden", false);
                $("#btnSubmit").attr("disabled", true);
            }
        },
    });
});
