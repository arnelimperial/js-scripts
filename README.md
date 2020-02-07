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
| Object(program.js)                | Creating JS Object (Object Literal)                     |
| Array Methods (program.js)        | Basic usage of some array prototype methods             |




---

### Serve
To serve in the browser

```sh
$ npm start
```

---

### Problem
Kirjoita funktio popAndShift(). Funktion tulee ensin tulostaa taulukoiden array1 ja array2 sisällöt. Tämän jälkeen, array2:sta poistetaan vuorotellen .pop()- ja .shift()-metodeja käyttäen alkioita, lisäten ne array1:n loppuun. Lopussa tulostetaan array1:n sisältö.

Huom! Automaattitesti hoitaa arvojen alustamisen taulukoihin.

Type popAndShift (). The function must first print the contents of tables1 and array2. After that, array2 is removed alternately using the .pop () and .shift () methods, adding elements to the end of array1. At the end, the contents of array1 are printed.

NB! An automated test takes care of initializing values ​​into tables.

*Expected Output*
```sh
Taulukko 1: A
Taulukko 2: B,C,D,E,F,G,H,I
Lopputulos: A,I,B,H,C,G,D,F,E

```

---


### License
Zlib

---

### Coder:
[Arnel Imperial](https://arnelimperial.com)
