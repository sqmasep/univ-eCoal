<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Tag::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newTag = Tag::create([
            'name'=>$request->input('name'),
        ]);
        return response($newTag, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Tag::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tagUpdate = Tag::find($id);
        $tagUpdate->name = $request->input('name');
        return response($tagUpdate, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tagDelete = Tag::find($id);
        $tagDelete->delete();
        return response(null, 204);
    }
}
