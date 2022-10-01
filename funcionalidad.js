function init(){
    alert("Bienvenidos a la calculadora maestra");

    var numero1= prompt("Ingrese un numero");
    var numero2= prompt("Ingrese el segundo numero");
    var resultado = 0;

    do {
        var operador= prompt("Ingrese la opcion del operador que desea calcular \n1- Suma\n2- Resta\n3-Multiplicacion\n4-Division");
        switch(operador){
            case "1": resultado = parseInt(numero1) + parseInt(numero2);
                break;
            case "2": resultado = parseInt(numero1) - parseInt(numero2);
                break;
            case "3": resultado = parseInt(numero1) * parseInt(numero2);
                break;
            case "4": resultado = parseFloat(numero1) / parseFloat(numero2);
                break;
            default: alert("Opcion incorrecta");break;
    
        }  
    } while(resultado == 0);
   
    alert("El resultado es: "+ resultado)                                
}


