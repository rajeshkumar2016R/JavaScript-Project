let textBox = document.getElementById("textbox");

textBox.addEventListener("input", function () {
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let clean = words.filter(function(el){
        return el != "";
    });
    document.getElementById("word").innerHTML = clean.length;
});

