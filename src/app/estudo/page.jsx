

export default function Estudo() {

    const filmes = [
        {
            id: 1,
            titulo: "A Origem",
            genero: "Ficção Científica",
            descricao: "Um ladrão especializado em invadir sonhos recebe a missão de implantar uma ideia na mente de uma pessoa."
        },
        {
            id: 2,
            titulo: "Parasita",
            genero: "Drama / Suspense",
            descricao: "Uma família pobre se infiltra na vida de uma família rica, gerando consequências inesperadas."
        },
        {
            id: 3,
            titulo: "O Senhor dos Anéis: A Sociedade do Anel",
            genero: "Fantasia / Aventura",
            descricao: "Um hobbit recebe a missão de destruir um anel poderoso para salvar a Terra Média."
        },
        {
            id: 4,
            titulo: "Corra!",
            genero: "Terror / Suspense",
            descricao: "Um jovem descobre segredos perturbadores ao visitar a família de sua namorada."
        },
        {
            id: 5,
            titulo: "Homem-Aranha no Aranhaverso",
            genero: "Animação / Ação",
            descricao: "Miles Morales se torna o Homem-Aranha e conhece versões do herói de outros universos."
        }
    ];

    var contador = 2

    function solution(str) {
        let palavras = str.match(/.{1,2}/g);


       if (palavras[palavras.length - 1].length === 1){
        console.log("tem")
        palavras[palavras.length - 1] += "_";
        console.log(palavras)
       }
       else{
        console.log("olha a resenha!!!")
        console.log(palavras)
       }
       return palavras
    }

    solution("abcdefghijklmno")

    return (<>
        <p>aaii</p>
    </>)
}