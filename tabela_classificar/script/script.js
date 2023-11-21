let jogadores = [
  {
   nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0 
  },
   {
  nome: "Kainan",
  vitorias: 0,
  empates:0,
  derrotas: 0,
  pontos: 0 
   },
  {
  nome: "Thiel",
  vitorias: 0,
  empates:0,
  derrotas: 0,
  pontos: 0
  }
]


exibirTela()
let exibirTabela = document.getElementById("tabelaJogadores");
function exibirTela(){
tabelaJogadores.innerHTML = ''
  
 for(let i = 0; i < jogadores.length; i++){
tabelaJogadores.innerHTML += `
      <tr>
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitorias}</td>
        <td>${jogadores[i].empates}</td>
        <td>${jogadores[i].derrotas}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>
      `;
    }
}
 function adicionarVitoria(jogador){
  jogadores[jogador].vitorias++
  jogadores[jogador].pontos += 3
   exibirTela()
  console.log(jogador)
}
function adicionarEmpate(jogador) {
  jogadores[jogador].empates++
  jogadores[jogador].pontos++
  exibirTela()
}
function adicionarDerrota(jogador) {
  jogadores[jogador].derrotas++
  exibirTela()
}