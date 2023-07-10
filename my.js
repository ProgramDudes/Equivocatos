fetch('https://raw.githubusercontent.com/ProgramDudes/JSONrepoPd/main/dogs.json')
    .then((response) => response.json())
    .then((json) => {
        const posts = json.posts;
    for (let i = 0; i < 6 && i < posts.length; i++) {
      nome = "nomepost"+(i+1);
      elemento = document.getElementById(nome);
      elemento.innerHTML = posts[i].title;
    }
    });
