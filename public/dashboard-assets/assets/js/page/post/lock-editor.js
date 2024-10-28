$(document).ready(function () {
    checkLockEditor();
});

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

function checkLockEditor() {
    var dataId = [];
    var loginId = $("#loginId").val();
    $("tr")
        .slice(1)
        .each(function () {
            dataId.push($(this).attr("data-postId"));
        });

    var dataId = dataId.slice(0, 10);

    // ajax check locking
    $.ajax({
        url: "/locking-editor",
        data: {
            ids: dataId,
        },
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            console.log(response);
            if (response.status == 200) {
                console.log(response);

                $.each(response.datas, function (key, value) {
                    if (value.lastEditor !== loginId) {
                        if (value.status) {
                            var text =
                                value.displayName +
                                " sedang menyunting artikel ini";

                            // membuat tulisan sedang menyunting
                            $("#lock-" + value.post_id).text(text);

                            // membuat checkbox menjadi disable
                            $("#checkbox-" + value.post_id).prop(
                                "disabled",
                                true
                            );

                            // mengubah button edit menjadi popup triger notifikasi
                            $("#edit-" + value.post_id).prop(
                                "href",
                                "javascript:void(0)"
                            );

                            // menambah data-text pada button
                            $("#edit-" + value.post_id).attr("data-text", text);

                            // menambah data-picture pada button
                            $("#edit-" + value.post_id).attr(
                                "data-profile",
                                value.profilePicture
                            );

                            // menambah class agar muncul popup notification
                            $("#edit-" + value.post_id).addClass(
                                "btnNotification"
                            );

                            // mengubah link menjadi popup triger notifikasi
                            $("#link-edit-" + value.post_id).prop(
                                "href",
                                "javascript:void(0)"
                            );

                            // menambah data-text pada button
                            $("#link-edit-" + value.post_id).attr(
                                "data-text",
                                text
                            );

                            // menambah data-picture pada button
                            $("#link-edit-" + value.post_id).attr(
                                "data-profile",
                                value.profilePicture
                            );

                            // menambah class agar muncul popup notification
                            $("#link-edit-" + value.post_id).addClass(
                                "btnNotification"
                            );
                        } else {
                            $("#lock-" + value.post_id).text(" ");
                            $("#checkbox-" + value.post_id).prop(
                                "disabled",
                                false
                            );
                            $("#edit-" + value.post_id).prop(
                                "href",
                                "edit-post/" + value.post_id
                            );
                            $("#edit-" + value.post_id).removeClass(
                                "btnNotification"
                            );

                            var path = window.location.pathname.split("/");

                            if (path[1] == "author") {
                                if (value.postStatus == "publish") {
                                    // disable edit post
                                    $("#link-edit-" + value.post_id).prop(
                                        "href",
                                        "javascript:void(0)"
                                    );
                                } else {
                                    $("#link-edit-" + value.post_id).prop(
                                        "href",
                                        "edit-post/" + value.post_id
                                    );
                                }
                            } else {
                                $("#link-edit-" + value.post_id).prop(
                                    "href",
                                    "edit-post/" + value.post_id
                                );
                            }

                            $("#link-edit-" + value.post_id).removeClass(
                                "btnNotification"
                            );
                        }
                    }
                });
            } else {
                console.log(response);
            }
        },
    });
}

// setInterval(() => {
//     checkLockEditor();
// }, 60100);
setInterval(() => {
    checkLockEditor();
}, 5100);

$("body").on("click", ".btnNotification", function () {
    var text = $(this).data("text");
    var profile = $(this).data("profile");
    Swal.fire({
        html: `<img src="${profile}" style="width: 12%"> ${text}`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Tutup!",
    });
});
