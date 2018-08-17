<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();

            $table->string('email')->unique();
            $table->string('password')->nullable();

            $table->string('gender')->nullable();
            $table->date('birthdate')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('mobile_number')->nullable();
            $table->string('phone_number')->nullable();

            $table->string('adress_1')->nullable();
            $table->string('address_2')->nullable();
            $table->string('address_3')->nullable();

            $table->string('city')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('country_code')->nullable();
            $table->string('country_name')->nullable();

            $table->rememberToken();
            $table->timestamps();
            $table->integer('is_active')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
