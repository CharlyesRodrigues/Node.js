const fs = require("fs");

fs.writeFileSync("D:/Nova pasta/Aulas Full Stack/18º WEB 3.0/Node/Node/Node.js/ola.txt ", "Olá Mundo ! ");

// Criando uma variável(verifyExistsFile) para receber um método(existsSync) que verifica a existência de um arquivo
const verifyExistsFile = fs.existsSync("D:/Nova pasta/Aulas Full Stack/18º WEB 3.0/Node/Node/Node.js/ola.txt ");

if(verifyExistsFile){

    console.log("Existe")
}else{

    console.log("Não existe")
}