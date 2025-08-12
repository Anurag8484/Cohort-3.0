function callbk(fn) {
    setTimeout(fn, 1000);
}
callbk(function () {
    console.log("Hello Anurag");
});
