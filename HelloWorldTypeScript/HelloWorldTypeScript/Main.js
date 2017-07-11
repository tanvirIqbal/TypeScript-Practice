var HelloWorld = (function () {
    function HelloWorld(msg) {
        this.message = msg;
    }
    HelloWorld.prototype.Display = function () {
        alert("Hello " + this.message);
    };
    return HelloWorld;
}());
window.onload = function () {
    var hw = new HelloWorld("World");
    hw.Display();
};
//# sourceMappingURL=Main.js.map