fetch("receitas.json")

.then(resposta => resposta.json())

.then(receitas => {

    const cards = document.getElementById("cards");

    if(cards){

        let receitasFiltradas = [];

        const pagina = window.location.pathname.toLowerCase();

        // ALMOÇO E JANTAR
        if(pagina.includes("almoco-jantar")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "almoco-jantar"
            );
        }

        // SOBREMESAS
        else if(pagina.includes("sobremesas")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "sobremesas"
            );
        }

        // LANCHES
        else if(pagina.includes("lanches")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "lanches"
            );
        }

        // ACOMPANHAMENTOS
        else if(pagina.includes("acompanhamentos")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "acompanhamentos"
            );
        }

        // INDEX
        else{

            receitasFiltradas = receitas;
        }

        cards.innerHTML = "";

        receitasFiltradas.forEach(receita => {

            cards.innerHTML += `

            <div class="col-md-4 col-12 mb-4">

                <a href="detalhes.html?id=${receita.id}" class="card-receita">

                    <article class="receita">

                        <img 
                            src="${receita.imagem}" 
                            alt="${receita.nome}"
                            class="img-receita"
                        >

                        <h4 class="subtitulo">
                            ${receita.nome}
                        </h4>

                        <p class="Texto">
                            Tempo: ${receita.tempo}
                        </p>

                    </article>

                </a>

            </div>
            `;
        });
    }

    // DETALHES
    const detalhes = document.getElementById("detalhes");

    if(detalhes){

        const parametros = new URLSearchParams(window.location.search);

        const id = parametros.get("id");

        const receita = receitas.find(item => item.id == id);

        if(receita){

            detalhes.innerHTML = `

            <div class="card p-4">

                <img 
                    src="${receita.imagem}" 
                    class="img-fluid mb-4 img-receita"
                >

                <h1>${receita.nome}</h1>

                <p><strong>Tempo:</strong> ${receita.tempo}</p>

                <p><strong>Dificuldade:</strong> ${receita.dificuldade}</p>

                <p><strong>Proteína:</strong> ${receita.proteina}</p>

                <p><strong>Estilo:</strong> ${receita.estilo}</p>

                <p><strong>Ocasião:</strong> ${receita.ocasiao}</p>

                <p><strong>Tipo:</strong> ${receita.tipo}</p>

                <p><strong>Receita:</strong> ${receita.receita}</p>

                <a href="index.html" class="btn btn-dark mt-3">
                    Voltar
                </a>

            </div>
            `;
        }
    }

})

.catch(erro => {
    console.log("Erro:", erro);
});