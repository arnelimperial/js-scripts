var lause: string = 'J07ku7 k1rj01774v47 54n0j4 num3r0174 kay77a3n.';

function tulostaNumerot(){ 
    let pattern = /[0-9]/g;
    let result: any = lause.match(pattern);
    if(!result){
        console.log("Ei Numeroita!");
    }else{
        console.log(result);
    }
}

tulostaNumerot();

