function adicionarFilme() {
    var elementoListaFilmes = document.getElementById('listaFilmes')

    var filmeName = document.getElementById('filmeName').value
    var filmeImg = document.getElementById('filmeImg').value
    var filmeTrailer = document.getElementById('filmeTrailer').value

    if (filmeImg.endsWith('.jpg') || filmeImg.endsWith('.png')) {
        elementoListaFilmes.innerHTML +=
            '<div class="Filme">' +
            '<p>' + filmeName + '</p>' +
            '<a href=' + filmeTrailer + ' target="_blank">' +
            '<img src=' + filmeImg + '>' +
            '</a>' +
            '</div>'
    }
    document.getElementById('filmeName').value = null
    document.getElementById('filmeImg').value = null
    document.getElementById('filmeTrailer').value = null
}