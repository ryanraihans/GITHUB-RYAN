<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    function index() {
        echo "BURGIR";
    }

    function world_message(){
        echo "Bangor";
    }
}
