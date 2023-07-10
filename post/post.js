const params = new URLSearchParams(window.location.search);
const id = params.get('post');
fetch('https://raw.githubusercontent.com/ProgramDudes/JSONrepoPd/main/dogs.json')
    .then((response) => response.json())
    .then((json) => {
        const posts = json.posts;
      elemento = document.getElementById("titulodopost");
      elemento.innerHTML = posts[id].title;
      elemento = document.getElementById("imagemdopost");
      elemento.src = posts[id].photo;
      elemento = document.getElementById("textodopost");
      elemento.innerHTML = posts[id].body;
    });