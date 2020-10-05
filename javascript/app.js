function calculoPrimos(data) {
    //Seccion de Validaciones
    var n1 = document.getElementById("id_inicio").value;
    if (n1 == "") {
        alert("Debe Ingresar Numero de Inicio");
        return false;
    }

    var n2 = document.getElementById("id_fin").value;
    if (n2 == "") {
        alert("Debe Ingresar Numero de Fin");
        return false;
    }


    const limit = parseInt(document.getElementById("id_fin").value);
    const notPrime = new Uint8Array(limit);
    const primes = [];

    notPrime[0] = notPrime[1] = 1;

    for (let i = 2; i < limit; i++) {
    if (notPrime[i] === 0) {
        primes.push(i);
        for (let j = i * i; j < limit; j+= i) {
        notPrime[j] = 1;
        }
    }
    }   
    let result = [];
    let maxSum = 0;
    let maxRun = -1;
    
    for (let i = 0; i < primes.length; i++) {

    let sum = 0;
    for (let j = i; j < primes.length; j++) {
        sum+= primes[j];
        if (sum > limit-1)
        break;       
        
        if (!notPrime[sum] && sum > maxSum && j - i > maxRun) {
        maxRun = j - i;
        maxSum = sum;
        result.push(maxSum);           
        }        
     }
    }
    document.getElementById("result").textContent = 'El resultado es: ' +  result[result.length - 1];
    alert('El resultado es:' +  result[result.length - 1])
    
    
    

}

