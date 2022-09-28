const array1 = ['a', 'd', 'b', 'c'];

array1.every(element => {
    if (element == 'b') return false; // break;
    console.log(element);
    return true; // continue
});

