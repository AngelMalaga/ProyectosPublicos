
var v1 = 0;
var v2 = 0;
var FinalRpt = 0;
var Max = 100;
const Rept =[];


//const message = 'Hello world' // Try edit me

// Update header text
//document.getElementById("RPT1").innerHTML = message

// Log to console
//console.log(message)

v1 = ValorRandomInt(Max);
v2 = ValorRandomInt(Max);
FinalRpt = ValorResult(v1,v2);

Rept[0] = ValorRandomInt(90);
Rept[1] = ValorRandomInt(90);
Rept[2] = ValorRandomInt(90);
Rept[3] = ValorRandomInt(90);
sort();
fill();


function ValorRandomInt(max){
    return Math.floor(Math.random()*max);

}
function ValorResult(V1,V2){
    
   return v1-v2;
}

function sort(){
    var index = ValorRandomInt(4);
    Rept[index] = FinalRpt;
}

function fill(){

    document.getElementById("RPT1").innerHTML = Rept[0];
    document.getElementById("RPT2").innerHTML = Rept[1];
    document.getElementById("RPT3").innerHTML = Rept[2];
    document.getElementById("RPT4").innerHTML = Rept[3];
    document.getElementById("OPERA").innerHTML = v1+" - "+v2;

}

function RptResult(id){

     var Rpt;

     switch(id) {
        case 1:
            Rpt = document.getElementById("RPT1");
          break;
        case 2:
            Rpt = document.getElementById("RPT2");
          break;
        case 3:
            Rpt = document.getElementById("RPT3");
          break;
        case 4:
            Rpt = document.getElementById("RPT4");
          break;
        default:
          
      }


    if(Rpt.textContent == FinalRpt){
        document.getElementById("OPERA").innerHTML = "You Win";
    }else{
        document.getElementById("OPERA").innerHTML = "You Lose CTM";
    }

}




