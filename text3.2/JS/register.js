let registerForm = document.querySelector('.input-');
let accountErrorTip = document.getElementById('account_error');
let emailErrorTip = document.getElementById('email_error');
let phoneNoErrorTip = document.getElementById('phone_error');
let passwordErrorTip = document.getElementById('password_error');
let repwErrorTip = document.getElementById('repw_error');


let borderAccount = document.querySelector('.input_ac');
let borderEmail = document.querySelector('.input_em');
let borderPhone = document.querySelector('.input_ph');
let borderPassword = document.querySelector('.input_pw');
let borderRepw = document.querySelector('.input_repw');


document.getElementById('account').addEventListener('blur', blurAccount);
document.getElementById('email').addEventListener('blur', blurEmail);
document.getElementById('phone').addEventListener('blur', blurPhone);
document.getElementById("password").addEventListener('blur', blurPassword);
document.getElementById("repw").addEventListener('blur', blurRepw);

function blurAccount() {
    //数字或字母或下划线且在5-20个字符间
    var reg = /^[a-zA-Z0-9_]{4,20}$/;
    var valueInput = document.querySelector('#account').value;
    if (valueInput == '' || valueInput == null || valueInput.length == 0) {
        borderAccount.classList.add('border-error');
        accountErrorTip.innerHTML = '输入不能为空';
        return false;
    } else if (valueInput.length < 4 || valueInput.length > 20) {
        borderAccount.classList.add('border-error');
        accountErrorTip.innerHTML = '用户名长度为4 - 20个字符';
        return false;
    } else if (!reg.test(valueInput)) {
        borderAccount.classList.add('border-error');
        accountErrorTip.innerHTML = '用户名为字母或数字或下划线或三个混合组成';
        return false;
    } else {
        borderAccount.classList.remove('border-error');
        accountErrorTip.innerHTML = '';
        return true;
    }
}

function blurEmail() {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var valueInput = document.querySelector('#email').value;
    if (valueInput == '' || valueInput == null) {
        borderEmail.classList.add('border-error');
        emailErrorTip.innerHTML = '输入不能为空';
        return false;
    } else if (!reg.test(valueInput)) {
        borderEmail.classList.add('border-error');
        emailErrorTip.innerHTML = '输入错误,请输入正确格式的邮箱';
        return false;
    } else {
        borderEmail.classList.remove('border-error');
        emailErrorTip.innerHTML = '';
        return true;
    }
}

function blurPhone() {
    var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var valueInput = document.querySelector('#phone').value;
    if (valueInput == '' || valueInput == null) {
        borderPhone.classList.add('border-error');
        phoneNoErrorTip.innerHTML = '输入不能为空';
        return false;
    } else if (!reg.test(valueInput)) {
        borderPhone.classList.add('border-error');
        phoneNoErrorTip.innerHTML = '请输入符合要求的电话号码';
        return false;
    } else {
        borderPhone.classList.remove('border-error');
        phoneNoErrorTip.innerHTML = '';
        return true;
    }
}

function blurPassword() {
    //reg：使用断言
    //不能全部用字母，不能全部用数字，不能全部用特殊字符，不能只有字母与数字，不能只能有字母与特殊字符，不能只能有数字与特殊字符
    //可以是字母+数字+特殊字符。
    var reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
    var regNumber = /[^\d]/g; //不存在数字
    var regLetter = /[^a-zA-Z]/g; //不存在字母
    var valueInput = document.querySelector('#password').value;
    if (valueInput == '' || valueInput == null || valueInput.length == 0) {
        borderPassword.classList.add('border-error');
        passwordErrorTip.innerHTML = '输入不能为空';
        return false;
    } else if (isrepeat(valueInput)) {
        borderPassword.classList.add('border-error');
        passwordErrorTip.innerHTML = '密码不能为相同字符';
        return false;
    } else if (valueInput.length < 8 || valueInput.length > 20) {
        borderPassword.classList.add('border-error');
        passwordErrorTip.innerHTML = '密码长度为8-20个字符';
        return false;
    } else if (!regNumber.test(valueInput)) { //只存在数字
        borderPassword.classList.add('border-error');
        passwordErrorTip.innerHTML = '密码不能为纯数字';
        return false;
    } else if (!regLetter.test(valueInput)) { //只存在字母
        borderPassword.classList.add('border-error');
        passwordErrorTip.innerHTML = '密码不能为纯字母';
        return false;
    } else if (reg.test(valueInput)) {
        borderPassword.classList.add('border-error');
        passwordErrorTip.innerHTML = '请输入符合要求的密码';
        return false;
    } else {
        borderPassword.classList.remove('border-error');
        passwordErrorTip.innerHTML = '';
        return true;
    }
}

function blurRepw() {
    var valuePwd = document.querySelector('#password').value,
        valueRepw = document.querySelector('#repw').value;
    if (valueRepw == '' || valueRepw == null) {
        borderRepw.classList.add('border-err');
        repwErrorTip.innerHTML = '输入不能为空';
        return false;
    } else if (valuePwd !== valueRepw) {
        borderRepw.classList.add('border-err');
        repwErrorTip.innerHTML = '密码不一致，请重新输入';
        return false;
    } else {
        borderRepw.classList.remove('border-err');
        repwErrorTip.innerHTML = '';
        return true;
    }
}

function isrepeat(value) {
    let result = 0;
    let first = value[0];
    for (var i = 1; i < value.length; i++) {
        if (value.charAt(i) === first) {
            result++;
        }
    }
    if (result === value.length) {
        return true;
    }
    return false;
}

document.onclick = (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('img')) {
        change_password(e.target);
    }
    // if (e.target.classList.contains('submit')) {

    // }
}

function change_password(node) {
    // let m = e.target;
    let d = node.parentNode;
    let m = d.firstElementChild;
    // console.log(m);
    console.log(d);
    console.log(m);
    if (node.classList.contains('checking')) {
        node.style.backgroundImage = "url(../IMAGE/xpwd.png)"
        d.firstElementChild.type = "password";
        node.classList.remove('checking');
    } else {
        node.style.backgroundImage = "url(../IMAGE/pwd.png)";
        d.firstElementChild.type = "text";
        node.classList.add('checking');
    }
}