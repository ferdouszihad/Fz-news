const loadDetail = async (id) => {
  let url = `https://openapi.programming-hero.com/api/news/${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayDetail(data.data[0]);
  } catch (error) {
    console.log(error);
  }
};

const displayDetail = (post) => {
  const postBody = document.getElementById("modal-body");
  postBody.innerHTML = ` 
    <div class="card mb-3 border-0 animate__animated animate__fadeInDown">
        <img src="${
          post.image_url
        }" class="card-img-top animate__animated animate__fadeInUp" alt="...">
        <div class="card-body ps-0">
            <h5 class="card-title pb-2 border-bottom">${post.title}</h5>
            <p class="card-text py-3" style='text-align:justify'>${
              post.details
            }</p>
            
        </div>
        
        <div class="card-foot d-flex justify-content-between ">
            <div class="author d-flex justify-content-between ">
                <div class="author-img">
                    <img src="${
                      post.author.img
                    }" class="rounded-circle d-block" alt=""
                        srcset="" width="40">
                </div>

                <div class="author-info ps-3">
                    <small class="name d-block">${
                      post.author.name == null || post.author.name.length == 0
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
                    : post.total_view + "K"
                }

            </div>
            
        </div>
    </div>

  `;
  console.log(post);
};
