let nomeHeroi = prompt("Digite o nome do seu herói ")
const xp = parseInt(prompt("Digite a quantidade de XP do herói:"));

let nivel;

if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1000 && xp < 2000) {
  nivel = "Bronze";
} else if (xp >= 2000 && xp < 5000) {
  nivel = "Prata";
} else if (xp >= 5000 && xp < 7000) {
  nivel = "Ouro";
} else if (xp >= 7000 && xp < 8000) {
  nivel = "Platina";
} else if (xp >= 8000 && xp < 9000) {
  nivel = "Ascendente";
} else if (xp >= 9000 && xp < 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log("Digite o nome do seu herói " + nomeHeroi)
console.log("O herói de nome " + nomeHeroi + " está no nível ", nivel)
