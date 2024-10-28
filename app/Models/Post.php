<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'idpost',
        'title',
        'content',
        'date',
        'username',
    ];

    protected $table = 'post';

    public $timestamps = false;
}
