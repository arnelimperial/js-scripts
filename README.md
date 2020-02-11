<h1 align=center>JS-Scripts</h1> 

> Console apps, code snippets and mini-projects written in Javascript/Node JS submitted as a requirement for partial completion of programming course in Metropolia Open Studies and AMKoodari.

---

### Installation

```sh
$ npm install
```

```sh
$ express --view=hbs <project_dir_name>
```

```sh
$ express --view=ejs <project_dir_name>
```

```sh
$ node program.js
```
---

| Exercise Item & Directory         | Description                                             |
|-----------------------------------|---------------------------------------------------------|
| Text Printing (console-function)  | Using console.log function and OOP                      | 
| Arithmetic Operation (arithmetic) | Performs basic arithmetic                               |
| Return value (return-value1)      | Return the highest number from the array                |
| Return value (return-value2)      | Return conditional statement based on user input        |
| Reverse structure (reverse)       | Printing odd number between 1 - 10                      |
| Prime numbers (prime)             | Printing prime numbers with for loop                    |
| Editing Element Content(innerHTML)| Modifying element content                               |
| Function Call (func-call)         | Calling method from web page                            |
| Function (program.js)             | Basic JS Function(Parameters and return value)          |
| Object(program.js)                | Creating JS Object (Object Literal)                     |
| Array Method(program.js)          | Basic usage of some of the array built-in functions     |
| Repetition (program.js)           | Repetition & Higher Order Function                      |
| Object2 (program.js)              | Compairing Objects                                      |
| Regular Expression(program.js)    | Using match in RegExp                                   |
| Module(program.js)                | Using module in JS                                      |




---

### Serve
To serve in the browser

```sh
$ npm start
```

```sh
$ node program.js
```

To run in the terminal(For branch with TS)
```sh
$ tsc --init
$ tsc
$ tsc program.js

```
----

### Problem
Teoriassa oli esimerkki kauppajärjestelmästä ja sen ostoskori-moduulista. Aiemmin on myös luotu Henkilö- sekä Asiakas-olioita. Luo kaupalle asiakasrekisteri-moduuli, johon Asiakkaiden tietoja tallennetaan ja josta niitä voi hakea.

Moduulin toiminnot ovat seuraavat:

lisaa(etunimi, sukunimi). ID luodaan kullekin asiakkaalle automaattisesti kasvavassa järjestyksessä alkaen luvusta 0.

asiakkaanTiedot(id). Haetaan ID:n perusteella asiakas ja tulostetaan hänen nimensä. Tässä voi käyttää Henkilö:stä perittyä nimi-metodia. Jos ID:tä ei ole olemassa, toisin sanoen asiakkaita ei ole vielä lisätty niin montaa, tulostetaan "Liian korkea ID!".

asiakasLista(). Tulostetaan kaikkien asiakkaiden tiedot muodossa [ID]: [Sukunimi] [Etunimi].

*Expected Output*
Liian korkea ID!
Lisätty asiakas ID:llä 0
Lisätty asiakas ID:llä 1
1: Huippukoodari Hanna
Lisätty asiakas ID:llä 2
Lisätty asiakas ID:llä 3
Tulostetaan kaikki asiakkaat:
0: Meikäläinen Matti
1: Huippukoodari Hanna
2: Leppä Kerttu
3: Hillo Simo

---

### Coder:
[Arnel Imperial](https://arnelimperial.com)
