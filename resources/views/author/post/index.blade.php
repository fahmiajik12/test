@extends('author.layout.app')

@section('title')
    Post
@endsection

@push('addons-css')
    <link rel="stylesheet"
        href="{{ asset('./dashboard-assets/library/datatables.net-bs4/css/dataTables.bootstrap4.min.css') }}">
    <link rel="stylesheet"
        href="{{ asset('./dashboard-assets/library/datatables.net-select-bs4/css/select.bootstrap4.min.css') }}">

    <meta name="csrf-token" content="{{ csrf_token() }}">
@endpush


@section('content')
    <!-- Main Content -->
    <div class="main-content">
        <section class="section">
            <div class="section-header">
                <h5>Post</h5>
            </div>

            <div class="section-body">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <a href="{{ route('author.create.post') }}" class="btn btn-info">Buat Postingan</a>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="table-responsive" style="min-height: 200px;">
                                            <table class="table table-bordered table-striped" id="tables">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Judul</th>
                                                        <th>Tanggal</th>
                                                        <th>Penulis</th>
                                                        <th>Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @php
                                                        $no = 1;
                                                    @endphp
                                                    @foreach ($posts as $post)
                                                        <tr>
                                                            <td>
                                                                {{ $no++ }}
                                                            </td>
                                                            <td>{{ $post->title }}</td>
                                                            <td>{{ \Carbon\Carbon::parse($post->date)->format('d-m-Y') }}
                                                            </td>
                                                            <td>{{ $post->username }}</td>
                                                            <td>
                                                                <div class="btn-group" role="group"
                                                                    aria-label="Basic example">
                                                                    <a href="{{ route('author.edit.post', $post->idpost) }}"
                                                                        type="button" class="btn btn-warning">Edit</a>
                                                                    <button id="delete" data-id="{{ $post->idpost }}"
                                                                        type="button" class="btn btn-danger">Hapus</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection

@push('addons-js')
    <script src="{{ asset('./dashboard-assets/library/datatables/media/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('./dashboard-assets/library/datatables.net-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('./dashboard-assets/library/datatables.net-select-bs4/js/select.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('./dashboard-assets/assets/js/page/modules-datatables.js') }}"></script>

    <script>
        $("#tables").DataTable({
            paging: true,
            lengthChange: true,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: true,
        });
    </script>

    <script>
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });

        //  Delete Data
        $("body").on("click", "#delete", function() {
            var id = $(this).data("id");

            Swal.fire({
                title: `Apakah Anda Ingin Menghapus?`,
                text: "Data yang berhubungan akan ikut terhapus!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Hapus",
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: "/admin/post/destroy/" + id,
                        dataType: "json",
                        type: "DELETE",
                        success: function(response) {
                            if (response.status == 200) {
                                success(response.message);
                                setTimeout(function() {
                                    window.location = "";
                                }, 1450);
                            } else {
                                failed(response.message);
                            }
                        },
                    });
                }
            });
        });
    </script>
@endpush
