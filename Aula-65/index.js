//Exercício Validando CPF

(function main() {

    function ValidaCPF(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            get: function () {
                return cpfEnviado.replace(/\D+/g, '');
                //(/\D+/g) --> representação numérica que representa tudo que não for número
            }
        });
    }

    ValidaCPF.prototype.valida = function () {
        if (typeof this.cpfLimpo === 'undefined') return false;

        if (this.cpfLimpo.length !== 11) return false;

        if(this.isSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);

        const primeiroDigito = this.criaDigito(cpfParcial);

        const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito);

        novoCPF = cpfParcial + String(primeiroDigito) + String(segundoDigito);

        return novoCPF === this.cpfLimpo;
    }

    ValidaCPF.prototype.criaDigito = function (cpfParcial) {
        const cpfParcialArray = this.converteParaArray(cpfParcial);
        const soma = this.realizaConta(cpfParcialArray);
        const digito = 11 - (soma % 11);
        return digito > 9 ? 0 : digito;
    }

    ValidaCPF.prototype.converteParaArray = function (cpfString) {
        return Array.from(cpfString); //Convertendo a String em um Array
    }
    ValidaCPF.prototype.realizaConta = function (cpfParcialArray) {
        let contRegresssivo = cpfParcialArray.length + 1;

        const soma = cpfParcialArray.reduce(function (acumulador, valor) {
            acumulador += Number(valor) * contRegresssivo;
            contRegresssivo--;
            return acumulador;
        }, 0);

        return soma;
    }

    ValidaCPF.prototype.isSequencia = function(){
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    const cpf = new ValidaCPF('070.987.721-03');

    console.log(cpf.valida());
})();