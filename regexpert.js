//REGEX tester

function huh(e) {
    try {
        addingText();
        var flags = "",
            fi = document.querySelectorAll('[name="flags"]:checked');
        for (var i = 0; i < fi.length; i++) {
            flags += fi[i].value;
        }

        var reg = new RegExp(document.getElementById('reg').innerHTML, flags);

        document.getElementById('test').innerHTML = reg.test(document.getElementById('val').innerHTML);
        document.getElementById('blah').innerHTML = document.getElementById('val').innerHTML.match(reg);
        val.innerHTML = val.innerHTML.replace(reg, '<colt>$&</colt>');

        document.getElementById('err').innerHTML = "";
    }
    catch (err) {
        var message = err.arguments ? err.arguments[1] : err;
        document.getElementById('err').innerHTML = message;
    }
    windowResize();
}

function addingText() {
    var val = document.getElementById('val');
    val.innerHTML = val.innerHTML.replace(/<[\/]?(colt|font).*?>/gi, '');
}

function windowResize() {
    var val = document.getElementById('val'),
        output = document.getElementById('blah'),
        refCont = document.getElementById('refContainer');
    getHeight(val);
    getHeight(output);
    getHeight(refCont);
}

function getHeight(elem) {
    elem.style.height = (document.documentElement.offsetHeight - elem.getBoundingClientRect().top - 5) + "px";
}

function refHandler() {
    var rc = this.querySelector('#refContainer');
    rc.style.display = rc.style.display === 'block' ? "none" : "block";
    getHeight(rc);
}