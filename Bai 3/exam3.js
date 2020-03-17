let fibonacciArray = [1, 1];
limit = +prompt('Nhập vào giới hạn dãy Fabonacci cần kiểm tra');

function fibonacciArrayInit(array) {
    for (let i = 2; i <= limit; i++) {
        array[i] = array[i - 1] + array[i - 2];
        array.push(array[i]);
    }
    return array;
}

fibonacciArrayInit(fibonacciArray);

function isFibonacci(X_number, array) {
    if (array.indexOf(X_number) !== -1) {
        return true;
    }
}

function display(array) {
    let X_number = +prompt('Nhập vào số X cần kiểm tra');
    if (isFibonacci(X_number, array)) {
        document.write('Dãy fabonacci là :' + fibonacciArray + '<br>');
        document.write('Số ' + X_number + ' có trong dãy' + '<br>');
        document.write('Kết quả là : true');
    } else {
        document.write('Dãy fabonacci là :' + fibonacciArray + '<br>');
        document.write('Số ' + X_number + ' không có trong dãy' + '<br>');
        document.write('Kết quả là : False');
    }
}

display(fibonacciArray);