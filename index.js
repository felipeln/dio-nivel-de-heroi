// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

const hero = {
  name: 'Felipe',
  exp: 8000,
}

switch (true) {
  case hero.exp <= 1000:
    console.log(`O Herói de nome ${hero.name} está no nível de Ferro`)
    break;
  case hero.exp >= 1001 && hero.exp <= 2000:
    console.log(`O Herói de nome ${hero.name} está no nível de Bronze`)
    break;
  case hero.exp >= 2001 && hero.exp <= 5000:
    console.log(`O Herói de nome ${hero.name} está no nível de Prata`)
    break;
  case hero.exp >= 5001 && hero.exp <= 6000:
    console.log(`O Herói de nome ${hero.name} está no nível de Ouro`)
    break;
  case hero.exp >= 6001 && hero.exp <= 7000:
    console.log(`O Herói de nome ${hero.name} está no nível de Platina`)
    break;
  case hero.exp >= 7001 && hero.exp <= 8000:
    console.log(`O Herói de nome ${hero.name} está no nível de Diamante`)
    break;
  case hero.exp >= 8001 && hero.exp <= 9000:
    console.log(`O Herói de nome ${hero.name} está no nível de Ascendente`)
    break;
  case hero.exp >= 9001 && hero.exp <= 10000:
    console.log(`O Herói de nome ${hero.name} está no nível de Imortal`)
    break;
  case hero.exp >= 10001 :
    console.log(`O Herói de nome ${hero.name} está no nível de Radiante`)
    break;
  default:
    console.log('ERRO, nível não encontrado')
    break;
}