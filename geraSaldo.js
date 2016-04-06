function calculaSaldo(totalPeriodos, hrPendente) {
    var arrayReturn = [];
    var totalPeriodoHr = totalPeriodos.substring(0,2);
    var totalPeriodoMin = totalPeriodos.substring(3, 5);
    var hrPendenteHr = hrPendente.substring(0, 2);
    var hrPendenteMin = hrPendente.substring(3, 5);
    
    //console.log(totalPeriodos, hrPendente);
    
    var saldoHr;
    var saldoMin;
    var arrayAux = [];
    arrayAux = trataMinNegativo(parseInt(totalPeriodoMin),
                                parseInt(hrPendenteMin),
                                parseInt(totalPeriodoMin),
                                parseInt(totalPeriodoHr));
    //saldoMin
    if (arrayAux[0] <= 9) {
        saldoMin = "0" + arrayAux[0];
    } else {
        saldoMin = arrayAux[0];
    }

    //saldoHr
    if (arrayAux[1] <= 9) {
        hrPendenteHr = parseInt(hrPendenteHr);
        saldoHr = arrayAux[1];
        
        if (saldoHr > hrPendenteHr) {
            saldoHr = saldoHr - hrPendenteHr;
        } else {
            saldoHr = hrPendenteHr - saldoHr;
        }
        
        saldoHr = "0" + saldoHr;

    } else {
        hrPendenteHr = parseInt(hrPendenteHr);
        saldoHr = arrayAux[1];
        
        if (saldoHr > hrPendenteHr) {
            saldoHr = saldoHr - hrPendenteHr;
        } else {
            saldoHr = hrPendenteHr - saldoHr;
        }

    }

    arrayReturn[0] = saldoMin;
    arrayReturn[1] = saldoHr;

    return arrayReturn;
}
