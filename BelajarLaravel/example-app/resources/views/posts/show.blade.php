<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog | Judul : {{  $post[1]  }}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link href="{{ asset('css/blog.css') }}" rel="stylesheet" crossorigin="anonymous">
   
</head>
<body>
    <div class="container">
    <article class="blog-post">
        <h2 class="blog-post-title mb-1">{{ $post[1] }}</h2>
        <p class="blog-post-meta">{{ date("d M Y H:i", strtotime($post[3])) }}</p>

        <p> {{ $post[2] }} </p>
    </article>
    <a href="{{ url("posts") }}"><- Kembali </a>
    </div>
</body>
</html>