//Rest param

function isFullAge(...years){
    years.forEach(cur => console.log(2020 - cur >= 18));
}

isFullAge(2006, 2001, 1980, 1917);