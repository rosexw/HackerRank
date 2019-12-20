let res = document.getElementById('res');

function clickZero() {
    res.innerHTML += '0';
}

function clickOne() {
    res.innerHTML += '1';
}

function clickClr() {
    res.innerHTML = '';
}

function clickSum() {
    res.innerHTML += '+';
}

function clickSub() {
    res.innerHTML += '-';
}

function clickMul() {
    res.innerHTML += '*';
}

function clickDiv() {
    res.innerHTML += '/';
}

function clickEql () {
    res.innerHTML = Math.floor(eval(res.innerHTML.replace(/\d+/g, function(str) {return parseInt(str, 2)}))).toString(2);
}