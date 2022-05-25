const url =
  "https://thomashenriksen.no/foodcorner/wp-json/wp/v2/posts?&acf_format=standard&per_page=100";
const container = document.querySelector(".blog-container");
const btn = document.querySelector(".viewbtn");
async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    container.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      if (i === 10) break;
      container.innerHTML += `<div class="food-container"><a href="blogspecific.html?id=${result[i].id}">
                                      <div><h2>${result[i].title.rendered}</h2></div>
                                        <div><img src="${result[i].featured_media_src_url}" alt="${result[i].title.rendered}"/></div></a>
                                        </div>`;
    }
    btn.onclick = function () {
      container.innerHTML = "";
      btn.style.display = "none";
      for (let i = 0; i < result.length; i++) {
        container.innerHTML += `<div class="food-container"><a href="blogspecific.html?id=${result[i].id}">
                                      <div><h2>${result[i].title.rendered}</h2></div>
                                        <div><img src="${result[i].featured_media_src_url}" alt="${result[i].title.rendered}"/></div></a>
                                        </div>`;
      }
    };
  } catch (error) {
    ("An error has occured");
  }
}
getData();
