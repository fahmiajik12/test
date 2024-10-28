$("#editStatus").on("click", function () {
    var checkHidden = $(".setting-status").attr("hidden");
    var saveStatus = $("#save-post").val();

    // melakukan pengecekan apakah status draft atau bukan jika draft maka tambah atribut selected di value draft
    if (saveStatus == "Simpan Draf") {
        $("#selectStatus option[value='draft'").prop("selected", true);
    } else if (saveStatus == "Simpan Sebagai Ditangguhkan") {
        $("#selectStatus option[value='pending'").prop("selected", true);
    } else if (saveStatus == "Telah Terbit") {
        $("#selectStatus option[value='publish'").prop("selected", true);
    }

    console.log(saveStatus);

    // cek apakah setting status ada hiden atau tidak
    // jika ada maka remove attribut hidden
    // jika tidak maka tambah hidden
    if (checkHidden) {
        $(".setting-status").removeAttr("hidden", true);
    } else {
        $(".setting-status").attr("hidden", true);
    }
});

// menambah atribut hidden di setting status jika cancel di click
$("#cancelStatus").on("click", function () {
    $(".setting-status").attr("hidden", true);
});

$("#okStatus").on("click", function () {
    // mengambil value dari id selectStatus
    var status = $("#selectStatus").val();

    // mengubah value id status menjadi value dari variable status
    $("#save-post").val(status);

    // mengubah text id textStatus menjadi value dari variable status

    if (status == "draft") {
        $("#textStatus").text("Draf");
        $("#save-post").val("Simpan Draf");
    } else if (status == "pending") {
        $("#textStatus").text("Menunggu Peninjauan");
        $("#save-post").val("Simpan Sebagai Ditangguhkan");
    } else if (status == "future") {
        $("#textStatus").text("Menunggu Peninjauan");
        $("#save-post").val("Simpan Sebagai Ditangguhkan");
    } else if (status == "publish") {
        $("#textStatus").text("Telah Terbit");
    }

    // menyembunyikan setting status
    $(".setting-status").attr("hidden", true);
});

// publish fitur
$("#editPublish").on("click", function () {
    var checkHidden = $(".setting-publish").attr("hidden");

    // cek apakah setting status ada hiden atau tidak
    // jika ada maka remove attribut hidden
    // jika tidak maka tambah hidden
    if (checkHidden) {
        $(".setting-publish").removeAttr("hidden", true);
    } else {
        $(".setting-publish").attr("hidden", true);
    }
});

$("#cancelPublish").on("click", function () {
    var datePost = $("#datePost").val();
    var postStatus = $("#postStatus").val();

    if (postStatus == "publish" || postStatus == "future") {
        $("#schedule").text(datePost);
    } else {
        $("#schedule").text("Segera");
    }

    var btnPublish = $("#btnPublish").val();

    if (btnPublish == "Terbitkan") {
        $("#btnPublish").val("Terbitkan");
    } else {
        $("#btnPublish").val("Perbarui");
    }
    $(".setting-publish").attr("hidden", true);
});

$("#okPublish").on("click", function () {
    var month = $("#mm").val();
    var monthText = $("#mm").find(":selected").attr("data-text");
    var day = $("#day").val();
    var year = $("#year").val();
    var hour = $("#hour").val();
    var minute = $("#minute").val();

    var hidemm = $("#hidemm").val();
    var hideday = $("#hideday").val();
    var hideyear = $("#hideyear").val();
    var hidehour = $("#hidehour").val();
    var hideminute = $("#hideminute").val();

    if (
        month == hidemm &&
        day == hideday &&
        year == hideyear &&
        hour == hidehour &&
        minute == hideminute
    ) {
    } else {
        var schedule =
            monthText +
            " " +
            day +
            ", " +
            year +
            " pukul " +
            hour +
            ":" +
            minute;

        $("#schedule").text(schedule);
        $("#publish").val("Jadwalkan");
    }

    var schedulePost =
        year + "-" + month + "-" + day + " " + hour + ":" + minute + ":00";

    $("#postDate").val(schedulePost);
    $(".setting-publish").attr("hidden", true);
    $("#btnPublish").val("Jadwalkan");
});
var token = $("meta[name='csrf-token']").attr("content");

// Get realted post
$(document).ready(function () {
    $("#related").select2({
        maximumSelectionLength: 3,
        multiple: true,
        placeholder: "Masukkan Judul Pos",
        ajax: {
            url: "/get-related-post",
            type: "POST",
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
