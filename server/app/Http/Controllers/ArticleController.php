<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        if ($request->input('mediaType') == 'VIDEO') {
            $request->validate([
                'title' => 'required',
                'content' => 'required',
                'thumbnailURL' => 'required',
                'mediaType' => 'required',
                'mediaURL' => 'file|required',
                'leadStory' => 'required',
            ]);
        } else {
            $request->validate([
                'title' => 'required',
                'content' => 'required',
                'mediaType' => 'required',
                'mediaURL' => 'file|required',
                'leadStory' => 'required',
            ]);
        }
        //Make the media
        $media = $request->file('mediaURL')->hashName();
        $request->file('mediaURL')->move('upload', $media);
        //Make thumbnailURL
        if ($request->input('mediaType') == 'IMAGE') {
            $thumbnailURL = $media;
        } else if ($request->input('mediaType') == 'VIDEO') {//In React do that : If mediaType == VIDEO then make thumbnailURL required
            $thumbnailURL = $request->input('thumbnailURL');
        }

        $newArticle = Article::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'thumbnailURL' => $thumbnailURL,
            'mediaType' => $request->input('mediaType'),
            'mediaURL' => $media,
            'leadStory' => $request->input('leadStory')
        ]);
        return response($newArticle, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $upCount = Article::find($id);
        $upCount->viewCount = $upCount->viewCount + 1;
        $upCount->save();
        return Article::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'thumbnailURL' => 'required',
            'mediaType' => 'required',
            'mediaURL' => 'required',
            'leadStory' => 'required',
        ]);
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

    public function searchFunction(string $searchContent)
    {
        return Article::whereRaw("title like '%'||?||'%'", [$searchContent])->get(); // Search Data from $searchContent and
    }

    public function searchFunctionByTag(string $tag)//Doesn't work
    {
        $tags = Tag::find($tag);
        // get articles by tag with article_tag table
        return DB::table('article_tag')
            ->join('articles', 'article_tag.article_id', '=', 'articles.id')
            ->select('articles.*')
            ->where('article_tag.tag_id', '=', $tags->id);
    }

}
