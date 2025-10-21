var posts=["2025/10/21/hello-world/","2025/10/21/letnet/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };