var mensagem = "Página carregada com sucesso!";

alert(mensagem);

var var1 = 3;
var var2 = 2;
var soma;
var produto;
var quociente;

soma = var1 + var2;
produto = var1 * var2;
quociente = var1 / var2;

document.write(`A soma de ${var1} e ${var2} é ${soma}.\n`);
document.write(`O produto de ${var1} e ${var2} é ${produto}.\n`);
document.write(`O quociente de ${var1} e ${var2} é ${quociente}.\n`);

if(var1 > var2) {
    document.write("A variável 1 é maior do que a variável 2.");
}
else if(var2 > var1) {
    document.write("A variável 2 é maior do que a variável 1.");
} else {
    document.write("A variável 1 e a variável 2 são iguais.");
}
