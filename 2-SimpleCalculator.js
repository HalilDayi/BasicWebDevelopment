
let mathStr = localStorage.getItem('result') || null;
let usrMathStr = ' ';
let result;
let delCounter = 1;
let resPar = document.querySelector('.js-p');
resPar.innerHTML = `The previous result is : ${mathStr}`;
function calculate(element) {
    if (element.innerText != '=') {
        if (usrMathStr.length == 1 && (element.innerText == '*' || element.innerText == '/')) {
            alert('You can\t start an expression with \* or \/. \n Please enter valid format!');
            return;
        }
        if (element.classList.contains('operator') && check()) {
            alert('Error! You can\'t use two operator consecutively.\n Try Again!');
            return;
        }
        usrMathStr += element.innerText;
        resPar.innerHTML = usrMathStr;
    }
    else {
        if (check()) {
            alert('Error! You can\'t calculate an expression ends with an operator.\n Please delete the operator to calculate the result!');
            return;
        }
        result = eval(usrMathStr);
        resPar.innerHTML = `The result is : ${result}`;
        localStorage.setItem('result', JSON.stringify(result));
    }
}
function check() {
    if (usrMathStr[usrMathStr.length - 1].includes('+'))
        return 1;
    else if (usrMathStr[usrMathStr.length - 1].includes('-'))
        return 1;
    else if (usrMathStr[usrMathStr.length - 1].includes('*'))
        return 1;
    else if (usrMathStr[usrMathStr.length - 1].includes('/'))
        return 1;
}
function del() {
    let usrMathStr2 = usrMathStr.split('');
    usrMathStr2.pop();
    usrMathStr = '';
    for (let i = 0; i < usrMathStr2.length; i++) {
        usrMathStr += usrMathStr2[i];
    }
    resPar.innerHTML = usrMathStr;
}
