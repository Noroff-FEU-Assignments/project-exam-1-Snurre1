const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://thomashenriksen.no/foodcorner/wp-json/wp/v2/posts/" + id;

const container = document.querySelector(".gallery");
const titleChange = document.querySelector("title");
async function blogData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    container.innerHTML = "";
    container.innerHTML += `
                            <div>
                              <h1>${result.title.rendered}</h1>
                            </div>
                              <div class="widthcontrol">${result.content.rendered}</div>
                              <div class="modal">
                              <img class="full-img" src="${result.featured_media_src_url}"alt="${result.title.rendered}"></img>
                            </div>`;
    titleChange.innerText = "";
    titleChange.innerText = `${result.title.rendered} | Foodcorner`;
    console.log(result.title.rendered);
    const preview = document.querySelector("img");
    const original = document.querySelector(".full-img");
    const modal = document.querySelector(".modal");
    preview.addEventListener("click", () => {
      modal.classList.add("open");
      original.classList.add("open");
    });
    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
      }
    });
  } catch (error) {
    ("An error has occured");
  }
}
blogData();
