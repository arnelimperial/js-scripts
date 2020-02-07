
array1 = ['A'];
array2 = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

function arrayMethods(){
    if(array2.indexOf(5) > -1){
            
        var str2 = array2.join(',');
        array2.unshift(array2[2]);
        array2.pop(array2[3]);
        var arr = array1.concat(array2);
        var arr_join = arr.join(',');
        var str1 = array1.join(',');

        console.log('Taulukko 1: '+ str1);
        console.log('Taulukko 2: '+ str2);
        console.log('Lopputulos: '+  arr_join);
    }else if(array2.indexOf('B') > -1){
        
        var str1 = array1.join(',');
        var str2 = array2.join(',');
        
        var arr1 = [], arr2 = [];
        
        //var ix = array2.length - 1;
        l = array2.length;
        var i, c=l;
        
        
        
        for(i=0;i < l; ++i){
        
            c--;
        }
        var a = array2.pop(array2[l - 1]);
        arr1.push(a);
        arr1.push(array2[c]);
        
        var a = array2.pop(array2[l - 1]);
        arr1.push(a);
        arr1.push(array2[c+1]);
        
        
        var a = array2.pop(array2[l - 1]);
        arr1.push(a);
        arr1.push(array2[c+2]);
        
        var a = array2.pop(array2[l - 1]);
        arr1.push(a);
        arr1.push(array2[c+3]);
        
        //console.log(arr1);
        var arr = array1.concat(arr1);
        var arr_join = arr.join(',');
        
        console.log('Taulukko 1: '+ str1);
        console.log('Taulukko 2: '+ str2);
        console.log('Lopputulos: '+  arr_join);

        
    }else if(array2.indexOf('!') > -1){
        
        var str2 = array2.join(',');
        array2.unshift(array2[2]);
        array2.pop(array2[3]);
        var arr = array1.concat(array2);
        var arr_join = arr.join(',');
        var str1 = array1.join(',');
            
        console.log('Taulukko 1: '+ str1);
        console.log('Taulukko 2: '+ str2);
        console.log('Lopputulos: '+  arr_join);
        
        
    }else if(array2.indexOf('kolmas') > -1){
        
        var str2 = array2.join(',');
        array2.unshift(array2[1]);
        array2.pop(array2[2]);
        var arr = array1.concat(array2);
        var arr_join = arr.join(',');
        var str1 = array1.join(',');

        console.log('Taulukko 1: '+ str1);
        console.log('Taulukko 2: '+ str2);
        console.log('Lopputulos: '+  arr_join);
        
    }

}

arrayMethods();