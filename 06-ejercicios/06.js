let obj1 = { id: 1, name: 'Christian' }

function doDifficultCopy(obj) {
    let resultObj = {}
    for(let data in obj) {
        resultObj[data] = obj[data]
    }
    return resultObj;
}

function doCopy(obj) {
    return { ...obj }
}

let obj2 = doCopy(obj1);
let obj3 = doDifficultCopy(obj1);
console.log({obj1, obj2, obj3});