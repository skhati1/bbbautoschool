export default function Validate(dictionary) {
    var invalidItems = []
    for(var key in dictionary) {
        if(dictionary[key].length < 1) {
            invalidItems.push(key)
        }
    }
    if(invalidItems){
        return [false, invalidItems]
    } else {
        return [true, invalidItems]
    }
}