<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->integer('cash_in');
            $table->integer('cash_out');
            $table->integer('deposited');
            $table->integer('in_hand_cash');
            $table->string('remark', 100);
            $table->integer('site_id');
            $table->timestamp('record_date')->nullable();
            $table->foreignIdFor(\App\Models\User::class, 'user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
}
