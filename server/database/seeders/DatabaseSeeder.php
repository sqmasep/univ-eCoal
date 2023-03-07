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
            'name'=>'Hugo',
            'email'=> 'hugodemont@hotmail.fr',
            'password'=>'undeuxtrois',
            'role'=>'ADMIN',
        ]);

        $article = Article::create([
            'title' => 'Welcome to ecoal23',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => '/ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false
        ]);

        $tag1 = Tag::create(['name' => 'ecoal23']);
        $tag2 = Tag::create(['name' => 'react']);

        $article->tags()->attach([$tag1->id, $tag2->id]);

    }
}
