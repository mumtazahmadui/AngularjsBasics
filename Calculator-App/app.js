var module = angular.module("calApp",[]);

module.controller("calculatorCtrl",calculatorCtrl);

function calculatorCtrl(){
        this.resultValue = 0;
        
        this.buttonCliked = function(button){
            this.selectedOperation = button;
        }
        

        this.compute = function(){
                var number1 = parseFloat(this.num1);
                var number2 = parseFloat(this.num2);

                if(this.selectedOperation === '+'){
                    this.resultValue = number1+number2;
                }
                else if(this.selectedOperation === '-'){
                    this.resultValue = number1-number2;
                }
                else if(this.selectedOperation === '*'){
                    this.resultValue = number1*number2;
                }
                else if(this.selectedOperation === '/'){
                    this.resultValue = number1/number2;
                }
        }
}