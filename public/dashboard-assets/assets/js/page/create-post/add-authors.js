// get all posts
$(document).ready(function () {
    $("#authors1").select2({
        searchInputPlaceholder: "Cari Nama",
        placeholder: "Cari Nama",
        allowClear: true,
        ajax: {
            url: "/get-users",
            type: "GET",
            delay: 250,
            minimumInputLength: 5,
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
                            id: item.ID,
                            text: item.display_name,
                        };
                    }),
                };
            },
        },
    });

    $("#authors1").select2("focus");
    $("#authors1").on("select2:open", () => {
        const searchInput = $("#authors1")
            .data("select2")
            .$dropdown.find(".select2-search__field")[0];
        if (searchInput) searchInput.focus();
    });

    $("#authors2").select2({
        searchInputPlaceholder: "Cari Nama",
        placeholder: "Cari Nama",
        allowClear: true,
        ajax: {
            url: "/get-users",
            type: "GET",
            delay: 250,
            minimumInputLength: 5,
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
                            id: item.ID,
                            text: item.display_name,
                        };
                    }),
                };
            },
        },
    });

    $("#authors2").select2("focus");
    $("#authors2").on("select2:open", () => {
        const searchInput = $("#authors2")
            .data("select2")
            .$dropdown.find(".select2-search__field")[0];
        if (searchInput) searchInput.focus();
    });
});
