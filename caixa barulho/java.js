const produto = {
    "123": { nome: "Coca-Cola", preco: 9.99 },
    "456": { nome: "Fanta", preco: 8.99 },
    "789": { nome: "Pepsi", preco: 7.99 },
};

let carrinho = [];

const audio = new Audio("vine-boom.mp3");
audio.volume = 1.0;

window.onload = () => {
    document.getElementById("cod").focus();
};

function addProduto() {
    const codValue = document.getElementById("cod");
    const qtdValue = document.getElementById("qtd");

    const codigo = codValue.value;
    const quantidade = Number(qtdValue.value);

    if (!produto[codigo]) {
        alert("Produto não encontrado!");
        return;
    }

    const produtoBase = produto[codigo];

    const item = {
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        quantidade: quantidade,
        subtotal: produtoBase.preco * quantidade,
    };

    carrinho.push(item);

    audio.currentTime = 0;
    audio.play();

    atualizarTela();

    codValue.value = "";
    qtdValue.value = "";
    codValue.focus();
}

function atualizarTela() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach((item) => {
        total += item.subtotal;

        const li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = `
            <div class="d-flex justify-content-between">
                <strong>${item.nome}</strong>
                <small>${item.quantidade} x R$${item.preco.toFixed(2)} = 
                <strong>R$${item.subtotal.toFixed(2)}</strong></small>
            </div>
        `;

        lista.appendChild(li);
    });

    console.log("Total:", total.toFixed(2));
}