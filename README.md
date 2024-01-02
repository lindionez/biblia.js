<p align="center">
  <img src="https://sercristaosempre.files.wordpress.com/2014/02/bc3adblia-sagrada-traduc3a7c3a3o-almeida.jpg" alt="shinoa" />
</p>

<div align="center">
<h2> BÍBLIA-SAGRADA </h2>
</div>
<div align="center">
<h4> ▪Add the bible in your javascript project! </h4>
</div>

## Installation
> npm install biblia.js

## ```SEARCH```
```js
const biblia = require('biblia.js')

// Return the entire requested chapter.
const capitulo = biblia.getCapitulo('salmos', '23')
console.log(capitulo) 
{
  status: true,
  nome: 'Salmos',
  capitulo: '23',
  escrita: '*1:* O SENHOR é o meu pastor, nada me faltará.\n' +
    '*2:* Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas.\n' +
    '*3:* Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.\n' +
    '*4:* Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.\n' +
    '*5:* Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.\n' +
    '*6:* Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias.\n'
}


// Return the entire requested chapter in array.
const capituloArray = biblia.getCapitulo('salmos', '23', false)
console.log(capituloArray)
{
  status: true,
  nome: 'Salmos',
  capitulo: '23',
  escrita: [
    'O SENHOR é o meu pastor, nada me faltará.',
    'Deitar-me faz em verdes pastos, guia-me mansamente a águas tranqüilas.',
    'Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.',
    'Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.',
    'Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.',
    'Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias.'
  ]
}


// Return the requested verse.
const versiculo = biblia.getVersiculo('salmos', '23:1')
console.log(versiculo)
{
  status: true,
  nome: 'Salmos',
  capitulo: '23',
  versiculo: '1',
  escrita: 'O SENHOR é o meu pastor, nada me faltará.'
}


// Returns a random verse where the word is inclu
const pesquisar = biblia.pesquisar('mandamentos')
console.log(pesquisar)
{
  status: true,
  nome: 'Eclesiastes',
  capitulo: '12',
  versiculo: '13',
  escrita: 'De tudo o que se tem ouvido, o fim é: Teme a Deus, e guarda os seus mandamentos; porque isto é o dever de todo o homem.'
}

// Returns an array of all found locations.
const pesquisarArray = await biblia.pesquisarPalavra('mandamentos')
console.log(pesquisarArray)
[
  { livro: 'Êxodo', capitulo: 15, versiculo: 26 },
  { livro: 'Êxodo', capitulo: 16, versiculo: 28 },
  { livro: 'Êxodo', capitulo: 20, versiculo: 6 },
  { livro: 'Êxodo', capitulo: 24, versiculo: 12 },
  { livro: 'Êxodo', capitulo: 34, versiculo: 28 },
  { livro: 'Levítico', capitulo: 4, versiculo: 2 },
  { livro: 'Levítico', capitulo: 4, versiculo: 13 },
  { livro: 'Levítico', capitulo: 4, versiculo: 22 },
  { livro: 'Levítico', capitulo: 4, versiculo: 27 },
  { livro: 'Levítico', capitulo: 5, versiculo: 17 },
  { livro: 'Levítico', capitulo: 22, versiculo: 31 },
  { livro: 'Levítico', capitulo: 26, versiculo: 3 },
  { livro: 'Levítico', capitulo: 26, versiculo: 14 },
  { livro: 'Levítico', capitulo: 26, versiculo: 15 },
  { livro: 'Levítico', capitulo: 27, versiculo: 34 },
  { livro: 'Números', capitulo: 15, versiculo: 22 },
  { livro: 'Números', capitulo: 15, versiculo: 39 },
  { livro: 'Números', capitulo: 15, versiculo: 40 },
  { livro: 'Números', capitulo: 36, versiculo: 13 },
  { livro: 'Deuteronômio', capitulo: 4, versiculo: 2 },
  { livro: 'Deuteronômio', capitulo: 4, versiculo: 13 },
  { livro: 'Deuteronômio', capitulo: 4, versiculo: 40 },
  { livro: 'Deuteronômio', capitulo: 5, versiculo: 10 },
  { livro: 'Deuteronômio', capitulo: 5, versiculo: 29 },
  { livro: 'Deuteronômio', capitulo: 5, versiculo: 31 },
  { livro: 'Deuteronômio', capitulo: 6, versiculo: 1 },
  { livro: 'Deuteronômio', capitulo: 6, versiculo: 2 },
  { livro: 'Deuteronômio', capitulo: 6, versiculo: 17 },
  { livro: 'Deuteronômio', capitulo: 6, versiculo: 25 },
  { livro: 'Deuteronômio', capitulo: 7, versiculo: 9 },
  ... 141 more items
]

```

## ```RANDOM```
```js
const biblia = require('biblia.js')

// Return a random chapter.
const capitulo = await biblia.getRandomCapitulo()
console.log(capitulo)
{
  status: true,
  nome: 'Filemom',
  capitulo: 1,
  escrita: [
    'Paulo, prisioneiro de Jesus Cristo, e o irmão Timóteo, ao amado Filemom, nosso cooperador,',
    'E à nossa amada Áfia, e a Arquipo, nosso camarada, e à igreja que está em tua casa:',
    'Graça a vós e paz da parte de Deus nosso Pai, e do Senhor Jesus Cristo.',
    'Graças dou ao meu Deus, lembrando-me sempre de ti nas minhas orações;',
    'Ouvindo do teu amor e da fé que tens para com o Senhor Jesus Cristo, e para com todos os santos;',
    'Para que a comunicação da tua fé seja eficaz no conhecimento de todo o bem que em vós há por Cristo Jesus.',
    'Porque temos grande gozo e consolação do teu amor, porque por ti, ó irmão, as entranhas dos santos foram recreadas.',
    'Por isso, ainda que tenha em Cristo grande confiança para te mandar o que te convém,',
    'Todavia peço-te antes por amor, sendo eu tal como sou, Paulo o velho, e também agora prisioneiro de Jesus Cristo.',
    'Peço-te por meu filho Onésimo, que gerei nas minhas prisões;',
    'O qual noutro tempo te foi inútil, mas agora a ti e a mim muito útil; eu to tornei a enviar.',
    'E tu torna a recebê-lo como às minhas entranhas.',
    'Eu bem o quisera conservar comigo, para que por ti me servisse nas prisões do evangelho;',
    'Mas nada quis fazer sem o teu parecer, para que o teu benefício não fosse como por força, mas, voluntário.',
    'Porque bem pode ser que ele se tenha separado de ti por algum tempo, para que o retivesses para sempre,',
    'Não já como servo, antes, mais do que servo, como irmão amado, particularmente de mim, e quanto mais de ti, assim na carne como no Senhor?',
    'Assim, pois, se me tens por companheiro, recebe-o como a mim mesmo.',
    'E, se te fez algum dano, ou te deve alguma coisa, põe isso à minha conta.',
    'Eu, Paulo, de minha própria mão o escrevi; eu o pagarei, para te não dizer que ainda mesmo a ti próprio a mim te deves.',
    'Sim, irmão, eu me regozijarei de ti no Senhor; recreia as minhas entranhas no Senhor.',
    'Escrevi-te confiado na tua obediência, sabendo que ainda farás mais do que digo.',
    'E juntamente prepara-me também pousada, porque espero que pelas vossas orações vos hei de ser concedido.',
    'Saúdam-te Epafras, meu companheiro de prisão por Cristo Jesus,',
    'Marcos, Aristarco, Demas e Lucas, meus cooperadores.',
    'A graça de nosso Senhor Jesus Cristo seja com o vosso espírito. Amém.'
  ]
}


// Return a random verse.
const versiculo = biblia.getRandomVersiculo()
console.log(versiculo)
{
  status: true,
  nome: 'Deuteronômio',
  capitulo: 25,
  versiculo: 1,
  escrita: 'Quando houver contenda entre alguns, e vierem a juízo, para que os julguem, ao justo justificarão, e ao injusto condenarão.'
}

```