function trataMinNegativo(minutoEnt, minutoSaida, CalcPeriodoMin, CalcPeriodoHr) {
    //trata minutos quando na campo entrada é maior o de saida.
    var arrayReturn = [];
    if (minutoEnt > minutoSaida) {
        var aux1;
        var aux2;
        aux1 = 60 - parseInt(minutoEnt);
        aux2 = aux1 + parseInt(minutoSaida);
        CalcPeriodoMin = aux2;
        CalcPeriodoHr--;
    } else if (minutoEnt < minutoSaida) {
        CalcPeriodoMin = minutoSaida - minutoEnt;
    }
    else {
        CalcPeriodoMin = minutoEnt - minutoSaida;
    }

    arrayReturn[0] = CalcPeriodoMin;
    arrayReturn[1] = CalcPeriodoHr;

    return arrayReturn;
}

function somaPeriodosHora(periodo1, periodo2) {
    var aux1 = periodo1 + periodo2;

    if (aux1 <= 9) {
        aux1 = "0" + aux1;
    }

    return aux1;
}

function somaPeriodosMinuto(periodo1, periodo2, resultadoHora) {
    var aux1 = periodo1 + periodo2;
    var arrayReturn = [];

    if (aux1 <= 9) {
        aux1 = "0" + aux1;
        resultadoHora = resultadoHora;
    } else if (aux1 >= 60) {
        aux1 = aux1 - 60;
        
        if (aux1 <= 9) {
            aux1 = "0" + aux1;
        }      
        
        resultadoHora++;
    }

    if (resultadoHora <= 9) {
        arrayReturn[0] = "0" + resultadoHora;
    } else {
        arrayReturn[0] = resultadoHora
    }

    arrayReturn[1] = aux1.toString();

    return arrayReturn;
}