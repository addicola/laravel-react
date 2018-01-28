<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
})->name('home');


Route::group(['middleware' => ['auth']], function () {
    
    // User Route
    Route::get('/profile', 'HomeController@index')->name('profile');

    // Post Route
    Route::get('/posts/share', 'HomeController@index')->name('create-post');
    
    Route::get('/posts/{id}', 'HomeController@index');

});


Auth::routes();
