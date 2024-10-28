$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

$("#form").on("submit", function () {
    window.onbeforeunload = null;
});

window.onbeforeunload = function () {
    return "Are you sure you want to leave? Any unsaved data will be lost.";
};

// create permalink using postTitle
$("#postTitle").on("focusout", () => {
    var title = $("#postTitle").val();

    var postTitle = title.substr(0, 90);

    var permalink = $("#permalink").val();

    console.log(postTitle);

    if (permalink.length === 0) {
        $.ajax({
            url: "/create-permalink",
            type: "POST",
            data: {
                post_title: postTitle,
            },
            dataType: "json",
            success: (response) => {
                $("#permalink").val(response.data.permalink);
                if (response.data.used) {
                    $("#permalink").addClass("is-invalid");
                    $("#permalink-warning").text("Permalink Sudah Dipakai");
                } else {
                    $("#permalink").removeClass("is-invalid");
                }
            },
        });
    }
});

// check apakah permalink sudah diapakai
$("#permalink").on("focusout", () => {
    var permalink = $("#permalink").val();
    var postId = $("#postId").val();

    $.ajax({
        url: "/check-permalink",
        type: "POST",
        data: {
            permalink: permalink,
            postId: postId,
        },
        dataType: "json",
        success: (response) => {
            if (response.data.used) {
                $("#permalink").addClass("is-invalid");
                $("#permalink-warning").text("Permalink Sudah Dipakai");
                $("#permalink").val(response.data.permalink);
            } else {
                $("#permalink").removeClass("is-invalid");
                $("#permalink").val(response.data.permalink);
            }
        },
    });
});

// auto save
setInterval(() => {
    save();
}, 30000);

$("#btnPreview").on("click", () => {
    save();
});

// fungsi save
function save() {
    // get title
    var postTitle = $("#postTitle").val();

    // get description
    var postContent = CKEDITOR.instances["content"].getData();

    // get Category
    var category = [];
    $("input:checkbox[type=checkbox]:checked").each(function () {
        category.push($(this).val());
    });

    // get Tags
    var tags = $("#tags").val();

    // get ID
    var postId = $("#postId").val();

    // get permalink
    var permalink = $("#permalink").val();

    // get keyword
    var keyword = $("#keyword").val();

    // get description
    var description = $("#description").val();

    // get read too 1
    var related_post = $("#related").val();

    var data = {
        post_title: postTitle,
        post_content: postContent,
        category: category,
        tags: tags,
        ID: postId,
        post_name: permalink,
        keyword: keyword,
        description: description,
        related_post: related_post,
    };

    $.ajax({
        url: "/auto-save",
        type: "POST",
        data: data,
        dataType: "json",
        error: (response) => {
            console.log(response);
        },
    });
}

// save caption
$("#post_excerpt").on("focusout", () => {
    var caption = $("#post_excerpt").val();
    var postId = $("#postId").val();

    data = {
        id: postId,
        caption: caption,
    };

    $.ajax({
        url: "/save-featured-image-caption",
        type: "post",
        data: data,
        dataType: "json",
        error: (response) => {
            console.log(response);
        },
    });
});

// save alt text
$("#altText").on("focusout", () => {
    var altText = $("#altText").val();
    var postId = $("#postId").val();

    $.ajax({
        url: "/autosave-alt-text",
        type: "POST",
        data: {
            altText: altText,
            id: postId,
        },
        dataType: "json",
        success: (response) => {
            console.log(response);
        },
    });
});
