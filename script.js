function add() {
  
    const containerCards = document.getElementById('Cards');

    const novoCardHTML = `
        <div class="card ms-3" style="width: 22rem;" aria-hidden="true">
            <img src="Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">

            <div class="card-body">
                <h5 id="Nome" class="card-title">
                    <span class="card-title">Lucas Tolentino Coelho de Lima</span>
                    <span id="Rank" class="badge text-bg-secondary">8,8</span>
                </h5>
                <p class="card-text">
                    <span id="Data_Nas"><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
                    <span id="Alutra"><strong>Altura:</strong> 1,80 m</span><br>
                    <span id="Posição "><strong>Posição:</strong> Meio-campista</span><br>
                </p>
            </div>
        </div>
    `;
    containerCards.insertAdjacentHTML('beforeend', novoCardHTML);
}