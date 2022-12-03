const postsArr = []
const title = document.getElementById("title-blog")
const body = document.getElementById("body-blog")

function renderPosts(){
  let html = ""
  for (let post of postsArr) {
      html += `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr />
      `
  }
  document.getElementById("blog-list").innerHTML = html
}
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      postsArr = data.slice(0, 5)
      renderPosts()
    })

function formBtn(event){
  event.preventDefault()
  const title = document.getElementById("title-blog")
  const body = document.getElementById("body-blog")

  const data = {
    title: title.value,
    body: body.value
  }
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}

fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(res => res.json())
    .then(post => {
       postsArr.unshift(post)
       renderPosts()
       title.value = ""
       body.value = ""
  })
      
}

document.getElementById("form-btn").addEventListener('submit', formBtn)