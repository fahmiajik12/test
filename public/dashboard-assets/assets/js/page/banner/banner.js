// Show modal add banner
$("#button-add-banner").on("click", function () {
    $("#modal-add-banner").modal("show");
});

// preview image
imageUpload.onchange = (evt) => {
    const [file] = imageUpload.files;
    if (file) {
        imagePreview.src = URL.createObjectURL(file);
    }
};
