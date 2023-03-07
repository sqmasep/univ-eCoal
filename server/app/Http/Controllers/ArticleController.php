<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Article::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newArticle = Article::create([
            'title'=>$request->input('title'),
            'content'=>$request->input('content'),
            'thumbnailURL'=>$request->input('thumbnailURL'),
            'mediaType'=>$request->input('mediaType'),
            'mediaURL'=>$request->input('mediaURL'),
            'leadStory'=>$request->input('leadStory')
        ]);
        return response($newArticle, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Article::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $articleUpdate = Article::find($id);
        $articleUpdate->title = $request->input('title');
        $articleUpdate->content = $request->input('content');
        $articleUpdate->thumbnailURL = $request->input('thumbnailURL');
        $articleUpdate->mediaType = $request->input('mediaType');
        $articleUpdate->mediaURL = $request->input('mediaURL');
        $articleUpdate->leadStory = $request->input('leadStory');
        $articleUpdate->save();
        return response($articleUpdate, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $articleDelete = Article::find($id);
        $articleDelete->delete();
        return response(null, 204);
    }
}