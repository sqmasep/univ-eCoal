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
        $article5 = Article::create([
            'title' => 'Hubert Félix Thiéfaine - His new album coming soon!',
            'content' => '<h1>Hello from ecoal yeah again</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => 'https://www.letelegramme.fr/images/2019/05/29/hubert-felix-thiefaine-revient-d-une-tournee-anniversaire_4599986_1000x526.jpg',
            'mediaType' => 'AUDIO',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false,
        ]);
        $article6 = Article::create([
            'title' => 'Тима Белорусских: his own style revives the russian pop',
            'content' => '<h1>Hello from ecoal yeah again</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => 'https://cdns-images.dzcdn.net/images/artist/09b3342dacf5f182a547b346e6341ecb/500x500.jpg',
            'mediaType' => 'AUDIO',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false,
        ]);
        $article4 = Article::create([
            'title' => 'Concert of TheWeeknd: a great show',
            'content' => '<h1>Un article test encore</h1><p>hello test <strong>Lens</strong>. notEnjoy !</p>',
            'thumbnailURL' => 'https://dynamicmedia.livenationinternational.com/d/x/x/527f6551-d55c-4c97-be2b-90a38c88057e.jpg?auto=webp&width=1507.2',
            'mediaType' => 'AUDIO',
            'mediaURL' => 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            'leadStory' => false,
        ]);
        $article = Article::create([
            'title' => 'Welcome to ecoal23',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => 'https://backoffice.industrie-online.com/api/v1/image/41747?w=525&h=525',
            'mediaType' => 'IMAGE',
            'mediaURL' => '/ecoal.jpg',
            'leadStory' => false,
        ]);
        $article3 = Article::create([
            'title' => 'Cenza, a new brilliant french rapper',
            'content' => '<h1>Un article test encore</h1><p>hello test <strong>Lens</strong>. notEnjoy !</p>',
            'thumbnailURL' => 'https://images.genius.com/998644da581f3ff8ee182dd0641d1c5f.608x608x1.jpg',
            'mediaType' => 'AUDIO',
            'mediaURL' => 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            'leadStory' => false,
        ]);
        $article2 = Article::create([
            'title' => 'Rust, a programming language that can make music',
            'content' => '<h1>Un article test</h1><p>hello test <strong>Lens</strong>. notEnjoy !</p>',
            'thumbnailURL' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png',
            'mediaType' => 'AUDIO',
            'mediaURL' => 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            'leadStory' => false,
        ]);

        $tag1 = Tag::create([
            'name' => 'pop',
            'image' => 'https://pyxis.nymag.com/v1/imgs/3a3/b1f/2141226b8ab1ae07afe4b541ee0d2b0825-11-yic-pop-essay.rhorizontal.w700.jpg']
        );
        $tag2 = Tag::create([
            'name' => 'jazz',
            'image'=>'https://www.gannett-cdn.com/-mm-/b3c10c2535284d4b509bc078a90a370e2e2c2fca/c=0-741-3913-3683/local/-/media/2015/07/16/MIGroup/Lansing/635726564289570272-ThinkstockPhotos-486813379-1-.jpg?width=2560'
        ]);
        $tag3 = Tag::create([
            'name' => 'rap',
            'image'=>'https://miro.medium.com/v2/format:webp/1*AYP7FXeLXeE-XWHBxqNjqg.jpeg'
        ]);
        $tag4 = Tag::create([
            'name' => 'metal',
            'image'=>'https://f4.bcbits.com/img/a2010714713_5.jpg'
        ]);

        $article->tags()->attach([$tag1->id, $tag2->id]);
        $article3->tags()->attach([$tag3->id]);
        $article->tags()->attach([$tag1->id]);

    }
}
