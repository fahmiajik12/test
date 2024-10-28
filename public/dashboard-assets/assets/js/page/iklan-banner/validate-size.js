$(document).ready(function () {
    // Validasi ukuran gambar saat upload
    $("#imageUpload").change(function () {
        // Ambil ukuran gambar yang diupload
        // var imgSize = this.files[0].size;
        // // Ambil ukuran gambar yang diharapkan
        // var maxSize = 200000; // ukuran maksimum dalam bytes

        // // Jika ukuran gambar melebihi batas maksimum
        // if (imgSize > maxSize) {
        //     $("#error").text("Ukuran gambar terlalu besar!");
        //     this.value = ""; // hapus nilai input file
        //     return false;
        // }

        var letak = $('[name="letak"]:checked').val();
        var deviceType = $("#deviceType").val();

        console.log(letak);

        var img = new Image();
        if (deviceType == "Desktop") {
            if (letak == "banner-kiri" || letak == "banner-kanan") {
                // Validasi ukuran gambar dengan lebar 135 dan tinggi 750
                img.onload = function () {
                    if (this.width !== 135) {
                        $("#imageUpload").val("");
                        $("#imagePreview").attr("src", "");
                        alert("lebar gambar harus 135px!");
                        return false;
                    }
                };
            } else if (
                letak == "banner-kanan-bawah" ||
                letak == "banner-kanan-atas"
            ) {
                // Validasi ukuran gambar dengan lebar 250 dan tinggi 300
                img.onload = function () {
                    if (this.width !== 250) {
                        $("#imageUpload").val("");
                        $("#imagePreview").attr("src", "");
                        alert("lebar gambar harus 250px!");
                        return false;
                    }
                };
            }
        } else if (deviceType == "Mobile") {
            img.onload = function () {
                var width = img.width;
                var height = img.height;
                if (width < height) {
                    $("#imageUpload").val("");
                    $("#imagePreview").attr("src", "");
                    alert("Gambar harus dalam mode landscape.");
                }
            };
        }
        img.src = URL.createObjectURL(this.files[0]);
    });
});
