const cores = [
  "abobora", "acafrao", "amarelo", "ambar", "ameixa", "amendoa", "ametista",
  "anil", "areia", "aspargo", "avela", "azeitona", "azul", "bege", "bordo",
  "borgonha", "branco", "bronze", "caqui", "caramelo", "carmesim", "carmim",
  "castanho", "cereja", "chocolate", "ciano", "cinza", "cinzento", "cobre",
  "coral", "creme", "damasco", "dourado", "escarlate", "esmeralda", "ferrugem",
  "fucsia", "gelo", "grena", "indigo", "jade", "laranja", "lavanda", "lilas",
  "limao", "magenta", "malva", "marfim", "marrom", "mostarda", "musgo",
  "negro", "ocre", "oliva", "orquidea", "ouro", "perola", "pessego", "pinho",
  "prata", "preto", "purpura", "rosa", "roxo", "rubi", "salmao", "sepia",
  "terracota", "tijolo", "turquesa", "uva", "verde", "vermelho", "vinho",
  "violeta", "zarcao",
  // tons compostos
  "azul celeste", "azul marinho", "azul petroleo", "azul royal",
  "rosa bebe", "rosa choque", "rosa claro", "rosa antigo",
  "verde abacate", "verde agua", "verde bandeira", "verde esmeralda",
  "verde limao", "verde militar", "verde musgo", "verde oliva",
  "vermelho sangue", "vermelho cereja", "vermelho ferrari"
];

const frutas = [
  "abacate", "abacaxi", "acai", "acerola", "ameixa", "amora", "araca", "atemoia",
  "bacuri", "banana", "biriba", "buriti", "cacau", "caja", "caju", "cambuci",
  "caqui", "carambola", "cereja", "ciriguela", "coco", "cupuacu", "damasco",
  "duriao", "figo", "framboesa", "fruta-do-conde", "fruta-pao", "goiaba",
  "graviola", "groselha", "guarana", "jabuticaba", "jaca", "jambo", "jenipapo",
  "kiwi", "laranja", "lichia", "limao", "maca", "mamao", "manga", "mangaba",
  "maracuja", "melancia", "melao", "mexerica", "mirtilo", "morango", "nectarina",
  "pequi", "pera", "pessego", "physalis", "pinha", "pitanga", "pitaya", "pupunha",
  "rambuta", "roma", "sapoti", "seriguela", "tamarindo", "tangerina", "tapereba",
  "umbu", "uva"
];

const membrosCorpo = [
  // cabeca e pescoco
  "cabeca", "cabelo", "rosto", "testa", "sobrancelha", "cilios", "olho",
  "nariz", "bochecha", "orelha", "boca", "labio", "dente", "lingua", "queixo",
  "pescoco", "nuca", "garganta",
  // tronco
  "tronco", "peito", "torax", "costas", "ombro", "axila", "barriga", "abdomen",
  "umbigo", "cintura", "quadril",
  // membros superiores
  "braco", "antebraco", "cotovelo", "pulso", "mao", "palma", "dedo",
  "polegar", "indicador", "dedo medio", "anelar", "dedo minimo", "unha",
  // membros inferiores
  "perna", "coxa", "joelho", "canela", "panturrilha", "tornozelo", "pe",
  "calcanhar", "peito do pe", "sola do pe", "dedo do pe",
  // ossos e articulacoes
  "cranio", "mandibula", "clavicula", "coluna vertebral", "vertebra",
  "costela", "esterno", "pelve", "femur", "patela", "tibia", "fibula",
  // orgaos internos e sistemas
  "cerebro", "coracao", "pulmao", "figado", "rim", "estomago", "intestino",
  "pancreas", "baco", "bexiga", "esofago", "traqueia", "musculo", "veia", "arteria"
];

var inputPalavra = document.querySelector('input#inputPalavra')
const gif = document.querySelector('iframe#gif')

function inicio(){
    gif.src = 'https://giphy.com/embed/fk7dcmt3TwgZm0ZE8c'
}

function enviar(){
    const palavra = document.querySelector('input#inputPalavra').value
    if(typeof palavra !== 'string' || palavra.trim() === ''){
        alert('Só aceitamos palavras')
        return;
    }
    const palavraBruta = normalizarPalavra(palavra);
    const categoria = descobrirCategoria(palavraBruta);
    acaoGif(categoria);
    inputPalavra.value = '';
}

function normalizarPalavra(p){
    return p.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function descobrirCategoria(c){
    if(cores.includes(c)){
        return 'cor'
    } else if(frutas.includes(c)){
        return'fruta'
    } else if(membrosCorpo.includes(c)){
        return 'membroCorpo'
    } else{
        return 'desconhecida'
    }
}

function acaoGif(categoria){
    switch(categoria){
        case 'cor':
            gif.src = 'https://giphy.com/embed/7kn27lnYSAE9O'
            break;
        case 'fruta':
            gif.src = 'https://giphy.com/embed/7x5t7Xpmm6nJpqETG6'
            break;
        case 'membroCorpo':
            gif.src = 'https://giphy.com/embed/l0HlMhcc67eLP7oeA'
            break;
        case 'desconhecida':
            gif.src = 'https://giphy.com/embed/G2tytrXJjiZjO'
    }
    setTimeout(inicio, 2000)
}