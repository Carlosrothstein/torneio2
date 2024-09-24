# Atividade CRUD com Servidor
Esta é uma atividade em que consiste fazer requisições e receber respostas do servidor com a ajuda do app Postman.

## Estrutura do código

### Métodos de requisição e módulo

- `express`: Módulo utilizado para usar a biblioteca do express.
- `post`: Utilizado para ADICIONAR algo.
- `get`: Utilizado para LISTAR algo
- `put`: Utilizado para EDITAR algo
- `delete`:Utilizado para DELETAR algo


### Decisões de Design

- *Interface Simples*: Código e interface baseado apenas em texto, consiste em apenas perguntas e respostas, facilitando o entendimento e o uso do programa.
- *Validação Básica*: O sistema verifica se a entrada do usuário é válida antes de realizar as operações, verificando se as informações digitadas pelo usuário são números e as operações inclusas no programa.

## Utilização do Sistema 

### Requisitos

- **Node.js**
- **Express**
- **App Postman**
### Execução 

1. Clone o repositório *TRABALHO* no GitHub ou copie para um arquivo `index.js`.
2. No terminal, navegue até o diretório onde o arquivo se localiza.
3. Execute o programa com o comando:
    ```bash
    node index.js
     ```
4. O servidor será iniciado e no app Postman deverá ser colocado a sua URL.
    ```bash
    localhost:3000/
    ```
5. Depois você escolhe o método de requisição que deseja.
