const valoresNum = [1,2,3,4,5,6,7,8,9,10]

function criaPares(numeros){
       for (let indice = 0; indice < numeros.length; indice++)
    {
        if (numeros[indice] %2 == 0 ){
            console.log(numeros[indice])
        }
           
    }
};

criaPares(valoresNum)