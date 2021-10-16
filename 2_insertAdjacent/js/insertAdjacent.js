function insertBeforeBegin() {
    let p = document.getElementById("field1");
    p.insertAdjacentHTML("beforebegin", "До тега ")
    // p.insertAdjacentText("beforebegin", "До тега ")
}

function insertAfterBegin() {
    const p = document.getElementById("field1");
    p.insertAdjacentHTML("afterbegin", "В теге до текста ")
    // p.insertAdjacentText("afterbegin", "В теге до текста ")
}

function insertBeforeEnd() {
    const p = document.getElementById("field1");
    p.insertAdjacentHTML("beforeend", " в теге после текста")
    // p.insertAdjacentText("beforeend", " в теге после текста")
}

function insertAfterEnd() {
    const p = document.getElementById("field1");
    p.insertAdjacentHTML("afterend", " после тега")
    // p.insertAdjacentText("afterend", " после тега")
}