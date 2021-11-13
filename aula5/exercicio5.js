function validaMaioridade(anoNascimento) {
  resultado = 2021 - anoNascimento;

  if (resultado > 18) {
    console.log("Liberação autorizada!");
    
  }if (resultado < 18) 
  {
    console.log("Atenção: Liberação Não autorizada!");
    
  } else {
    console.log("validar documento de identidade!");
  }
}

validaMaioridade(2003)