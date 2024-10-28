<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = Account::get();

        $data = [
            'active' => 'user',
            'users' => $users
        ];

        return view('admin.user.index', $data);
    }

    public function create()
    {
        $data = [
            'active' => 'user',
        ];

        return view('admin.user.create', $data);
    }

    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:account',
            'name' => 'required',
            'role' => 'required',
            'password' => 'required'
        ]);

        Account::create([
            'username' => $request->username,
            'name' => $request->name,
            'role' => $request->role,
            'password' => Hash::make($request->password)
        ]);

        return to_route('admin.user')->with('success', 'Berhasil menambah user');
    }

    public function edit($username)
    {
        $user = Account::where('username', $username)->first();

        $data = [
            'active' => 'user',
            'user' => $user
        ];

        return view('admin.user.edit', $data);
    }

    public function update(Request $request, $username)
    {
        $request->validate([
            'username' => 'required',
            'name' => 'required',
            'role' => 'required',
        ]);

        $data = [
            'username' => $request->username,
            'name' => $request->name,
            'role' => $request->role,
        ];

        if ($request->password) {
            $data['password'] = Hash::make($request->password);
        }

        Account::where('username', $username)->update($data);

        return to_route('admin.user')->with('success', 'Berhasil mengubah password');
    }

    public function destroy($username)
    {
        try {
            Account::where('username', $username)->delete();

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
