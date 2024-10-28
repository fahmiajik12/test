$("body").on("change", "#page", function () {
    var page = $(this).val();

    if (page == "Home") {
        $("#halaman-home").attr("hidden", false);
        $("#list-berita").attr("hidden", true);
        $("#berita").attr("hidden", true);
        $("#semua-halaman").attr("hidden", true);
        $("[type=radio]").prop("checked", false);
    } else if (page == "List Berita") {
        $("#halaman-home").attr("hidden", true);
        $("#list-berita").attr("hidden", false);
        $("#berita").attr("hidden", true);
        $("#semua-halaman").attr("hidden", true);
        $("[type=radio]").prop("checked", false);
    } else if (page == "Halaman Berita") {
        $("#halaman-home").attr("hidden", true);
        $("#list-berita").attr("hidden", true);
        $("#berita").attr("hidden", false);
        $("#semua-halaman").attr("hidden", true);
        $("[type=radio]").prop("checked", false);
    } else if(page == 'Semua Halaman') {
        $("#halaman-home").attr("hidden", true);
        $("#list-berita").attr("hidden", true);
        $("#berita").attr("hidden", true);
        $("#semua-halaman").attr("hidden", false);
        $("[type=radio]").prop("checked", false);
    }else {
        $("#halaman-home").attr("hidden", true);
        $("#list-berita").attr("hidden", true);
        $("#berita").attr("hidden", true);
        $("#semua-halaman").attr("hidden", true);
        $("[type=radio]").prop("checked", false);
    }
});
