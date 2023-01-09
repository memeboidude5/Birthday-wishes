var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        player_object = Img;
        
        player_object.scaleToWidth(850);
        player_object.scaleToHeight(400);
        player_object.set({
        top:0,
        left:0,
        });
        canvas.add(player_object);
        
        });
	
}

function playSound(){
	x.play()
}
