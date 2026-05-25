let receitas = [

    {
        id: 1,
        nome: "Frango Grelhado com Arroz",
        imagem: "img/frango.png",

        receita: "Tempere o frango com alho, sal, limão e pimenta. Grelhe até dourar dos dois lados. Sirva com arroz branco.",

        tempo: "rápido",
        dificuldade: "baixa",
        proteina: "frango",
        estilo: "fitness",
        ocasiao: "dia a dia",
        tipo: "almoço e jantar"
    },

    {
        id: 2,
        nome: "Lasanha de Carne",
        imagem: "img/lasanha.jpg",

        receita: "Monte camadas de massa, molho de carne, queijo e presunto. Leve ao forno por 40 minutos.",

        tempo: "demorado",
        dificuldade: "alta",
        proteina: "carne",
        estilo: "normal",
        ocasiao: "festa",
        tipo: "almoço e jantar"
    },

    {
        id: 3,
        nome: "Salmão Assado",
        imagem: "img/salmao.jpg",

        receita: "Tempere o salmão com limão, alho e ervas. Asse no forno por 30 minutos.",

        tempo: "moderado",
        dificuldade: "média",
        proteina: "peixe",
        estilo: "fitness",
        ocasiao: "dia a dia",
        tipo: "almoço e jantar"
    },

    {
        id: 4,
        nome: "Brownie Vegano",
        imagem: "img/brownie.png",

        receita: "Misture chocolate, farinha, açúcar mascavo e leite vegetal. Asse até ficar macio por dentro.",

        tempo: "moderado",
        dificuldade: "média",
        proteina: "nenhuma",
        estilo: "vegana",
        ocasiao: "festa",
        tipo: "sobremesa"
    },

    {
        id: 5,
        nome: "Hambúrguer Artesanal",
        imagem: "img/hamburguer.jpg",

        receita: "Modele a carne, grelhe e monte o hambúrguer com queijo, alface e tomate.",

        tempo: "moderado",
        dificuldade: "baixa",
        proteina: "carne",
        estilo: "normal",
        ocasiao: "dia a dia",
        tipo: "lanche"
    },

    {
        id: 6,
        nome: "Salada Vegana",
        imagem: "img/salada.jpg",

        receita: "Misture alface, tomate, cenoura, pepino e azeite. Sirva gelado.",

        tempo: "rápido",
        dificuldade: "baixa",
        proteina: "nenhuma",
        estilo: "vegana",
        ocasiao: "dia a dia",
        tipo: "acompanhamento"
    }

];

const cards = document.getElementById("cards");

if(cards){

    receitas.forEach(receita => {

        cards.innerHTML += `

        <div class="col-md-4 col-12 mb-4">

            <a href="detalhes.html?id=${receita.id}" class="card-receita">

                <article class="receita">

                    <img 
                        src="${receita.imagem}" 
                        alt="${receita.nome}"
                        class="img-receita"
                    >

                    <h4 class="subtitulo mt-3">
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

const detalhes = document.getElementById("detalhes");

if(detalhes){

    const parametros = new URLSearchParams(window.location.search);

    const id = parametros.get("id");

    const receita = receitas.find(item => item.id == id);

    detalhes.innerHTML = `

        <div class="card p-4">

            <img 
                src="${receita.imagem}" 
                class="img-fluid mb-4 img-receita"
            >

            <h1>${receita.nome}</h1>

            <p>
                <strong>Tempo:</strong> ${receita.tempo}
            </p>

            <p>
                <strong>Dificuldade:</strong> ${receita.dificuldade}
            </p>

            <p>
                <strong>Proteína:</strong> ${receita.proteina}
            </p>

            <p>
                <strong>Estilo:</strong> ${receita.estilo}
            </p>

            <p>
                <strong>Ocasião:</strong> ${receita.ocasiao}
            </p>

            <p>
                <strong>Tipo:</strong> ${receita.tipo}
            </p>

            <p>
                <strong>Receita:</strong> ${receita.receita}
            </p>

            <a href="index.html" class="btn btn-dark mt-3">
                Voltar
            </a>

        </div>
    `;
}