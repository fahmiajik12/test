$("#deviceType").on("change", function () {
    var device = $(this).val();

    if (device == "Mobile") {
        $("#device").empty();
        $("#device-desktop").attr("hidden", true);
        $("#device-mobile").attr("hidden", false);

        var htmlMobile = `
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="">Halaman</label>
                      <select name="page" class="form-control" id="page" required>
                        <option value="">Pilih Halaman</option>
                        <option value="Home">Home</option>
                        <option value="List Berita">List Berita</option>
                        <option value="Halaman Berita">Halaman berita / artikel</option>
                        <option value="Semua Halaman">Semua Halaman</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div id="halaman-home" hidden>
                      <label for="">Dimana anda akan meletakkan iklan?</label>
                      <div class="row">
                        <div class="col-4">
                          <input type="radio" name="letak" class="mobile-home" value="ads-banner-bawah-slider-headline" id="home-ads-banner-bawah-slider-headline" required>
                          <label for="home-ads-banner-bawah-slider-headline">
                            Di bawah slider headline
                          </label><br>
                          <label for="home-ads-banner-bawah-slider-headline">
                            <img src="/./dashboard-assets/ads-banner-placement/home-mobile/ads-banner-bawah-slider-headline.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="mobile-home" value="ads-banner-atas-terpopuler" id="home-ads-banner-atas-terpopuler" required>
                          <label for="home-ads-banner-atas-terpopuler">
                            Di atas terpopuler
                          </label><br>
                          <label for="home-ads-banner-atas-terpopuler">
                            <img src="/./dashboard-assets/ads-banner-placement/home-mobile/ads-banner-atas-terpopuler.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="mobile-home" value="ads-banner-bawah-pilihan-editor" id="home-ads-banner-bawah-pilihan-editor" required>
                          <label for="home-ads-banner-bawah-pilihan-editor">
                            Di Bawah pilihan editor
                          </label><br>
                          <label for="home-ads-banner-bawah-pilihan-editor">
                            <img src="/./dashboard-assets/ads-banner-placement/home-mobile/ads-banner-dibawah-pilihan-editor.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="mobile-home" value="ads-banner-atas-topik-khusus" id="home-ads-banner-atas-topik-khusus">
                          <label for="home-ads-banner-atas-topik-khusus">
                            Di atas topik khusus
                          </label><br>
                          <label for="home-ads-banner-atas-topik-khusus">
                            <img src="/./dashboard-assets/ads-banner-placement/home-mobile/ads-banner-atas-topik-khusus.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="mobile-home" value="ads-banner-footer" id="home-ads-banner-footer">
                          <label for="home-ads-banner-footer">
                            Di atas footer
                          </label><br>
                          <label for="home-ads-banner-footer">
                            <img src="/./dashboard-assets/ads-banner-placement/home-mobile/ads-banner-footer.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-mobile-home" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
                    </div>
                    <div id="list-berita" hidden>
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
                      <div class="row">
                        <div class="col-3">
                          <input type="radio" name="letak" class="mobile-list-berita" value="banner-sebelum-list" id="list-berita-banner-sebelum-list" required>
                          <label for="list-berita-banner-sebelum-list">
                            Sebelum list berita
                          </label><br>
                          <label for="list-berita-banner-sebelum-list">
                            <img src="/./dashboard-assets/ads-banner-placement/list-berita-mobile/banner-sebelum-list.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="mobile-list-berita" value="ads-banner-footer" id="list-berita-banner-atas-footer">
                          <label for="list-berita-banner-atas-footer">
                            Di atas footer
                          </label><br>
                          <label for="list-berita-banner-atas-footer">
                            <img src="/./dashboard-assets/ads-banner-placement/list-berita-mobile/banner-atas-footer.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-mobile-list-berita" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
                    </div>
                    <div id="berita" hidden>
                      <label for="">Dimana anda akan meletakkan iklan?</label>
                      <div class="row">
                        <div class="col-3">
                          <input type="radio" name="letak" class="mobile-berita" value="banner-atas-judul" id="berita-banner-atas-judul" required>
                          <label for="berita-banner-atas-judul">
                            Di atas judul
                          </label><br>
                          <label for="berita-banner-atas-judul">
                            <img src="/./dashboard-assets/ads-banner-placement/berita-mobile/banner-atas-judul.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="mobile-berita" value="ads-banner-footer" id="berita-banner-atas-footer">
                          <label for="berita-banner-atas-footer">
                            Di atas footer
                          </label><br>
                          <label for="berita-banner-atas-footer">
                            <img src="/./dashboard-assets/ads-banner-placement/berita-mobile/banner-atas-footer.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="mobile-berita" value="bawah-editor" id="berita-bawah-editor">
                          <label for="berita-bawah-editor">
                            Di bawah editor
                          </label><br>
                          <label for="berita-bawah-editor">
                            <img src="/./dashboard-assets/ads-banner-placement/berita-mobile/dibawah-editor.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-mobile-berita" class="mobile-berita" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
                    </div>
                    <div id="semua-halaman" hidden>
                      <label for="">Dimana anda akan meletakkan iklan?</label>
                      <div class="row">
                        <div class="col-4">
                          <input type="radio" name="letak" class="mobile-home" value="ads-banner-footer" id="semua-halaman-ads-banner-footer">
                          <label for="semua-halaman-ads-banner-footer">
                            Di atas footer
                          </label><br>
                          <label for="semua-halaman-ads-banner-footer">
                            <img src="/./dashboard-assets/ads-banner-placement/home-mobile/ads-banner-footer.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-mobile-home" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
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
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="">Halaman</label>
                      <select name="page" class="form-control" id="page" required>
                        <option value="">Pilih Halaman</option>
                        <option value="Home">Home</option>
                        <option value="List Berita">List Berita</option>
                        <option value="Halaman Berita">Halaman berita / artikel</option>
                        <option value="Semua Halaman">Semua Halaman</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div id="halaman-home" hidden>
                      <label for="">Dimana anda akan meletakkan iklan?</label>
                      <div class="row">
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-kiri" id="home-banner-kiri" required>
                          <label>
                            Banner Kiri
                          </label><br>
                          <label for="home-banner-kiri">
                            Di bagian kiri
                          </label><br>
                          <label for="home-banner-kiri">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-kiri.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-kanan" id="home-banner-kanan">
                          <label>
                            Banner Kanan
                          </label><br>
                          <label for="home-banner-kanan">
                            Di bagian kanan
                          </label><br>
                          <label for="home-banner-kanan">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-kanan.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-bawah-slider-headline" id="banner-bawah-slider-headline">
                          <label for="banner-bawah-slider-headline">
                            Di bawah slider headline
                          </label><br>
                          <label for="banner-bawah-slider-headline">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-bawah-slider-headline.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-bawah-headline" id="banner-bawah-headline">
                          <label for="banner-bawah-headline">
                            Di bawah headline
                          </label><br>
                          <label for="banner-bawah-headline">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-bawah-headline.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-atas-topik-khusus" id="banner-atas-topik-khusus">
                          <label for="banner-atas-topik-khusus">
                            Di atas topik khusus
                          </label><br>
                          <label for="banner-atas-topik-khusus">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-atas-topik-khusus.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-atas-footer" id="banner-atas-footer">
                          <label for="banner-atas-footer">
                            Di atas footer
                          </label><br>
                          <label for="banner-atas-footer">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-atas-footer.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-bawah-sidebar-urutan-pertama" id="banner-bawah-sidebar-urutan-pertama">
                          <label for="banner-bawah-sidebar-urutan-pertama">
                            Di bawah sidebar (urutan pertama)
                          </label><br>
                          <label for="banner-bawah-sidebar-urutan-pertama">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-bawah-sidebar-urutan-pertama.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-bawah-sidebar-urutan-kedua" id="banner-bawah-sidebar-urutan-kedua">
                          <label for="banner-bawah-sidebar-urutan-kedua">
                            Di bawah sidebar (urutan kedua)
                          </label><br>
                          <label for="banner-bawah-sidebar-urutan-kedua">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-bawah-sidebar-urutan-kedua.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-desktop-home" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
                    </div>
                    <div id="list-berita" hidden>
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
                      <div class="row">
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-list-berita" value="banner-kiri" id="list-berita-banner-kiri" required>
                          <label for="list-berita-banner-kiri">
                            Di bagian kiri
                          </label><br>
                          <label for="list-berita-banner-kiri">
                            <img src="/./dashboard-assets/ads-banner-placement/list-berita/banner-kiri.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-list-berita" value="banner-kanan" id="list-berita-banner-kanan">
                          <label for="list-berita-banner-kanan">
                            Di bagian kanan
                          </label><br>
                          <label for="list-berita-banner-kanan">
                            <img src="/./dashboard-assets/ads-banner-placement/list-berita/banner-kanan.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-list-berita" value="banner-bawah-sidebar-urutan-pertama" id="list-berita-banner-bawah">
                          <label for="list-berita-banner-bawah">
                            Di bagian bawah
                          </label><br>
                          <label for="list-berita-banner-bawah">
                            <img src="/./dashboard-assets/ads-banner-placement/list-berita/banner-kanan-bawah.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-list-berita" value="banner-kanan-atas" id="list-berita-banner-atas">
                          <label for="list-berita-banner-atas">
                            Di bagian atas
                          </label><br>
                          <label for="list-berita-banner-atas">
                            <img src="/./dashboard-assets/ads-banner-placement/list-berita/banner-kanan-atas.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-desktop-list-berita" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
                    </div>
                    <div id="berita" hidden>
                      <label for="">Dimana anda akan meletakkan iklan?</label>
                      <div class="row">
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="banner-kiri" id="berita-banner-kiri" required>
                          <label for="berita-banner-kiri">
                            Di bagian kiri
                          </label><br>
                          <label for="berita-banner-kiri">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/banner-kiri.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="banner-kanan" id="berita-banner-kanan">
                          <label for="berita-banner-kanan">
                            Di bagian kanan
                          </label><br>
                          <label for="berita-banner-kanan">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/banner-kanan.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="banner-bawah-sidebar-urutan-pertama" id="berita-banner-bawah">
                          <label for="berita-banner-bawah">
                            Di bagian bawah
                          </label><br>
                          <label for="berita-banner-bawah">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/banner-kanan-bawah.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="banner-kanan-atas" id="berita-banner-atas">
                          <label for="berita-banner-atas">
                            Di bagian atas
                          </label><br>
                          <label for="berita-banner-atas">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/banner-kanan-atas.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="banner-atas-judul" id="banner-atas-judul">
                          <label for="banner-atas-judul">
                            Di bagian atas judul
                          </label><br>
                          <label for="banner-atas-judul">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/banner-atas-judul.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="banner-dibawah-editor" id="banner-dibawah-editor">
                          <label for="banner-dibawah-editor">
                            Dibawah editor
                          </label><br>
                          <label for="banner-dibawah-editor">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/banner-dibawah-editor.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="diatas-berita-terkini" id="diatas-berita-terkini">
                          <label for="diatas-berita-terkini">
                            Diatas berita terkini
                          </label><br>
                          <label for="diatas-berita-terkini">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/diatas-berita-terkini.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-3">
                          <input type="radio" name="letak" class="desktop-berita" value="banner-atas-footer" id="berita-banner-atas-footer">
                          <label for="berita-banner-atas-footer">
                            Diatas footer
                          </label><br>
                          <label for="berita-banner-atas-footer">
                            <img src="/./dashboard-assets/ads-banner-placement/berita/banner-atas-footer.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-desktop-berita" class="desktop-berita" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
                    </div>
                    <div id="semua-halaman" hidden>
                      <label for="">Dimana anda akan meletakkan iklan?</label>
                      <div class="row">
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-kiri" id="semua-halaman-banner-kiri" required>
                          <label for="semua-halaman-banner-kiri">
                            Di bagian kiri
                          </label><br>
                          <label for="semua-halaman-banner-kiri">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-kiri.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-kanan" id="semua-halaman-banner-kanan">
                          <label for="semua-halaman-banner-kanan">
                            Di bagian kanan
                          </label><br>
                          <label for="semua-halaman-banner-kanan">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-kanan.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-4">
                          <input type="radio" name="letak" class="desktop-home" value="banner-bawah-sidebar-urutan-pertama" id="semua-halaman-banner-bawah-sidebar-urutan-pertama">
                          <label for="semua-halaman-banner-bawah-sidebar-urutan-pertama">
                            Di bawah (urutan pertama)
                          </label><br>
                          <label for="semua-halaman-banner-bawah-sidebar-urutan-pertama">
                            <img src="/./dashboard-assets/ads-banner-placement/home/banner-bawah-sidebar-urutan-pertama.png" alt="" srcset="">
                          </label>
                        </div>
                        <div class="col-12">
                          <div id="validate-desktop-home" hidden><i style="color: red">Letak sudah digunakan</i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

        $("#device").append(htmlDesktop);
    }
});
