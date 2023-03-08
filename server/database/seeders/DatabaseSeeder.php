<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $user = User::create([
            'name'=>'HugoAdmin',
            'email'=> 'hugodemontadmin@hotmail.fr',
            'password'=>'undeuxtrois',
            'role'=>'ADMIN',
        ]);
        $user = User::create([
            'name'=>'Hugo',
            'email'=> 'hugodemont@hotmail.fr',
            'password'=>'undeuxtrois',
            'role'=>'USER',
        ]);
        $article = Article::create([
            'title' => 'Welcome to ecoal23',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'IMAGE',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false,
        ]);
        $article2 = Article::create([
            'title' => 'Welcome to routes landsssss',
            'content' => '<h1>Un article test</h1><p>hello test <strong>Lens</strong>. notEnjoy !</p>',
            'thumbnailURL' => '/ecoal.mp4   ',
            'mediaType' => 'VIDEO',
            'mediaURL' => '/ecoal.mp4',
            'leadStory' => false,
        ]);

        $tag1 = Tag::create(['name' => 'ecoal23']);
        $tag2 = Tag::create(['name' => 'react']);

        $article->tags()->attach([$tag1->id, $tag2->id]);

    }
}
