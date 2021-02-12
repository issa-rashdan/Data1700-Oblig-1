
let personRegister=[];

function registrer(){
    const Fornavn = document.getElementById("Fornavn").value;
    const Etternavn = document.getElementById("Etternavn").value;
    const Telefonnr = document.getElementById("Telefonnr").value;
    const Epost = document.getElementById("Epost").value;
    const Velgfilm = document.getElementById("velg").value;
    const Antall = document.getElementById("antall").value;



    const person = {
        Velgfilm: Velgfilm,
        Antall: Antall,
        Fornavn: Fornavn,
        Etternavn: Etternavn,
        Telefonnr: Telefonnr,
        Epost: Epost
    }

    //varsling hvis fletene er tommme

   if(Fornavn===""){
       document.getElementById("Fornavn1").innerHTML="Skriv inn Fornavn"
   }else{
       document.getElementById("Fornavn1").innerHTML=""
   }
    if(Etternavn===""){
        document.getElementById("Etternavn1").innerHTML="Skriv inn Etternavn"
    }else{
        document.getElementById("Etternavn1").innerHTML=""
    }
    if(Telefonnr===""){
        document.getElementById("Telefonnr1").innerHTML="Skriv inn Telefonnr"
    }else{
        document.getElementById("Telefonnr1").innerHTML=""
    }
    if(Epost===""){
        document.getElementById("Epost1").innerHTML="Skriv inn E-post"
    }else{
        document.getElementById("Epost1").innerHTML=""
    }
    if(Antall===""){
        document.getElementById("Antall1").innerHTML="Skriv inn Antall"
    }else{
        document.getElementById("Antall1").innerHTML=""
    }

    personRegister.push(person);


    skrivut();



    document.getElementById("Fornavn").value="";
    document.getElementById("Etternavn").value="";
    document.getElementById("Telefonnr").value="";
    document.getElementById("Epost").value="";
    document.getElementById("velg").value="";
    document.getElementById("antall").value="";
}
function slett() {
    console.log("hei");
    personRegister=[];
    skrivut();
}
function skrivut(){
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th>" +
        "<th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>E-post</th>" +
        "</tr>";

    for (let p of personRegister){
        ut+="<tr>";
        ut+="<td>"+p.Antall+"</td><td>"+p.Velgfilm+"</td>" +
            "<td>"+p.Fornavn+"</td><td>"+p.Etternavn+"</td>" +
            "<td>"+p.Telefonnr+"</td>" + "<td>"+p.Epost+"</td>";
        ut+="</tr>";
    }
    ut+="</table>";
    document.getElementById("personRegister").innerHTML = ut;
}


