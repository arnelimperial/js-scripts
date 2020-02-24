class Element{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;

    }
}

class Park extends Element{
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;

    }

    treesDensity(){
        const density = this.numTrees/this.area;
        console.log(`The ${this.name} has a tree density of ${density} per square km.`);
    }
}

class Street extends Element{
    constructor(name, buildYear, streetLenght, size=3){
        super(name, buildYear);
        this.streetLenght = streetLenght;
        this.size = size;
    }
    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`The ${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);

    }
}

const allParks = [
    new Park('Green Park',1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949),
];

const allStreets = [
    new Street('Ocean Ave', 1989, 1.1, 4),
    new Street('Evergreen St', 2008, 2.7, 2),
    new Street('4th St', 2005, 0.8),
    new Street('Sunset Blvd.', 1982, 2.5, 5),


];

function calc(arr){
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    return [sum, sum/arr.length];

}

function reportParks(p){
    console.log('----- Parks Report -----');

    //Density
    p.forEach(element => {
        element.treesDensity();
        
    });

    //Ave.age
    const ages = p.map(element => new Date().getFullYear() - element.buildYear);
    const [totalAges, aveAge] = calc(ages);
    console.log(`Our ${p.length} parks has an average age of ${aveAge} years`);

    //Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >=1000);
    console.log(`${p[i].name} has more than 1000 tress.`);

}

function reportStreets(s){
    //Total and average length of town's street
    let length = s.map(el => el.streetLenght);
    const [totalLength, AveLength] = calc(length);
    console.log(`Our ${s.length} streets has a total length of ${totalLength} km, with an average of ${AveLength} km.`);

    //Classify the sizes
    s.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);