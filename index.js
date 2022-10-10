const fs = require("fs");// Pedindo para import o módulo /const fs/ lá dentro da biblioteca ("fs")
/*fs => significa file system
// Criando um arquivo através do método (writeFileSync)
fs.writeFileSync("D:/Nova pasta/Aulas Full Stack/18º WEB 3.0/Node/Node/Node.js/ola.txt ", "Olá Mundo ! ");

// Criando uma variável(verifyExistsFile) para receber um método(existsSync) que verifica a existência de um arquivo
const verifyExistsFile = fs.existsSync("D:/Nova pasta/Aulas Full Stack/18º WEB 3.0/Node/Node/Node.js/ola.txt ");

if(verifyExistsFile){

    console.log("Existe")
}else{

    console.log("Não existe")
}*/

// Próximo passo vamos aprender a ler um arquivo com o módulo fs
// OBSERVAÇÃO: Se não colocar esse comando {encoding : "utf-8"} o terminal vai gerar a informação em byte

// Segue exemplo => <Buffer 5b 0d 0a 20 20 20 20 7b 0d 0a 22 6e 61 6d 65 22 3a 20 22 4a 6f 73 c3 a9 22 0d 0a 20 20 7d 2c 0d 0a 0d 0a 7b 0d 0a 22 6e 61 6d 65 22 3a 20 22 4c 75 63 ... 9 more bytes>


const userList = fs.readFileSync("D:/Nova pasta/Aulas Full Stack/18º WEB 3.0/Node/Node/Node.js/users.json" , {encoding : "utf-8"});
/*console.log(userList); ao executar essa linha de comando ele mostra no terminal as informações abaixo. Como resoler ?
[
    {
"name": "José"
  },

{
"name": "Lucas"
}
]*/


const parse= JSON.parse(userList);
parse.map(user=> console.log(user.name)); 
/* Agora sim ficou bem mais apresentável 
José
Lucas
*/