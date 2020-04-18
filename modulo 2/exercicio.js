// 1.1
// Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
// e chame a função info();
import ClasseUsuario from './functions'
ClasseUsuario.info();

// 1.2
// Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
import ClasseUsuario, {idade} from './functions'
ClasseUsuario.info();
console.log(idade);

// 1.3
// Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
// para IdadeUsuario.
import ClasseUsuario, { idade as IdadeUsuario } from './functions'
ClasseUsuario.info();
console.log(IdadeUsuario);