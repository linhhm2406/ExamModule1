let numberArray = [];

function arrayInit(quantity) {
    quantity = +prompt('Nhập vào số lượng số nguyên trong mảng');
    for (let i = 0; i < quantity; i++) {
        numberArray.push(+prompt('Nhập vào số nguyên thứ ' + (i + 1)));
    }
    return numberArray;
}

arrayInit();

function tryRemoveFromArray(X_number, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === X_number) {
            array.splice(i, 1);
        }
    }
    return array;
}

function display(array) {
    document.write("Mảng số nguyên đã nhập là :" + array + "<br>");
    let X = +prompt('Nhập số X muốn tìm trong mảng');
    document.write("Số X cần tìm là :" + X + "<br>");
    if (array.indexOf(X) === -1) {
        document.write('X không có trong mảng' + '<br>');
        document.write('Mảng không bị loại bỏ phần tử nào. Mảng giữ nguyên là :' + tryRemoveFromArray(X, array));
    } else {
        document.write('X có trong mảng' + '<br>');
        document.write('Giá trị của mảng sau khi loại bỏ X là :' + tryRemoveFromArray(X, array));
    }
}

display(numberArray);