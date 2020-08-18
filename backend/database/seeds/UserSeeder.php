<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('profiles')->insert(['description' => 'Cliente','level' => null]);
        DB::table('profiles')->insert(['description' => 'Admin','level' => 1]);
        DB::table('users')->insert([
                'nome' => 'Usuario Admin',
                'perfil_id' => 2,
                'email' => 'admin@email.com',
                'email_verified_at' => now(),
                'senha' => bcrypt('12345678'), 
                'remember_token' => Str::random(10),
                ]);
    }
}
