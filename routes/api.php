<?php

Route::group([

    'middleware' => 'api',

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('get-user', 'AuthController@get_auth_user');
    Route::post('recover', 'PasswordResetController@recover');
    Route::post('reset-password', 'PasswordResetController@change_password');


});
