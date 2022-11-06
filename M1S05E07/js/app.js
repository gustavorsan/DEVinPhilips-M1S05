import Partida from "./Partida.js";
import Time from "./Time.js";

const vitoria = new Time("Vitoria","VIT");
const flamengo = new Time("Flamengo","FLA");
const fluminense = new Time("Fluminense","FLU");
const corinthians = new Time("Corinthians","COR");
const cruzeiro = new Time("Cruzeiro","CRU");
const palmeiras = new Time("Palmeiras","PAL");

const partidaUm = new Partida("VIT","FLA",2,3);
const partidaDois = new Partida("COR","FLU",1,1);
const partidaTres = new Partida("COR","PAL",4,3);
const partidaQuatro = new Partida("VIT","CRU",5,3);
const partidaCinco = new Partida("VIT","FLA",1,3);
const partidaSeis = new Partida("PAL","COR",2,3);
const partidaSete = new Partida("PAL","FLA",2,2);
const partidaOito = new Partida("FLU","PAL",2,4);
const partidaNove = new Partida("COR","VIT",2,5);

const partidas = [
  partidaUm,
  partidaDois,
  partidaTres,
  partidaQuatro,
  partidaCinco,
  partidaSeis,
  partidaSete,
  partidaOito,
  partidaNove
]

const times = [
  vitoria,
  flamengo,
  fluminense,
  corinthians,
  cruzeiro,
  palmeiras
]

partidas.forEach(partida =>{
  vitoria.computarPartida(partida);
  flamengo.computarPartida(partida);
  fluminense.computarPartida(partida);
  corinthians.computarPartida(partida);
  cruzeiro.computarPartida(partida);
  palmeiras.computarPartida(partida);
})

times.forEach(time=>{
  console.log(time.exibirSituacao())
})