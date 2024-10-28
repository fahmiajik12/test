<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post; // Include the Post model
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardAdminController extends Controller
{
    public function index()
    {

        $posts = Post::all();

        $data = [
            'active' => 'dashboard',
            'posts' => $posts
        ];

        return view('admin.dashboard.index', $data);
    }
}
