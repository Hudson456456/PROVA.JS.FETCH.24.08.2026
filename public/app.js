const form = document.querySelector('#form-livro');
const listaEl = document.querySelector('#lista-livros');
const mensagemErro = document.querySelector('#mensagem-erro');
const mensagemSucesso = document.querySelector('#mensagem-sucesso');

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

function mostrarSucesso(msg) {
  mensagemSucesso.textContent = msg;
  mensagemSucesso.classList.remove('oculto');
}

function renderizarLivros(livros) {
  listaEl.innerHTML = '';

  livros.forEach((livro) => {
    const statusClasse = livro.disponivel === 1 ? 'disponivel' : 'indisponivel';
    const statusTexto = livro.disponivel === 1 ? 'Disponível' : 'Emprestado';
    const textoBotaoStatus = livro.disponivel === 1 ? 'Emprestar' : 'Devolver';

    const li = document.createElement('li');
    li.classList.add('livro-card', statusClasse);

    li.innerHTML = `
      <span class="status-badge ${statusClasse}">${statusTexto}</span>
      <h3>${livro.titulo}</h3>
      <p>Autor: ${livro.autor}</p>
      <p>Ano: ${livro.ano}</p>
      <div class="acao-botoes">
        <button type="button" class="btn-status">${textoBotaoStatus}</button>
        <button type="button" class="btn-remover">Remover</button>
      </div>
    `;

    const btnStatus = li.querySelector('.btn-status');
    btnStatus.addEventListener('click', () => alternarStatus(livro));

    const btnRemover = li.querySelector('.btn-remover');
    btnRemover.addEventListener('click', () => removerLivro(livro.id));

    listaEl.appendChild(li);
  });
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const titulo = document.querySelector('#input-titulo').value;
  const autor = document.querySelector('#input-autor').value;
  const ano = document.querySelector('#input-ano').value;

  try {
    const response = await fetch('/livros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ titulo, autor, ano })
    });

    if (!response.ok) {
      mostrarErro('Erro ao cadastrar livro');
      return;
    }

    form.reset();
    mostrarSucesso('Livro cadastrado com sucesso!');
    carregarLivros();
  } catch (error) {
    mostrarErro(error.message);
  }
});

async function removerLivro(id) {
  try {
    const response = await fetch(`/livros/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      mostrarErro('Erro ao remover livro');
      return;
    }

    mostrarSucesso('Livro removido com sucesso!');
    carregarLivros();
  } catch (error) {
    mostrarErro(error.message);
  }
}

async function alternarStatus(livro) {
  const novoValor = livro.disponivel === 1 ? 0 : 1;

  try {
    const response = await fetch(`/livros/${livro.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ disponivel: novoValor })
    });

    if (!response.ok) {
      mostrarErro('Erro ao atualizar status do livro');
      return;
    }

    mostrarSucesso('Status do livro atualizado com sucesso!');
    carregarLivros();
  } catch (error) {
    mostrarErro(error.message);
  }
}

carregarLivros();