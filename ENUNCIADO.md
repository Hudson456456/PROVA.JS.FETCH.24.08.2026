# Prova Prática: Integração Front-end e Back-end

## Instruções gerais

Este projeto simula uma biblioteca digital onde o aluno deve listar livros, cadastrar novos livros, remover itens e alternar o status de disponibilidade entre "Disponível" e "Emprestado".

O back-end e a estrutura HTML/CSS já estão prontos. Sua tarefa é completar o arquivo `public/app.js` com as requisições Fetch, a renderização da interface e finalizar a rota PUT para alterar a disponibilidade dos livros.

## Como rodar o projeto

1. Abra o terminal na pasta do projeto.
2. Execute:
   ```bash
   npm install
   npm run dev
   ```
3. Acesse no navegador:
   ```text
   http://localhost:3000
   ```

## Tarefas obrigatórias

### 1. Listar e renderizar os livros na tela

- Fazer uma requisição para pegar os livros no back-end
- Renderizar todos os livros na interface
- Mostrar status visual: Disponível ou Emprestado

### 2. Cadastrar um novo livro

- Capturar os valores digitados no formulário
- Enviar uma requisição para o back-end na rota de cadastro de livros
- Incluir `Content-Type: application/json`
- Enviar o `body` com `JSON.stringify(...)`
- Atualizar a lista após o cadastro
- Limpar os campos do formulário

### 3. Remover um livro da lista

- Identificar o livro clicado
- Enviar requisição para o back-end passando o ID do livro deletado
- Atualizar a lista depois da remoção

### 4. Emprestar e devolver um livro

- Inverter o estado de disponibilidade (`1` para `0` e vice-versa)
- Criar/Finalizar a rota `PUT` no back-end com a lógica de inverter a disponibilidade do libro no banco de dados (`1` para `0` e vice-versa)
- Enviar requisição para a rota `PUT`
- Atualizar o visual da página conforme o novo status

### 5. Bônus

- Exibir uma mensagem amigável de erro quando a API falhar e sucesso quando tudo funcionar;
- Melhorias no HTML e CSS também podem somar pontos;

## Critério de entrega

- Enviar o link do repositório no formulário: `https://forms.gle/hkEvBz7eFyjjhgxM9`
- Não incluir `node_modules`, use `.gitignore`.
