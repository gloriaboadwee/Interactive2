var imgArray = new Array();
imgArray[0] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2FGrapus%2C%20AIDS-%20A%20Worldwide%20Effort%20Will%20Stop%20It%2C%201989%20copy.jpeg?1542243219066";
imgArray[1] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2FGuerrilla%20Girls%2C%20You%E2%80%99re%20Seeing%20Less%20Than%20Half%20the%20Picture%2C%201989%20copy.jpeg?1542243219194";
imgArray[2] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2FMirko%20Ilic%20and%20Daniel%20Young%2C%20Radioactive%20Waste%2C%202010%20copy.jpeg?1542243220033";
imgArray[3] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2FPeter%20Pa%2C%20Tremor%2C%202016%20copy.jpeg?1542243220253";
imgArray[4] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2Fjosh_macphee_melt_ice_preview%20copy.jpeg?1542243222770";
imgArray[5] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2Fjustice%20for%20our%20lives%20poster%20copy.jpg?1542243223775";
imgArray[6] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2Fkent1%20copy.png?1542243237372";
imgArray[7] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2Ffreedom%20for%20angela%20davis%20copy.jpg?1542243238874";
imgArray[8] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2Fvote%20for%20change%20copy.jpg?1542243239227";
imgArray[9] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2Fearth%20day%20copy.jpg?1542243240924";
imgArray[10] = "https://cdn.glitch.com/b155fbce-d59c-4cab-a876-f3d3a5b3edf8%2Fbe%20aware%20copy.jpg?1542243241510";


// create an array for captions
var capArray = new Array();
capArray[0] = "Grapus, AIDS: A Worldwide Effort Will Stop It, 1989";
capArray[1] = "Guerrilla Girls, You’re Seeing Less Than Half the Picture, 1989";
capArray[2] = "Mirko Ilic and Daniel Young, Radioactive Waste, 2010";
capArray[3] = "Peter Pa, Tremor, 2016";
capArray[4] = "Josh MacPhee, Melt Ice, 2009";
capArray[5] = "Oree Originol, Justice for Mike Brown, 2014";
capArray[6] = "Corita Kent, for emergency use soft shoulder, 1966";
capArray[7] = "Freedom for Angela Davis";
capArray[8] = "Robbie Conal, Gag Me with a Coat Hanger, 1991";
capArray[9] = "Seymour Chwast, Earth Day, 1991";
capArray[10] = "Wes Wilson, Be Aware, 1965";


function imgrandom() {

    // define image div
    var imgs = document.getElementById('images');

    // remove all child nodes
    while (imgs.hasChildNodes()) { 
      imgs.removeChild(imgs.lastChild); 
    } 
  
    // define captions div
    var caps = document.getElementById('captions');

    // remove all child nodes
    while (caps.hasChildNodes()) { 
      caps.removeChild(caps.lastChild); 
    }   
  
    for (var i = 0; i < 3; i++) {
        // store a random number each time in the loop
        var rand = Math.floor(Math.random() * imgArray.length);
        var image = new Image();
        
        //get the item from the image array
        image.src = imgArray[rand];
      
        // add image
        imgs.appendChild(image);
        
        //create a paragraph
        var paragraph = document.createElement('h3');
        
        // get the corresponding item from the text array
        var cap = document.createTextNode(capArray[rand]);
      
        //add caption text to a paragraph
        paragraph.appendChild(cap);   
      
        //add caption
        caps.appendChild(paragraph);


    }
}
