fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

function formBtn(event){
  event.preventDefault()
  const title = document.getElementById("title-blog").value
  const body = document.getElementById("body-blog").value

  const data = {
    title: title,
    body: body
  }
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res => res.json())
    .then(data => console.log(data))
}

document.getElementById("form-btn").addEventListener('submit', formBtn)