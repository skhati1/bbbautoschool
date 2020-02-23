export default function Validate(dictionary) {
    var invalidItems = []
    for(var index in dictionary) {
        if(dictionary[index].length < 1) {
            invalidItems.push(index)
        }
        if(index.startsWith("Agree")) {
            if(dictionary[index] === false){
                console.log("invalid for" + index);
                invalidItems.push(index)
            }
        }
    }
    console.log(invalidItems);
    return invalidItems;
}