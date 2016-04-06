function escondeDivDoResultado() {
    document.getElementById("ptotal").style.visibility = "hidden";
}

function validaDadosPreenchidos() {
    //if (document.getElementById('ent1').value == '' || document.getElementById('ent2').value == '' || document.getElementById('saida1').value == '' || document.getElementById('saida2').value == '') {
    //    alert("Preencha todos os campos");
    //} else {
        calcula();
    //}
}

function calcula() {

    //Pega valor dos inputs de entra e saida e separa da e hora
    e1 = document.getElementById('ent1').value;
    hora_e1 = e1.substring(0, 2);
    minuto_e1 = e1.substring(3, 5);

    s1 = document.getElementById('saida1').value;
    hora_s1 = s1.substring(0, 2);
    minuto_s1 = s1.substring(3, 5);

    e2 = document.getElementById('ent2').value;
    hora_e2 = e2.substring(0, 2);
    minuto_e2 = e2.substring(3, 5);

    s2 = document.getElementById('saida2').value;
    hora_s2 = s2.substring(0, 2);
    minuto_s2 = s2.substring(3, 5);

    //======= Formata retorno do primeiro periodo - INICIO =============================//
    var Periodo1Hora;
    var Periodo1Minuto;
    var CalcPeriodo1Hora = hora_s1 - hora_e1;
    var CalcPeriodo1Minuto = minuto_s1 - minuto_e1;
    var arrayCalcula_1 = [];
    //var arrayValidamenorQue10_1 = [];

    //Chamada na função trataMinNegativo() do arquivo calcula2.js
    arrayCalcula_1 = trataMinNegativo(parseInt(minuto_e1),
                                      parseInt(minuto_s1),
                                      parseInt(CalcPeriodo1Minuto), 
                                      parseInt(CalcPeriodo1Hora));

    CalcPeriodo1Minuto = arrayCalcula_1[0];
    CalcPeriodo1Hora = arrayCalcula_1[1];

    if (CalcPeriodo1Hora <= 9 || CalcPeriodo1Minuto <= 9) {
        if (CalcPeriodo1Hora <= 9) {
            Periodo1Hora = "0" + CalcPeriodo1Hora;
        } else {
            Periodo1Hora = CalcPeriodo1Hora;
        }
        if (CalcPeriodo1Minuto <= 9) {
            Periodo1Minuto = "0" + CalcPeriodo1Minuto;
        } else {
            Periodo1Minuto = CalcPeriodo1Minuto;
        }
    } else {
        Periodo1Hora = CalcPeriodo1Hora;
        Periodo1Minuto = CalcPeriodo1Minuto;
    }
    //======= Formata retorno do primeiro periodo - FIM =============================//

    //======= Formata retorno do segundo periodo - INICIO ==========================//
    var Periodo2Hora;
    var Periodo2Minuto;
    var CalcPeriodo2Hora = hora_s2 - hora_e2;
    var CalcPeriodo2Minuto = minuto_s2 - minuto_e2;
    var arrayCalcula_2 = [];

    //Chamada na função do arquivo calcula2.js
    arrayCalcula_2 = trataMinNegativo(parseInt(minuto_e2),
                                      parseInt(minuto_s2),
                                      parseInt(CalcPeriodo2Minuto), 
                                      parseInt(CalcPeriodo2Hora));

    CalcPeriodo2Minuto = arrayCalcula_2[0];
    CalcPeriodo2Hora = arrayCalcula_2[1];

    if (CalcPeriodo2Hora <= 9 || CalcPeriodo2Minuto <= 9) {
        if (CalcPeriodo2Hora <= 9) {
            Periodo2Hora = "0" + CalcPeriodo2Hora;
        } else {
            Periodo2Hora = CalcPeriodo2Hora;
        }
        if (CalcPeriodo2Minuto <= 9) {
            Periodo2Minuto = "0" + CalcPeriodo2Minuto;
        } else {
            Periodo2Minuto = CalcPeriodo2Minuto;
        }
    } else {
        Periodo2Hora = CalcPeriodo2Hora;
        Periodo2Minuto = CalcPeriodo2Minuto;
    }
    //======= Formata retorno do segundo periodo - FIM =============================//


    //Monta hora por periodo para exibir separadamente
    var periodo1 = Periodo1Hora + ":" + Periodo1Minuto;
    var periodo2 = Periodo2Hora + ":" + Periodo2Minuto;
    var periodo1Total = periodo1;
    var periodo2Total = periodo2;

    //Monta a soma dos dois periodos para exibir o total
    var totalHora;
    var totalMin;
    var totalPeriodos; 
    var perSomaHora = somaPeriodosHora(parseInt(Periodo1Hora), parseInt(Periodo2Hora));
    var arrayPerSomaMin = []; //necessario um array pois neste momento é preciso tratar valores maiores que 60.
    arrayPerSomaMin = somaPeriodosMinuto(parseInt(Periodo1Minuto),
                                         parseInt(Periodo2Minuto), 
                                         parseInt(perSomaHora));
    totalHora = arrayPerSomaMin[0];
    totalMin = arrayPerSomaMin[1];
    totalPeriodos = totalHora + ":" + totalMin; // monta soma total dos periodos para exibição na pagina.
    
    //Preenche label com total dos periodos
    document.getElementById('p1').innerHTML = periodo1Total;
    document.getElementById('p2').innerHTML = periodo2Total;
    document.getElementById('p3').innerHTML = "Total de horas trabalhadas: " + totalPeriodos;
    document.getElementById("ptotal").style.visibility = "visible"; //exibe a DIV oculta com o total de horas.


    //Variavel recebe valor do saldo em a compensar ou a devedor
    var hrPendente = document.getElementById('InpHrPendente').value;

    var arraySaldo = [];
    arraySaldo = calculaSaldo(totalPeriodos, hrPendente);

    //Recebe o resultado do geraSaldo() e monta a quantidade de horas que se deve trabalhar no dia. 
    var qtdMin = arraySaldo[0];
    var qtdHr = arraySaldo[1];
    var qtdTotal = qtdHr.toString() + ":" + qtdMin.toString();
    console.log(qtdTotal);
    document.getElementById('p4').innerHTML = "Total a trabalhar no dia: " + qtdTotal;
    document.getElementById('p5').innerHTML = "Você deve sair as: ";


}