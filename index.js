fetch('https://apis.scrimba.com/jsonplaceholder/posts')
.then(response => response.json())
.then(data => {
    const postArr = data.slice(0, 5)
    for(post of postArr){
        document.getElementById("blog-list").innerHTML +=
         `
          <h1>${post.title}</h1>
          <h3>${post.body}</h3>
          <hr/>
        `
    }
})
