//Métodos Estáticos --> Métodos que podemos acessar na classe sem instanciá-la, e não estão disponíveis dentro da instância
//Funções que estão dentro das classes

class ControleRemoto{
    constructor(tv){
        this.tv = tv; //são referentes a instância
        this.volume = 0;
    }

    //Método de Instância
    aumentarVolume(){ //vai alterar a prorpiedade da instância
        this.volume += 2;
    }

    //Método de Instância
    diminuirVolume(){ //vai alterar a prorpiedade da instância
        this.volume -= 2;
    }

    //Método Estático --> É referente a classe
    //Não tem acesso ao dados da instância
    static trocaPilha(){ //todos os controles trocam as pilhas juntos
        console.log('Ok, Vou Trocar!');
        // o this aqui é referente a classe (não a instância e sim a classe)
        //ja se fizermos uma funciton globla o this sera referente ao obj global
    }
}

//instanciando a classe(criando um novo objeto)
const controle = new ControleRemoto('LG'); 
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();

ControleRemoto.trocaPilha(); //só conseguimos acessar pela classe

console.log(controle);