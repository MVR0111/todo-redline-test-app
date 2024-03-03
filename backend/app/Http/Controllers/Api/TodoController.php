<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TodoRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        return TodoResource::collection(Todo::all());
    }

    public function store(TodoRequest $request)
    {
        $todo = Todo::create(['text' => $request->text]);

        return new TodoResource($todo);
    }

    public function destroy(Todo $todo)
    {
        $todo->delete();
        return response()->json(null, 204);
    }
}
