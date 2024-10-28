var token = $("meta[name='csrf-token']").attr("content");

// get all posts
$(document).ready(function () {
    $("#tags").select2({
        searchInputPlaceholder: "Cari Tags",
        placeholder: "Cari Tags",
        ajax: {
            url: "/get-tags",
            type: "POST",
            delay: 250,
            dataType: "json",
            data: (params) => {
                return {
                    name: params.term,
                    _token: token,
                };
            },
            processResults: (data) => {
                return {
                    results: $.map(data, (item) => {
                        return {
                            id: item.name,
                            text: item.name,
                        };
                    }),
                };
            },
        },
    });

    $("#tags").select2("focus");
    $("#tags").on("select2:open", () => {
        const searchInput = $("#tags")
            .data("select2")
            .$dropdown.find(".select2-search__field")[0];
        if (searchInput) searchInput.focus();
    });

    $("#tagsEdit").select2({
        ajax: {
            url: "/get-tags",
            type: "POST",
            delay: 250,
            dataType: "json",
            data: (params) => {
                return {
                    name: params.term,
                    _token: token,
                };
            },
            processResults: (data) => {
                return {
                    results: $.map(data, (item) => {
                        return {
                            id: item.name,
                            text: item.name,
                        };
                    }),
                };
            },
        },
    });
});

// show modal
$("body").on("click", "#changeOrderNumber", function () {
    $("#modalChangeOrderNumber").modal("show");

    var number = $(this).data("number");
    var id = $(this).data("id");
    var thumbnail = $(this).data("thumbnail");
    var altText = $(this).data("alt");
    var tags = $(this).data("tags");
    var deskripsi = $(this).data("deskripsi");
    var title = $(this).data("title");

    $("#editOrderNumber").val(number);
    $("#nomor").val(number);
    $("#id").val(id);
    $("#holder-edit").append(
        $("<img>").addClass("w-25").attr("src", thumbnail)
    );
    $("#thumbnail-edit").val(thumbnail);
    $("#altTextEdit").val(altText);
    $("#deskripsiEdit").val(deskripsi);
    $("#titleEdit").val(title);
    $("#tagsEdit").append(new Option(tags, tags));
});
