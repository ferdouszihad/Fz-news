const loadPost = async (id, name) => {
  console.log(name);
  toggleSpinner(true);
  let url = `https://openapi.programming-hero.com/api/news/category/${id}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayPost(data.data, name);
  } catch (error) {
    console.log(error);
  }
};
const displayPost = (posts, name) => {
  displayCount(posts.length, name);
  const postBox = document.getElementById("post-container");
  const noFoundMsg = document.getElementById("Nothing-found-msg");
  postBox.innerHTML = ``;
  if (posts.length == 0) {
    toggleSpinner(false);
    noFoundMsg.classList.remove("d-none");
  } else {
    noFoundMsg.classList.add("d-none");
  }
  posts.forEach((post) => {
    let article = document.createElement("article");
    article.innerHTML = `

    <div class="card mb-3 p-4 border-0 shadow">
        <div class="row g-0">
            <div class="col-md-3">
                <img src="${
                  post.thumbnail_url
                }" class="img-fluid rounded-start w-100" alt="...">
            </div>

            <div class="col-md-9">
                <div class="card-body h-100  d-flex flex-column justify-content-between ">

                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.details.slice(0, 300)}...</p>

                    <div class="card-foot d-flex justify-content-between">
                        <div class="author d-flex justify-content-between">
                            <div class="author-img">
                                <img src="${
                                  post.author.img
                                }" class="rounded-circle d-block" alt=""
                                    srcset="" width="40">
                            </div>

                            <div class="author-info ps-3">
                                <small class="name d-block">${
                                  post.author.name == null ||
                                  post.author.name.length == 0
                                    ? "No Data Found"
                                    : post.author.name
                                }</small>
                                <small class="date d-block">${
                                  post.author.published_date == null ||
                                  post.author.published_date.length == 0
                                    ? "No Date Found"
                                    : post.author.published_date
                                }</small>

                            </div>

                        </div>
                        <div class="view-count border border-1 rounded-2 py-1 px-3">
                            <i class="fa-regular fa-eye pe-2"></i>${
                              post.total_view == null
                                ? "no data found"
                                : post.total_view
                            }

                        </div>
                        <button class="btn btn-primary">Read more <i
                                class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    
    
    
    `;
    postBox.append(article);
    toggleSpinner(false);
    //console.log(post);
  });
};

const displayCount = (value, name) => {
  const postCount = document.getElementById("post-count");
  postCount.innerHTML = `<b>${value}</b>  News Found in the <b class="text-primary">${name}</b> catagory`;
};

loadPost("04", "Sports");
