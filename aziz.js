let feet = document.getElementById("feet");

let inch = document.getElementById("inch")

feet.addEventListener("input", function () {
    let f = this.value;
    let i = f * 12;
    inch.value = i;
});