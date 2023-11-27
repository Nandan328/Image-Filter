var image;
var canvas1;
var canvas2;

function upload()
{
    canvas1 = document.getElementById("canvas1");
    var imgFile = document.getElementById("fileInput");
    image = new SimpleImage(imgFile);
    image.drawTo(canvas1);
}
function purpleFilter()
{
    canvas2 = document.getElementById("canvas2");
    var purpleImage=image;
    for (var pixel of purpleImage.values())
    {
        pixel.setGreen(0); 
    }
    purpleImage.drawTo(canvas2);
}
function greyFilter() 
{
    canvas2 = document.getElementById("canvas2");
    var greyImage = image;
    for (var pixel of greyImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setGreen(avg);
        pixel.setRed(avg);
        pixel.setBlue(avg);
    }
    greyImage.drawTo(canvas2);
}