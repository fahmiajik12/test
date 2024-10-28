$("#deviceType").on("change", function () {
    var device = $(this).val();

    if (device == "Mobile") {
        $("#device").empty();
        $("#device-desktop").attr("hidden", true);
        $("#device-mobile").attr("hidden", false);

        var htmlMobile = `
                <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Tipe Iklan</label>
                        <select name="tipe" class="form-control" id="" required>
                          <option value="">Pilih Tipe Iklan</option>
                          <option value="Display Ads">Display Ads</option>
                          <option value="In-feed ads">In-feed ads</option>
                          <option value="In-article ads">In-article ads</option>
                          <option value="Multiplex ads">Multiplex ads</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Halaman</label>
                        <select name="page" class="form-control" id="page" required>
                          <option value="">Pilih Halaman</option>
                          <option value="Home">Home</option>
                          <option value="List Berita">List Berita</option>
                          <option value="Halaman Berita">Halaman berita / artikel</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div id="halaman-home" hidden>
                        <label for="">Dimana anda akan meletakkan iklan?</label>
                        <div class="row">
                          <div class="col-4 mt-3">
                            <input type="radio" name="letak" class="letak-home-mobile" value="atas-berita-terkini" id="home-atas-berita-terkini">
                            <label for="home-atas-berita-terkini">
                              Diatas berita terkini
                            </label><br>
                            <label for="home-atas-berita-terkini">
                              <img src="/./dashboard-assets/letak-iklan-google/home-mobile/atas-berita-terkini.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-4 mt-3">
                            <input type="radio" name="letak" class="letak-home-mobile" value="atas-terpopuler" id="home-atas-terpopuler">
                            <label for="home-atas-terpopuler">
                              Diatas terpopuler
                            </label><br>
                            <label for="home-atas-terpopuler">
                              <img src="/./dashboard-assets/letak-iklan-google/home-mobile/atas-terpopuler.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-4 mt-3">
                            <input type="radio" name="letak" class="letak-home-mobile" value="atas-list-berita" id="home-atas-list-berita">
                            <label for="home-atas-list-berita">
                              Diatas list berita
                            </label><br>
                            <label for="home-atas-list-berita">
                              <img src="/./dashboard-assets/letak-iklan-google/home-mobile/atas-list-berita.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-4 mt-3">
                            <input type="radio" name="letak" class="letak-home-mobile" value="atas-video-populer" id="home-atas-video-populer">
                            <label for="home-atas-video-populer">
                              Diatas video populer
                            </label><br>
                            <label for="home-atas-video-populer">
                              <img src="/./dashboard-assets/letak-iklan-google/home-mobile/atas-video-populer.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-12">
                            <span><i id="validate-letak-home-mobile" style="color:red;" hidden>Letak ini sudah dipakai</i></span>
                          </div>
                        </div>
                      </div>
                      <div id="list-berita" hidden>
                        <!--
                        <div class="row">
                          <div class="col-12">
                            <label for="">Di menu / halaman apa anda ingin menerapkan iklan ini?</label>
                            <div class="form-group">
                              <select name="menu" class="form-control" id="menu">
                                <option value="">Pilih menu / halaman</option>
                                <option value="News">News</option>
                                <option value="Budaya">Budaya</option>
                                <option value="Gaya Hidup">Gaya Hidup</option>
                                <option value="Zodiak">Zodiak</option>
                                <option value="Harianesia">Harianesia</option>
                                <option value="Olahraga">Olahraga</option>
                                <option value="Pendidikan">Pendidikan</option>
                                <option value="Ekbis">Ekbis</option>
                                <option value="Video">Video</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        -->
                        <div class="row">
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-list-mobile" value="setelah-list-ke-8" id="list-berita-setelah-list-ke-8" required>
                            <label for="list-berita-setelah-list-ke-8">
                              Setelah list ke 8
                            </label><br>
                            <label for="list-berita-setelah-list-ke-8">
                              <img src="/./dashboard-assets/letak-iklan-google/list-berita-mobile/setelah-list-ke-8.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-list-mobile" value="setelah-list-ke-16" id="list-berita-setelah-list-ke-16" required>
                            <label for="list-berita-setelah-list-ke-16">
                              Setelah list ke 16
                            </label><br>
                            <label for="list-berita-setelah-list-ke-16">
                              <img src="/./dashboard-assets/letak-iklan-google/list-berita-mobile/setelah-list-ke-16.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-12">
                            <span><i id="validate-letak-list-mobile" style="color:red;" hidden>Letak ini sudah dipakai</i></span>
                          </div>
                        </div>
                      </div>
                      <div id="berita" hidden>
                        <label for="">Dimana anda akan meletakkan iklan?</label>
                        <div class="row">
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-berita-mobile" value="sebelum-gambar-utama" id="berita-sebelum-gambar-utama" required>
                            <label for="berita-sebelum-gambar-utama">
                              Sebelum gambar utama
                            </label><br>
                            <label for="berita-sebelum-gambar-utama">
                              <img src="/./dashboard-assets/letak-iklan-google/berita/sebelum-gambar-utama.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-berita-mobile" value="di-paragraf-berita" id="berita-di-paragraf-berita" required>
                            <label for="berita-di-paragraf-berita">
                              Diparagraf berita
                            </label><br>
                            <label for="berita-di-paragraf-berita">
                              <img src="/./dashboard-assets/letak-iklan-google/berita-mobile/di-paragraf-berita.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-berita-mobile" value="diatas-list-categori-berita" id="berita-diatas-list-categori-berita" required>
                            <label for="berita-diatas-list-categori-berita">
                              Diatas list kategori berita
                            </label><br>
                            <label for="berita-diatas-list-categori-berita">
                              <img src="/./dashboard-assets/letak-iklan-google/berita-mobile/diatas-list-categori-berita.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-berita-mobile" value="diatas-post-terkait" id="berita-diatas-post-terkait" required>
                            <label for="berita-diatas-post-terkait">
                              Diatas post terkait
                            </label><br>
                            <label for="berita-diatas-post-terkait">
                              <img src="/./dashboard-assets/letak-iklan-google/berita-mobile/diatas-post-terkait.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-12">
                            <span><i id="validate-letak-berita-mobile" style="color:red;" hidden>Letak ini sudah dipakai</i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        `;

        $("#device").append(htmlMobile);
    } else if (device == "Desktop") {
        $("#device").empty();
        $("#device-desktop").attr("hidden", false);
        $("#device-mobile").attr("hidden", true);

        var htmlDesktop = `
                <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Tipe Iklan</label>
                        <select name="tipe" class="form-control" id="" required>
                          <option value="">Pilih Tipe Iklan</option>
                          <option value="Display Ads">Display Ads</option>
                          <option value="In-feed ads">In-feed ads</option>
                          <option value="In-article ads">In-article ads</option>
                          <option value="Multiplex ads">Multiplex ads</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="">Halaman</label>
                        <select name="page" class="form-control" id="page" required>
                          <option value="">Pilih Halaman</option>
                          <option value="Home">Home</option>
                          <option value="List Berita">List Berita</option>
                          <option value="Halaman Berita">Halaman berita / artikel</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div id="halaman-home" hidden>
                        <label for="">Dimana anda akan meletakkan iklan?</label>
                        <div class="row">
                          <div class="col-4">
                            <input type="radio" name="letak" class="letak-home" value="google-bawah-banner-kedua" id="home-banner-bawah">
                            <label for="home-banner-bawah">
                              Di kanan bawah setelah ads banner kedua
                            </label><br>
                            <label for="home-banner-bawah">
                              <img src="/./dashboard-assets/letak-iklan-google/home/google-bawah-banner-kedua.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-12">
                            <span><i id="validate-letak-home" style="color:red;" hidden>Letak ini sudah dipakai</i></span>
                          </div>
                        </div>
                      </div>
                      <div id="list-berita" hidden>
                        <!--
                        <div class="row">
                          <div class="col-12">
                            <label for="">Di menu / halaman apa anda ingin menerapkan iklan ini?</label>
                            <div class="form-group">
                              <select name="menu" class="form-control" id="menu">
                                <option value="">Pilih menu / halaman</option>
                                <option value="News">News</option>
                                <option value="Budaya">Budaya</option>
                                <option value="Gaya Hidup">Gaya Hidup</option>
                                <option value="Zodiak">Zodiak</option>
                                <option value="Harianesia">Harianesia</option>
                                <option value="Olahraga">Olahraga</option>
                                <option value="Pendidikan">Pendidikan</option>
                                <option value="Ekbis">Ekbis</option>
                                <option value="Video">Video</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        -->
                        <div class="row">
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-list" value="atas-sebelum-list-artikel" id="list-berita-atas-sebelum-list-artikel" required>
                            <label for="list-berita-atas-sebelum-list-artikel">
                              Di atas sebelum list berita
                            </label><br>
                            <label for="list-berita-atas-sebelum-list-artikel">
                              <img src="/./dashboard-assets/letak-iklan-google/list-berita/atas-sebelum-list-artikel.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-list" value="sela-sela-list-artikel" id="list-berita-sela-sela-list-artikel">
                            <label for="list-berita-sela-sela-list-artikel">
                              Di antara list artikel
                            </label><br>
                            <label for="list-berita-sela-sela-list-artikel">
                              <img src="/./dashboard-assets/letak-iklan-google/list-berita/sela-sela-list-artikel.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-list" value="banner-kanan-bawah" id="list-berita-banner-bawah">
                            <label for="list-berita-banner-bawah">
                              Di pojok kanan bawah
                            </label><br>
                            <label for="list-berita-banner-bawah">
                              <img src="/./dashboard-assets/letak-iklan-google/list-berita/pojok-kanan-bawah.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-12">
                            <span><i id="validate-letak-list" style="color:red;" hidden>Letak ini sudah dipakai</i></span>
                          </div>
                        </div>
                      </div>
                      <div id="berita" hidden>
                        <label for="">Dimana anda akan meletakkan iklan?</label>
                        <div class="row">
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-berita" value="sebelum-gambar-utama" id="berita-sebelum-gambar-utama" required>
                            <label for="berita-sebelum-gambar-utama">
                              Sebelum gambar utama
                            </label><br>
                            <label for="berita-sebelum-gambar-utama">
                              <img src="/./dashboard-assets/letak-iklan-google/berita/sebelum-gambar-utama.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-berita" value="setelah-post-terkait" id="berita-setelah-post-terkait">
                            <label for="berita-setelah-post-terkait">
                              Setelah post terkait
                            </label><br>
                            <label for="berita-setelah-post-terkait">
                              <img src="/./dashboard-assets/letak-iklan-google/berita/setelah-post-terkait.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="radio" name="letak" class="letak-berita" value="pojok-kanan-bawah" id="berita-pojok-kanan-bawah">
                            <label for="berita-pojok-kanan-bawah">
                              Di pojok kanan bawah
                            </label><br>
                            <label for="berita-pojok-kanan-bawah">
                              <img src="/./dashboard-assets/letak-iklan-google/berita/pojok-kanan-bawah.png" alt="" srcset="">
                            </label>
                          </div>
                          <div class="col-12">
                            <span><i id="validate-letak-berita" style="color:red;" hidden>Letak ini sudah dipakai</i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        `;

        $("#device").append(htmlDesktop);
    }
});
