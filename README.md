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

---

### Serve
To serve in the browser

```sh
$ npm start
```

---

### Problem
Täydennä koodiin funktiot noudaArvo() sekä laskePotenssi(). Funktion noudaArvo() tulee hakea annetun parametrin mukaisesta HTML-tekstisyöte-elementistä arvo ja palauttaa se. Funktion laskePotenssi() tulee laskea ja palauttaa annettujen parametrien mukainen luku. Huomaa, että kaikki tulostaminen tulee tapahtua jo valmiiksi toteutetun funktion sisällä.

Vinkki: Jos eksponentti on 0, tulos on kannasta riippumatta 1. Jos eksponentti on negatiivinen, tulos on luvun potenssin käänteisluku (1 / tulos).

Kannattaa myös pitää mielessä, että return-käskyyn törmätessä poistutaan välittömästi funktiosta, jossa siihen törmättiin.


Complete the functions nuodaArvo() and laskePotenssi() in the code. The nuodaArvo() function must retrieve and return a value from the HTML text input element of the given parameter. Calculate the laskePotenssi() should calculate and return a number corresponding to the given parameters. Note that all printing must be done within a function already implemented.

Hint: If the exponent is 0, the result is 1. Whatever the base, the result is the inverse of the number's power (1 / result).

It is also worth bearing in mind that when you hit a return statement, you immediately exit the function that encountered it.


*Example output:*
```sh
Luku 3 potenssiin 4 on:
81
```
---

### License
Zlib

---

### Coder:
[Arnel Imperial](https://arnelimperial.com)
