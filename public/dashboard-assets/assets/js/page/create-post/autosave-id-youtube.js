$("#idYoutube").on("focusout", function () {
    // get id youtube
    var idYoutube = $(this).val();

    // get post id
    var postId = $("#postId").val();

    // get title
    var postTitle = $("#postTitle").val();

    setTimeout(() => {
        if (idYoutube != "") {
            $("#frameYoutube").attr(
                "src",
                "https://www.youtube.com/embed/" + idYoutube
            );
            $("#frameYoutube").attr("hidden", false);

            $.ajax({
                url: "/autosave-id-youtube",
                method: "POST",
                data: {
                    postId: postId,
                    idYoutube: idYoutube,
                },
                dataType: "json",
                success: function (response) {
                    console.log(response);
                },
            });
        }
    }, 2000);
});
