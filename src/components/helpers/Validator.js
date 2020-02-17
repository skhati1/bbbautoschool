export default function Validate(dictionary) {
    var invalidItems = []
    for(var index in dictionary) {
        console.log('Index ' + index)
    }
    Object.keys(dictionary).forEach(function(key) {
        if(dictionary[key].length < 1) {
            invalidItems.push(key)
        }
        if(key.toString().startsWith("Agree")){
            if(dictionary[key] == false) {
                if(invalidItems.indexOf(key) == -1) {
                    invalidItems.push(key)
                }
            }
         }
    });
    if(invalidItems){
        return [false, invalidItems]
    } else {
        return [true, invalidItems]
    }
}