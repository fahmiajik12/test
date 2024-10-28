<?php

namespace Database\Seeders;

use App\Models\Account;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Account::create([
            'username' => 'admin',
            'password' => Hash::make('admin'),
            'name' => 'admin',
            'role' => 'admin'
        ]);

        Account::create([
            'username' => 'author',
            'password' => Hash::make('author'),
            'name' => 'author',
            'role' => 'author'
        ]);
    }
}
