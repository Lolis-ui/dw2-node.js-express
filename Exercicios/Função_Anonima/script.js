const media = function(n1, n2) {
    const resultadoMedia = (n1 + n2) / 2;
    
    if (resultadoMedia <= 5) {
        document.writeln(`Reprovado`);
    } else {
        document.writeln(`Aprovado`);
    }
    
    return resultadoMedia; 
}

const n1 = 10;
const n2 = 10;
const resultado = media(n1, n2); 
document.writeln(`<p>A media das suas notas é ${resultado}.</p>`);