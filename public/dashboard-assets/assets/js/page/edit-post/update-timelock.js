$(document).ready(function () {
    // checkLocking();
    updateLocktime();
});

var postId = $("#postId").val();

function updateLocktime() {
    var postId = $("#postId").val();

    $.ajax({
        url: "/update-locktime",
        data: {
            id: postId,
        },
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            console.log(response);
        },
    });
}

function checkLocking() {
    var postId = $("#postId").val();
    var authorPost = $("#authorPost").val();

    var currentUrl = window.location.pathname;
    var urlParts = currentUrl.split("/");
    var keyword = urlParts[1];

    $.ajax({
        url: "/check-locking/" + postId + "/" + authorPost,
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            // console.log(response);
            console.log(response.datas.status);
            if (response.datas.status == true) {
                Swal.fire({
                    html: `<img src="${response.datas.profilePicture}" style="width: 12%"> ${response.datas.displayName} sedang menyunting artikel ini`,
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    backdrop: true,
                    confirmButtonText: "Tutup!",
                    background: "#fff",
                    allowOutsideClick: false,
                }).then(function () {
                    window.location.href = "/" + keyword + "/post";
                });
            }
        },
    });
}

setInterval(() => {
    updateLocktime();
}, 55000);
