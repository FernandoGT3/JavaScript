//Tratando e Lançando Erros
//NÂO DEVEMOS MOSTRAR O ERRO COMPLETO PARA O USUÁRIO
//TRY --> TENTAR -> Caso ocorra algum erro entra no catch
//CATCH -->CAPTURA O ERRO
//THROW -->LANÇA UM ERRO
//FINALLY -->SERÁ EXECUTADO SEMPRE -->Dando erro ou não

try {
    console.log(naoExisto);
} catch (error) {
    console.log('naoExisto não existe.')
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('X e Y precisam ser números');//lançando um erro
        //ou new Error (função construtora) mostra igual do Js msm 
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch(error){
    console.log(error);//Porém para o front-end
    //É melhor mostrar algo mais amigável para o usuário
}

//EXEMPLO

try{
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou um erro');
}catch(error){
    console.log('Tratando o erro');
}finally{
    console.log('Fechei o arquivo');
}

function retornaHora (data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return (data.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }));
}

try{
    const hora = retornaHora();
    console.log(hora);
}catch(error){
    //Tratar Erro
}finally{
    console.log('Tenha um bom dia!.');
}
