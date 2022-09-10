const loadCatagory = async () => {
  let url = "https://openapi.programming-hero.com/api/news/categories";
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayCatagory(data.data.news_category);
  } catch (error) {
    console.log(error);
  }
};

const displayCatagory = (catagories) => {
  const catagorySection = document.getElementById("catagory-wrap");
  catagories.forEach((catagory) => {
    //console.log(catagory);
    const li = document.createElement("li");

    li.innerHTML = ` 
    <a href="#header-down" onclick="loadPost('${catagory.category_id}','${catagory.category_name}')" id='c${catagory.category_id}'class=" catagory-link text-decoration-none text-muted py-2 px-3 border border-1 rounded-pill border-muted bg-white">${catagory.category_name}</a>
    `;
    catagorySection.append(li);
  });
};
loadCatagory();
