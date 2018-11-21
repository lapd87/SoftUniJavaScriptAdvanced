function makeIterable(obj){
    let keys = [...Object.keys(obj)].sort();
    let index = keys.length - 1;

    return {
        next: function () {
            if(index >= 0){
                return {
                    value: keys[index--],
                    done: false
                };
            } else {
                return{
                    done: true
                };
            }
        }
    }
}


let obj = {age: 27, name: "pesho", book: "Lord of the Rings"};
let iterator = makeIterable(obj);
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
}
