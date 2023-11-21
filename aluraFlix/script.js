
function adicionarFilme(){
  let filmesUrl = document.getElementById('filme').value;
  let listaFilmes = document.getElementById('listaFilmes');
  let link = document.createElement('a');
  let botao = document.createElement('button');
  let imagem = document.createElement('img');
  let div = document.createElement('div')


    if(filmesUrl){
      botao.innerText = 'Remover'
      botao.classList.add('btn')
        imagem.src += filmesUrl;
          link.appendChild(imagem);
        
          // link.href = filmesUrl
          listaFilmes.appendChild(div)
      
            // Adicionar a imagem à listaFilmes
            div.appendChild(link);
            div.appendChild(botao)
          document.getElementById('filme').value = ''
        
        botao.addEventListener('click', (e) => {
          div.remove()
        })
      
    }
      
    }

