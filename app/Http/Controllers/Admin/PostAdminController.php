<?php

namespace App\Http\Controllers\Admin;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PostAdminController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('date', 'asc')->get();

        $data = [
            'active' => 'post',
            'posts' => $posts
        ];

        return view('admin.post.index', $data);
    }

    public function create()
    {
        $data = [
            'active' => 'post',
        ];

        return view('admin.post.create', $data);
    }

    public function store(Request $request)
    {
        $user = session('user');

        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $dateNow = date('Y-m-d');

        Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'date' => $dateNow,
            'username' => $user->username
        ]);

        return to_route('admin.post')->with('success', 'Berhasil membuat post');
    }

    public function edit($id)
    {
        $post = Post::where('idpost', $id)->firstorfail();

        $data = [
            'post' => $post,
            'active' => 'post',
        ];

        return view('admin.post.edit', $data);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        Post::where('idpost', $id)->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return to_route('admin.post')->with('success', 'Berhasil mengubah post');
    }

    public function destroy($id)
    {
        try {
            $post = Post::where('idpost', $id)->delete();

            // $post->delete();

            return response()->json([
                'message' => 'Berhasil Menghapus',
                'status' => 200,
                'error' => false
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Gagal Menghapus' . $e,
                'code' => 500,
                'error' => $e->getMessage()
            ]);
        }
    }
}
