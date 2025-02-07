function addition() {
    let add1 = document.getElementById('first-number').value;
    let add2 = document.getElementById('second-number').value;
    add1 = Number(add1);
    add2 = Number(add2);

    let ans = add1 + add2;


    document.getElementById('result').innerHTML = String(ans);

    if (ans < 0) {
        document.getElementById('result').style.color = 'red';
    }else {
        document.getElementById('result').style.color = '#8a728a'; //reset color back to original
    }
}
function sub() {
    let sub1 = document.getElementById('first-number').value;
    let sub2 = document.getElementById('second-number').value;
    sub1 = Number(sub1);
    sub2 = Number(sub2);

    let ans = sub1 - sub2;

    document.getElementById('result').innerHTML = String(ans);

    if (ans < 0) {
        document.getElementById('result').style.color = 'red';
    }else {
        document.getElementById('result').style.color = '#8a728a';
    }
}

function mul() {
    let mul1 = document.getElementById('first-number').value;
    let mul2 = document.getElementById('second-number').value;
    mul1 = Number(mul1);
    mul2 = Number(mul2);

    let ans = mul1 * mul2;

    document.getElementById('result').innerHTML = String(ans);

    if (ans < 0) {
        document.getElementById('result').style.color = 'red';
    }else {
        document.getElementById('result').style.color = '#8a728a';
    }
}

function div() {
    let div1 = document.getElementById('first-number').value;
    let div2 = document.getElementById('second-number').value;
    div1 = Number(div1);
    div2 = Number(div2);

    let ans = div1 / div2;

    document.getElementById('result').innerHTML = String(ans);

    if (ans < 0) {
        document.getElementById('result').style.color = 'red';
    } else {
        document.getElementById('result').style.color = '#8a728a';
    }
}
function power() {
    let pow1 = document.getElementById('first-number').value;
    let pow2 = document.getElementById('second-number').value;
    pow1 = Number(pow1);
    pow2 = Number(pow2);

    let ans = 1;
    let i;
    for (i = 0; i <= Math.abs(pow2); i++) { //to accommodate for negative powers
        ans *= pow1;
    }
    if (pow2 < 0) { //to accommodate for negative powers
        ans = 1 / ans;
    }
    if (pow1 === 0) {
        ans = 1;
    }
    document.getElementById('result').innerHTML = String(ans);

    if (ans < 0) {
        document.getElementById('result').style.color = 'red';
    } else {
        document.getElementById('result').style.color = '#8a728a';
    }
}
function clearentry() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("result").innerHTML = "";
}
