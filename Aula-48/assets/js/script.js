//Convertendo o Exercício da Calculadora para Funções Construtoras

(function main() {
    function Calculadora() {
        this.display = document.querySelector('.display');


        this.inicia = () => {
            this.capturaClique();
            this.capturaEnter();
        }

        this.capturaClique = () => {
            document.addEventListener('click', (event) => {
                const elemento = event.target;
                if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
                if (elemento.classList.contains('btn-clear')) this.clear();
                if (elemento.classList.contains('btn-del')) this.del();
                if (elemento.classList.contains('btn-equal')) this.realizaConta();
            });
        };

        this.addNumDisplay = (elemento) => {
            this.display.value += elemento.innerText;
            this.display.focus();
        }

        this.clear = () => this.display.value = " ";

        this.del = () => this.display.value = this.display.value.slice(0, -1);

        this.realizaConta = () => {
            try{
                const conta = eval(this.display.value);

                if(!conta){
                    alert('Conta Inválida!');
                    return;
                }

                this.display.value = conta;
            }catch(error){
                alert('Conta Inválida!');
                return;
            }
        }

        this.capturaEnter = () => {
            document.addEventListener('keyup', (event) =>{
                if(event.keyCode === 13) this.realizaConta();
            });
        };
    }

    const calculadora = new Calculadora();
    calculadora.inicia();
})();
