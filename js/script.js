const url =
  "https://thomashenriksen.no/foodcorner/wp-json/wp/v2/posts?&acf_format=standard&per_page=100";
const container = document.querySelector(".flex-container");
async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    container.innerHTML = "";
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      container.innerHTML += `<div class="food-container"><a href="blogspecific.html?id=${result[i].id}">
                                      <h2>${result[i].title.rendered}</h2>
                                      <img src="${result[i].featured_media_src_url}"alt="${result[i].title.rendered}"/></a>
                                      <button><a href="blogspecific.html?id=${result[i].id}">View more</a></button>
                                      </div>`;
    }
  } catch (error) {
    ("An error has occured");
  }
}
getData();
