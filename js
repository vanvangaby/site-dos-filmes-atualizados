const filmes = [
    {
        titulo: "A Origem",
        descricao: "Um ladrão invade os sonhos das pessoas para roubar segredos.",
        imagem: "https://image.tmdb.org/t/p/w500/tAXARVreJnWfoANIHASmgYk4SB0.jpg"
    },
    {
        titulo: "Batman: O Cavaleiro das Trevas",
        descricao: "Batman enfrenta o Coringa, que causa o caos em Gotham.",
        imagem: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        titulo: "Interestelar",
        descricao: "Exploradores viajam através de um buraco de minhoca para salvar a humanidade.",
        imagem: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
        titulo: "Matrix",
        descricao: "Um hacker descobre que a realidade é uma simulação.",
        imagem: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    }
];

function mostrarFilme(index) {
    const filmeImg = document.getElementById('filme-img');
    const filmeTitulo = document.getElementById('filme-titulo');
    const filmeDescricao = document.getElementById('filme-descricao');

    filmeImg.src = filmes[index].imagem;
    filmeTitulo.textContent = filmes[index].titulo;
    filmeDescricao.textContent = filmes[index].descricao;
}


