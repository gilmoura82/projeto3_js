// Método Simples: usando innerHTML para inserir o título
document.body.innerHTML += '<h1 id="titulo">Loja Virtual</h1>';

// Método Complexo: criando e inserindo um produto com detalhes

// Criação do contêiner principal do produto
const produto = document.createElement("div");
produto.id = "produto";

// Criação e inserção do nome do produto
const nomeProduto = document.createElement("h2");
nomeProduto.textContent = "Apple iPhone 14 Plus (128 GB) – Meia Noite";
produto.appendChild(nomeProduto);

// Criação e inserção da descrição do produto
const descricaoProduto = document.createElement("p");
descricaoProduto.textContent = "Sistema de câmera avançado para fotos melhores em qualquer luz Modo Cinema, agora em 4K Dolby Vision até 30 qps. Modo Ação para vídeos em movimento com mais estabilidade. Tecnologia de segurança — Detecção de Acidentes, que liga para a emergência se você não puder falar";
produto.appendChild(descricaoProduto);

// Criação e inserção do preço do produto
const precoProduto = document.createElement("p");
precoProduto.textContent = "Preço: R$ 4.289,12";
produto.appendChild(precoProduto);

// Opcional: Inserir uma imagem do produto
const imagemProduto = document.createElement("img");
imagemProduto.src = "iphone14.jpg"; 
imagemProduto.alt = "Imagem do Apple Iphone 14";
imagemProduto.style.width = "200px";
produto.appendChild(imagemProduto);

// Inserção do produto no corpo do documento
document.body.appendChild(produto);
