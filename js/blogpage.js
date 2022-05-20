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
                                        <div><img src="${result[i].featured_media_src_url}"/></div></a>
                                        </div>`;
    }
    btn.onclick = function () {
      container.innerHTML = "";
      btn.style.display = "none";
      for (let i = 0; i < result.length; i++) {
        container.innerHTML += `<div class="food-container"><a href="blogspecific.html?id=${result[i].id}">
                                      <div><h2>${result[i].title.rendered}</h2></div>
                                        <div><img src="${result[i].featured_media_src_url}"/></div></a>
                                        <button class="btn-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"
            />
          </svg>
        </button>
        <button class="btn-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path
              d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"
            />
          </svg>
        </button>
                                        </div>`;
      }
    };
  } catch (error) {
    ("An error has occured");
  }
}
getData();
