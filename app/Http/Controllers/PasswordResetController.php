<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

use App\Models\User;
use App\Mail\PasswordResetMail;
use App\Http\Requests\ChangePasswordRequest;


class PasswordResetController extends Controller
{
    public function recover(Request $request)
    {
        if($this->is_email_valid($request->email))
        {
            $this->send_reset_link($request->email);
            return $this->create_response();
        }
        return $this->create_response(FALSE);
    }

    private function is_email_valid($email)
    {
        return !!User::where('email', $email)->first();
    }

    private function send_reset_link($email)
    {
        $token = $this->generate_token($email);
        Mail::to($email)->send(new PasswordResetMail($token));
    }

    private function generate_token($email)
    {
        $token = User::generatePasswordResetToken($email);
        return $token;
    }

    private function create_response($success=TRUE)
    {
        if($success){
            return response()->json(['data'=>'Password reset link sent. Please check your email.'], Response::HTTP_OK);
        }
        return response()->json(['error'=>'We cant find an account with this credentials. Please make sure you entered the right information.'],Response::HTTP_NOT_FOUND);
    }

    public function change_password(ChangePasswordRequest $request)
    {
        $token = $this->get_password_reset($request);
        return $token->count() > 0 ?  $this->update_password($token,$request->password) :  response()->json(['error'=>'Password reset token not found.'],Response::HTTP_NOT_FOUND);
    }

    private function get_password_reset($request)
    {
        return User::getPasswordReset($request->reset_token);
    }

    private function update_password($token,$password)
    {
        $user = User::where(['email'=>$token->first()->email]);
        $user->update(['password'=>$password]);
        $token->delete();
        return response()->json(['data'=>'Change password successful'], Response::HTTP_OK);
    }
}
