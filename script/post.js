const loadPost = async (id) => {
  let url = `https://openapi.programming-hero.com/api/news/category/${id}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
