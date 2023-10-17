
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