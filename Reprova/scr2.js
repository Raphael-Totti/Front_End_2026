function mudarGrupos() {
    
    const grupoA = document.getElementById('grupo-a');
    const grupoB = document.getElementById('grupo-b');
    const grupoC = document.getElementById('grupo-c');

    grupoA.innerHTML = `
        <section>
            <h3><strong>🇩 Grupo D</strong></h3>
            <h5>Seleções</h5>
            <ul>
                <li>Uruguai</li>
                <li>Costa Rica</li>
                <li>Inglaterra</li>
                <li>Itália</li>
            </ul>
            <details>
                <summary>Saiba Mais</summary>
                <p><strong>Fatos: </strong> Conhecido como o "Grupo da Morte", reunindo três seleções campeãs mundiais na mesma chave.</p>
            </details>
        </section>
    `;

    grupoB.innerHTML = `
        <section>
            <h3><strong>🇪 Grupo E</strong></h3>
            <h5>Seleções</h5>
            <ul>
                <li>França</li>
                <li>Suíça</li>
                <li>Equador</li>
                <li>Honduras</li>
            </ul>
            <details>
                <summary>Saiba Mais</summary>
                <p><strong>Fatos: </strong> A seleção francesa dominou este grupo com uma impressionante média de gols nas primeiras rodadas.</p>
            </details>
        </section>
    `;

    grupoC.innerHTML = `
        <section>
            <h3><strong>🇫 Grupo F</strong></h3>
            <h5>Seleções</h5>
            <ul>
                <li>Alemanha</li>
                <li>México</li>
                <li>Suécia</li>
                <li>Coreia do Sul</li>
            </ul>
            <details>
                <summary>Saiba Mais</summary>
                <p><strong>Fatos: </strong> O grupo foi marcado por uma das maiores zebras, onde a atual campeã foi eliminada na fase de grupos.</p>
            </details>
        </section>
    `;
    document.getElementById('btn-proximo').style.display = 'none';
}