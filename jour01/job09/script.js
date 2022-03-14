var asc = function(a, b){
    return a > b;
}
var desc = function(a, b){
    return a < b;
}

function tri(numbers, order){
    for (var i = 0 ; i < numbers.length; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (order(numbers[i], numbers[j])) {
                var temp = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = temp;
            }
        }
    }
    return numbers;
}
tableau = [22, 41, 63, 88, 12, 35, 54, 75, 97];
console.log(tri(tableau, asc));