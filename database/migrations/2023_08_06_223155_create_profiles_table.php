<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->text('bio')->nullable();
            $table->text('academic_records')->nullable();
            $table->text('resume')->nullable();
            $table->text('position_preference')->nullable();
            $table->text('institution_details')->nullable();
            $table->text('work_experience')->nullable();
            $table->text('skills')->nullable();
            $table->text('languages')->nullable();
            $table->text('hobbies')->nullable();
            $table->text('references')->nullable();

            $table->timestamps();

            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
