let markArray = [];
function arrayInit(quantity) {
    quantity = +prompt('Nhập vào số lượng của điểm có trong mảng');
    for (let i = 0; i < quantity; i++) {
        markArray.push(+prompt('Nhập vào điểm thứ ' + (i + 1)));
    }
    return markArray;
}

function findMax(needToCheckArray) {
    let max = needToCheckArray[0];
    for (let i = 1; i < needToCheckArray.length; i++) {
        if (max < needToCheckArray[i]) {
            max = needToCheckArray[i];
        }
    }
    return max;
}

function display(array) {
    document.write('Mảng điểm là ' + array+'<br>');
    document.write('Giá trị lớn nhất trong mảng là '+findMax(array));
}

arrayInit();
display(markArray);

