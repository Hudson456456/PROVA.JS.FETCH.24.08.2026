const form = document.querySelector('#form-livro');
const listaEl = document.querySelector('#lista-livros');
const mensagemErro = document.querySelector('#mensagem-erro');

async function carregarLivros() {
  try {
    const response = await fetch("/livros");

    if (!response.ok) {
      mostrarErro('Erro ao buscar livros');
      return;
    }

    const livros = await response.json();

    renderizarLivros(livros);
    return;
  } catch (error) {
    mostrarErro(error.message);
  }
}

function mostrarErro(msg) {
  mensagemErro.textContent = msg;
  mensagemErro.classList.remove('oculto');
}

// ----- TAREFA 1: renderizar os livros na tela -----
function renderizarLivros(livros) {
  // TAREFA: limpar o conteúdo atual de listaEl
  // TAREFA: para cada livro, criar um <li> mostrando
  //       título, autor, ano e status (Disponível/Emprestado)
  // TAREFA: adicionar dentro do <li> um botão "Emprestar" ou "Devolver"
  //       (texto muda conforme livro.disponivel) que chama alternarStatus(livro)
  // TAREFA: adicionar dentro do <li> um botão "Remover" que chama removerLivro(livro.id)
  // DICA: use livro.disponivel === 1 ? 'disponivel' : 'indisponivel' para a classe CSS
}

// ----- TAREFA 2: cadastrar um novo livro (POST) -----
form.addEventListener('submit', async (event) => {
  // TAREFA: capturar os valores de titulo, autor e ano dos inputs
  // TAREFA: fazer um fetch POST para a rota com method, headers
  //       (Content-Type: application/json) e body (JSON.stringify)
  // TAREFA: se a resposta não for OK, chamar mostrarErro
  // TAREFA: se der certo, limpar o formulário (form.reset()) e chamar
  //       carregarLivros() de novo para atualizar a lista
});

// ----- TAREFA 3: remover um livro (DELETE) -----
async function removerLivro(id) {
  // TAREFA: fazer fetch DELETE para a rota DELETE
  // TAREFA: tratar erro com a função mostrarErro em caso de falha
  // TAREFA: se der certo, chamar carregarLivros() para atualizar a lista
}

// ----- TAREFA 4: emprestar / devolver um livro (PUT) -----
async function alternarStatus(livro) {
  // TAREFA: descobrir o novo valor de "disponivel" (inverter o atual: 1 vira 0, 0 vira 1)
  // TAREFA: fazer fetch PUT para a rota PUT enviando
  //       { disponivel: novoValor } no body, com headers corretos
  //       OBS: A rota PUT precisa ser criada no back-end
  // TAREFA: tratar erro com a função mostrarErro
  // TAREFA: se der certo, chamar carregarLivros() para atualizar a lista
}

carregarLivros();
