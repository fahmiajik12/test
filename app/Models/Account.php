<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;


class Account extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'account';

    protected $fillable = [
        'username',
        'password',
        'name',
        'role'
    ];

    public $timestamps = false;
}
