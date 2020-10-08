const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
const calcular = () => {
    let primos = [];
    //console.log("calcular");
    $('#btnCalcular').attr('disabled', true);
    $("#resultado1").html("");
    $("#resultado1").html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <span class="sr-only">Loading...</span><div>Calculando, por favor espere...</div>');
    $("#resultado2").html("");
    $("#resultado3").html("");
    let numInicial = $("#numeroI").val();
    numInicial = parseInt(numInicial) || 0;
    //console.log(numInicial);
    var i = 0;
    var refreshIntervalId = setInterval(function() {    
                //length = array.length
                if (i <= (numInicial)) {
                    
                    if(isPrime(i)){
                        primos.push(i);
                        suma = primos.reduce((a, b) => a + b, 0);
                        
                        if(suma>numInicial){
                            primos.pop();
                            $("#resultado1").html("");
                            //console.log(primos);
                            let totalElementos = primos.length;
                            suma = primos.reduce((a, b) => a + b, 0);
                            //console.log(totalElementos);
                            $("#resultado1").append("Sumatoria mas grande de primos en la secuencia: " + suma+"<br>");
                            let k = 0;
                            for(k=0; k <= totalElementos; k++){ 
                                if(isPrime(suma)){
                                    //console.log("Iteracion: "+totalElementos +"Suma: " +suma);
                                    $("#resultado3").html("Num. Primo mayor en la secuencia (Por sumatoria de primos): " + suma+"<i class='fa fa-check' aria-hidden='true' style='color:green;'></i><br>");
                                    break;
                                }
                                else{
                                    primos.pop();
                                    suma = primos.reduce((a, b) => a + b, 0);
                                    totalElementos = primos.length;
                                }
                                //console.log(k);
                            }
                            //console.log(totalElementos);
                            clearInterval(refreshIntervalId);
                        }
                        if(suma==numInicial){
                            $("#resultado1").html("");
                            //console.log(primos);
                            let totalElementos = primos.length;
                            suma = primos.reduce((a, b) => a + b, 0);
                            //console.log(totalElementos);
                            $("#resultado1").append("Sumatoria mas grande de primos en la secuencia: " + suma+"<br>");
                            let k = 0;
                            for(k=0; k <= totalElementos; k++){ 
                                if(isPrime(suma)){
                                    //console.log("Iteracion: "+totalElementos +"Suma: " +suma);
                                    $("#resultado3").html("Num. Primo mayor en la secuencia (Por sumatoria de primos): " + suma+"<i class='fa fa-check' aria-hidden='true' style='color:green;'></i><br>");
                                    break;
                                }
                                else{
                                    primos.pop();
                                    suma = primos.reduce((a, b) => a + b, 0);
                                    totalElementos = primos.length;
                                }
                                //console.log(k);
                            }
                            //console.log(totalElementos);
                            clearInterval(refreshIntervalId);                            
                        }
                        else{
                            $("#resultado2").append("Num. Primo agregado: " + i+"<br>");
                        }
                        // else{

                        //     
                        //     
                        //     $("#resultado3").html("Primo mayor: " + suma+"<br>");
                        // }

                    }

                } else {
                    clearInterval(refreshIntervalId);
                }
                i++;
                
    }, 1);
    $('#btnCalcular').attr('disabled', false);
    // let old_time = new Date();
    // k = 0;
    // var text = "";
    // while (k < 1000000) {
    //     //text = "The number is " + k;
    //     if(isPrime(k)){
    //         console.log(k+" Es primo: "+isPrime(k));
    //     }    
    //     //console.log(text);
    //     k++;
    // }

    // let new_time = new Date();
    // let seconds_passed = new_time - old_time;
    // console.log("3 Segundos transcurridos: "+seconds_passed/1000+" MS transcurridos: "+seconds_passed);    
}

$(document).ready(function () {

    console.log("ready");
    // var old_time = new Date();
    // var k = 0;
    // for(k=0; k < 1000000; k++){ 
    //     if(isPrime(k)){
    //         //console.log(k+" Es primo: "+isPrime(k));
    //     }    
    //     // if(k==200000){
    //     //     console.log("terminar");
    //     //     break;
    //     // }
    // }
    // var new_time = new Date();
    // var seconds_passed = new_time - old_time;
    // console.log("Segundos transcurridos: "+seconds_passed/1000+" MS transcurridos: "+seconds_passed);

    // var old_time = new Date();
    // k = 0;
    // var text = "";
    // while (k < 1000000) {
    //     //text = "The number is " + k;
    //     if(isPrime(k)){
    //         //console.log(k+" Es primo: "+isPrime(k));
    //     }    

    //   //console.log(text);
    //   k++;
    // }

    // var new_time = new Date();
    // var seconds_passed = new_time - old_time;
    // console.log("2 Segundos transcurridos: "+seconds_passed/1000+" MS transcurridos: "+seconds_passed);    
});