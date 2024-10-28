@extends('author.layout.app')

@section('title')
    Edit Post
@endsection

@push('addons-css')
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
                                <a href="{{ route('admin.post') }}" class="btn btn-warning">Kembali</a>
                            </div>
                            <div class="card-body">
                                <form action="{{ route('admin.update.post', $post->idpost) }}" method="POST">
                                    @csrf
                                    @method('PUT')
                                    <div class="row">
                                        <div class="col-12">
                                            <label for="">Judul</label>
                                            <input type="text" name="title"
                                                class="form-control @error('title') is-invalid @enderror"
                                                value="{{ old('title', $post->title) }}" id="" required>
                                            @error('title')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        <div class="col-12">
                                            <label for="">Konten</label>
                                            <textarea name="content" id="content" required>{{ old('content', $post->content) }}</textarea>
                                            @error('content')
                                                <span style="color: red">
                                                    {{ $message }}
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-3">
                                            <button type="submit" class="btn btn-success">Ubah</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection

@push('addons-js')
    <script src="{{ asset('./ckeditor/ckeditor.js') }}"></script>

    <script>
        var editor = CKEDITOR.replace('content');

        editor.on('required', function(evt) {
            alert('Content is required.');
            evt.cancel();
        });
    </script>
@endpush
