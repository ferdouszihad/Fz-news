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
    li.classList.add(
      "py-2",
      "px-3",
      "border",
      "border-2",
      "rounded-pill",
      "border-muted"
    );
    li.innerHTML = `
    <a href="#" onclick="loadPost('${catagory.category_id}')" id='c${catagory.category_id}'class="text-decoration-none text-muted ">${catagory.category_name}</a>
    `;
    catagorySection.append(li);
  });
};
loadCatagory();
