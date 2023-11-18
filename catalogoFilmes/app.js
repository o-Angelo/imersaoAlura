var capaFilmes = [
    'https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-poster-11ago2014-01.jpg',
    'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg',
    'https://assets.cinebelasartes.com.br/wp-content/uploads/2019/08/cartaz_era_uma_vez_hollywood.jpg',
    'https://br.web.img3.acsta.net/c_310_420/pictures/23/05/08/10/29/0695770.jpg',
    'https://uploads.jovemnerd.com.br/wp-content/uploads/2020/01/turma-da-monica-licoes-cartaz-filme.jpg',
    'https://a-static.mlcdn.com.br/450x450/livro-o-mar-de-monstro-capa-filme/magazineluiza/084984700/7c948e71e058c23b3d3fcc7c151d60f0.jpg'
]

var nomeFilmes = [
    'Interestelar', 
    'Homem Aranha: Através do Aranhaverso', 
    'Era uma vez em Hollywood', 
    'Oppenheimer',
    'Turma da Mônica: Lições',
    'Percy Jackson e o Mar de Monstros'
]


for (let i = 0; i < capaFilmes.length; i++) {
    document.write('<div class="filme">')
    document.write('<img src= ' + capaFilmes[i] + '>');
    document.write('<p>' + nomeFilmes[i] + '</p>');
    document.write('</div>')
}