class HelloWorld
{
    message: string;
    constructor(msg: string)
    {
        this.message = msg;
    }

    Display()
    {
        alert("Hello "+this.message);
    }
}

window.onload = function ()
{
    var hw = new HelloWorld("World");
    hw.Display();
}