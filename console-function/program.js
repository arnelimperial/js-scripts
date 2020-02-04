//Defining class using ES6
class Text{
    // Constructor
    constructor(text){
        this.text = text;
    }

    retrieveText(){
        return (`Hello ${this.text}!`)
    }

}

//Instance of Text object
const msg = new Text('World');

console.log(msg.retrieveText());

