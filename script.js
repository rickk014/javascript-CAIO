function notas(){

    let nota1tri;
    let nota2tri;
    let resultado;

    nota1tri = Number(prompt("Digire a nota do 1º trismestre"));
    nota2tri = Number(prompt("Digite a nota do 2º trismestre"));

    resultado = 180-(nota1tri+nota2tri);

    if(resultado <= 0){
        alert("nos eh do angelo guço, vc paso. pabens")
    } else {
        alert("nos do angelo guço nao pasou vc. picisa di " + resultado + " pomto: tenta di novokk")
    }
    
}

