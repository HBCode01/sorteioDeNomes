// Variáveis globais
let listaDeAmigos = []; // Armazena nomes dos amigos
let listaDeAmigosSorteados = []; // Armazena amigos sorteados
let amigosSorteados = 0; // Contador de amigos sorteados

// Função para adicionar amigo
function adicionarAmigo() {
  // Pega o valor do campo de texto
  const nome = document.getElementById('amigo').value.trim();
  
  // Verifica se o campo está vazio
  if (nome === "") {
    alert("Você precisa adicionar um nome!"); // Mostra alerta
    return; // Sai da função
  }
  
  // Verifica se o nome já existe na lista
  if (!listaDeAmigos.includes(nome)) {
    listaDeAmigos.push(nome); // Adiciona nome à lista
    document.getElementById('amigo').value = ''; // Limpa campo de texto
    exibirNomes(); // Chama função para exibir nomes
  } else {
    alert("Nome já existente!"); // Mostra alerta
  }
}

// Função para exibir nomes dos amigos
function exibirNomes() {
  // Pega a div para listar amigos
  const listaAmigos = document.getElementById('listaAmigos');
  
  // Cria HTML para listar nomes
  const html = listaDeAmigos.map((nome) => `<li>${nome}</li>`).join('');
  
  // Exibe a lista de nomes
  listaAmigos.innerHTML = html;
}

// Função para sortear amigo
function sortearAmigo() {
  // Verifica se há amigos para sortear
  if (listaDeAmigos.length === 0 && listaDeAmigosSorteados.length === 0) {
    alert("Adicione amigos antes de sortear!"); // Mostra alerta
    document.getElementById('adicionar-amigo').disabled = false; // Habilita botão Adicionar
    return; // Sai da função
  }
  
  // Desabilita botão Adicionar
  document.getElementById('adicionar-amigo').disabled = true;
  
  // Verifica se todos amigos foram sorteados
  if (listaDeAmigos.length === 0) {
    // Exibe mensagem
    resultado.innerHTML = 'Todos os amigos já foram sorteados!';
    
    // Altera botão para Reiniciar
    document.getElementById('sortear-amigo').innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Reiniciar';
    document.getElementById('sortear-amigo').setAttribute('onclick', 'reiniciarSorteio()');
    document.getElementById('adicionar-amigo').disabled = true; // Mantém botão Adicionar desabilitado
    return; // Sai da função
  }
  
  // Sorteia um amigo
  const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
  
  // Adiciona amigo sorteado à lista
  listaDeAmigosSorteados.push(amigoSorteado);
  
  // Remove amigo sorteado da lista original
  listaDeAmigos = listaDeAmigos.filter((amigo) => amigo !== amigoSorteado);
  
  // Exibe informações no console
  console.log(`Amigo secreto sorteado: ${amigoSorteado}`);
  console.log(listaDeAmigos);
  console.log(listaDeAmigosSorteados);
  
  // Chama função para exibir sorteio
  exibirSorteio(amigoSorteado);
  amigosSorteados++; // Incrementa contador
}

// Função para exibir sorteio
function exibirSorteio(amigoSorteado) {
  // Pega a div para exibir resultado
  const resultado = document.getElementById('resultado');
  
  // Exibe o amigo sorteado
  resultado.innerHTML = `Amigo secreto sorteado: ${amigoSorteado}`;
}

// Função para reiniciar sorteio
function reiniciarSorteio() {
    // Reseta variáveis
    listaDeAmigos = [];
    listaDeAmigosSorteados = [];
    amigosSorteados = 0;
    
    // Habilita botão Adicionar
    document.getElementById('adicionar-amigo').disabled = false;
    
    // Limpa campos
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';
    
    // Restaura botão Sortear
    document.getElementById('sortear-amigo').innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Sortear amigo';
    document.getElementById('sortear-amigo').setAttribute('onclick', 'sortearAmigo()');
    }