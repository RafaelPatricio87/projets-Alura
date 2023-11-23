let meusFilmes = {};

function adicionarFilme() {
  let filme = document.getElementById('filme').value;
  let trailer = document.getElementById('trailer').value;

  // Verifica se os campos estão preenchidos
  if (filme.trim() !== '' && trailer.trim() !== '') {
    // Adiciona o novo filme e trailer ao objeto
    meusFilmes[filme] = trailer;

    // Renderiza os filmes na tela
    renderizarFilmes();

    // Salva os dados no localStorage após adicionar um novo filme
    localStorage.setItem('meusFilmes', JSON.stringify(meusFilmes));
  } else {
    alert('Os campos precisam ser preenchidos');
  }

  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
}

function renderizarFilmes() {
  let listaFilmesElement = document.getElementById('listaFilmes');
  listaFilmesElement.innerHTML = '';

  for (let filme in meusFilmes) {
    if (meusFilmes.hasOwnProperty(filme)) {

      let div = document.createElement('div')
      div.classList.add('div')

      let novoLink = document.createElement('a');
      novoLink.href = meusFilmes[filme];
      novoLink.target = '_blank';

      let novaImagem = document.createElement('img');
      novaImagem.src = filme;


      let btn = document.createElement('button')
      btn.classList.add('btn')
      btn.innerText = 'Remover'

      
      btn.addEventListener('click',function () {
        let filmeRemover = this.parentNode.querySelector('img').src;
        delete meusFilmes[filmeRemover]
        
        renderizarFilmes()

        localStorage.setItem('meusFilmes', JSON.stringify(meusFilmes));

      })

      novoLink.appendChild(novaImagem);
      div.appendChild(novoLink);
      div.appendChild(btn)
      listaFilmesElement.appendChild(div);


    }

  }
}

// Tenta obter os dados do localStorage
const filmesSalvos = localStorage.getItem('meusFilmes');

// Se existirem dados salvos, carrega-os
if (filmesSalvos) {
  meusFilmes = JSON.parse(filmesSalvos);
}

// Renderiza os filmes na tela ao carregar a página
renderizarFilmes();


