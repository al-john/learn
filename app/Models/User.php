<?php

namespace App\Models;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;

use Carbon\Carbon;


class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'users';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'middle_name', 'last_name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

        // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function set_password($value)
    {
        return bcrypt($value);
    }
    
    public static function generatePasswordResetToken($email)
    {
        $token = DB::table('password_resets')->where('email', $email)->first();

        if ($token) {
            return $token->token;
        }
        $token = str_random(30);
        DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token,
                'created_at' => Carbon::now()
            ]);

        return $token;
    }

    public static function getPasswordReset($token)
    {
        return DB::table('password_resets')->where('token', $token);
    }
    
}
