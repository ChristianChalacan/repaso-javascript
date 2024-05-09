function isSimilar(obj1, obj2) {
    let objKeys1 = Object.keys(obj1);
    let objKeys2 = Object.keys(obj2);
    if(objKeys1.length === objKeys2.length) {
        for(let key of objKeys1) {
            if(key in obj2) {
                if(obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    else {
        return false;
    }
    return true;
}

let obj1 = { id: 2, name: 'Christian'}
let obj2 = { id: 1, name: 'Christian'}

console.log(isSimilar(obj1, obj2));