/*A ideia é o aprendizado do JSON, utilizado para transferência de dados 
entre cliente/servidor, e tem sido utilizado mesmo em programas que não 
utilizam JavaScript (serialização) */

const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
console.log(jsonLivro);
console.log(JSON.parse(jsonLivro));