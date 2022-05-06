const url = "https://thomashenriksen.no/foodcorner/wp-json/wp/v2/posts";

async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {}
}
getData();
