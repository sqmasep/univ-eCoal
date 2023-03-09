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
            'name' => 'HugoAdmin',
            'email' => 'hugodemontadmin@hotmail.fr',
            'password' => 'undeuxtrois',
            'role' => 'ADMIN',
        ]);
        $user = User::create([
            'name' => 'Hugo',
            'email' => 'hugodemont@hotmail.fr',
            'password' => 'undeuxtrois',
            'role' => 'USER',
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
            'thumbnailURL' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png',
            'mediaType' => 'VIDEO',
            'mediaURL' => '/ecoal.mp4',
            'leadStory' => false,
        ]);

        $tag1 = Tag::create([
            'name' => 'pop',
            'image' => 'https://backoffice.industrie-online.com/api/v1/image/41747?w=525&h=525']
        );
        $tag2 = Tag::create([
            'name' => 'jazz',
            'image'=>'https://cdn.shopify.com/s/files/1/1530/4015/products/IMG_0008_1090x.jpg?v=1670194640'

        ]);

        $article->tags()->attach([$tag1->id, $tag2->id]);
        $article->tags()->attach([$tag1->id]);

    }
}
