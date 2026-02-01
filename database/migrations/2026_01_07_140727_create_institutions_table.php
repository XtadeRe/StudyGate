<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('institutions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('country');
            $table->string('city');
            $table->string('type');
            $table->string('image_url')->nullable();
            $table->decimal('rating', 3, 1)->default(0);
            $table->boolean('featured')->default(false);
            $table->json('programs')->nullable();
            $table->decimal('price_from', 10, 2)->nullable();
            $table->decimal('price_to', 10, 2)->nullable();
            $table->string('currency')->default('USD');
            $table->integer('views')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->index(['country', 'type']);
            $table->index('rating');
            $table->index('featured');
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('institutions');
    }
};
