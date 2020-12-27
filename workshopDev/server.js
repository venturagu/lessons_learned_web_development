// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Famlia",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        url: "https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg"
    },

]

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, // não fazer cache
})

// criei uma rota / 
// e capturo o pedido do cliente para responder
server.get("/", function(req, res){
    return res.render("./index.html", { ideas })
})

server.get("/ideias", function(req, res){
    return res.render("public/pages/ideias.html");
})
//liguei meu servidor na aporta 3000 (escutando essa porta)
server.listen(3000)