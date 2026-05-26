fetch("receitas.json")

.then(resposta => resposta.json())

.then(receitas => {

    const cards = document.getElementById("cards");

    if(cards){

        const pagina = window.location.pathname.toLowerCase();

        let receitasFiltradas = receitas;

        // FILTRO POR PÁGINA

        if(pagina.includes("almoco-jantar")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "almoco-jantar"
            );
        }

        else if(pagina.includes("sobremesas")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "sobremesas"
            );
        }

        else if(pagina.includes("lanches")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "lanches"
            );
        }

        else if(pagina.includes("acompanhamentos")){

            receitasFiltradas = receitas.filter(receita =>
                receita.tipo === "acompanhamentos"
            );
        }

        // FUNÇÃO QUE MOSTRA AS RECEITAS

        function mostrarReceitas(lista){

            cards.innerHTML = "";

            lista.forEach(receita => {

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

        mostrarReceitas(receitasFiltradas);

        // SELECTS

        const filtroTempo = document.getElementById("filtro-tempo");
        const filtroDificuldade = document.getElementById("filtro-dificuldade");
        const filtroProteina = document.getElementById("filtro-proteina");
        const filtroEstilo = document.getElementById("filtro-estilo");
        const filtroOcasiao = document.getElementById("filtro-ocasiao");

        // FUNÇÃO DOS FILTROS

        function aplicarFiltros(){

            let resultado = receitasFiltradas;

            if(filtroTempo.value !== ""){

                resultado = resultado.filter(receita =>
                    receita.tempo === filtroTempo.value
                );
            }

            if(filtroDificuldade.value !== ""){

                resultado = resultado.filter(receita =>
                    receita.dificuldade === filtroDificuldade.value
                );
            }

            if(filtroProteina.value !== ""){

                resultado = resultado.filter(receita =>
                    receita.proteina === filtroProteina.value
                );
            }

            if(filtroEstilo.value !== ""){

                resultado = resultado.filter(receita =>
                    receita.estilo === filtroEstilo.value
                );
            }

            if(filtroOcasiao.value !== ""){

                resultado = resultado.filter(receita =>
                    receita.ocasiao === filtroOcasiao.value
                );
            }

            mostrarReceitas(resultado);
        }

        // EVENTOS

        filtroTempo.addEventListener("change", aplicarFiltros);

        filtroDificuldade.addEventListener("change", aplicarFiltros);

        filtroProteina.addEventListener("change", aplicarFiltros);

        filtroEstilo.addEventListener("change", aplicarFiltros);

        filtroOcasiao.addEventListener("change", aplicarFiltros);
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

            </div>
            `;
        }
    }

})

.catch(erro => {

    console.log("Erro:", erro);

});