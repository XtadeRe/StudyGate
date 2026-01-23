<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Institution extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'description',
        'country',
        'city',
        'type',
        'image_url',
        'rating',
        'featured',
        'programs',
        'price_from',
        'price_to',
        'currency',
        'views'
    ];

    public function bid() {
        return $this->hasMany(Bid::class);
    }

    protected $casts = [
        'featured' => 'boolean',
        'rating' => 'float',
        'price_from' => 'float',
        'price_to' => 'float',
        'views' => 'integer',
        'programs' => 'array'
    ];
}
