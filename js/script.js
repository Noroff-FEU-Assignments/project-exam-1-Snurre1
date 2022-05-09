const url =
  "https://thomashenriksen.no/foodcorner/wp-json/wp/v2/posts?acf_format=standard&per_page=100";
const container = document.querySelector(".flex-container");
async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    container.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      container.innerHTML += `<div><a href?"details.html?id=${result[i].id}
                                        <h2>${result[i].title.rendered}</h2>
                                        <img src="${result[i].featured_media}/>
                                        </div>`;
    }
  } catch (error) {}
}
getData();
