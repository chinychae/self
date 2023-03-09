console.log(Math.round(Math.random() * (window.innerWidth - 0) + 0));


this.imagePreview = function(){

    xOffset = 200;
    yOffset= 60;

    /* END CONFIG */
$("img.preview").hover(function(e){
    this.t = this.title;
    this.title = "";
    var c = (this.t != "") ? "<br/>" + this.t : "";
    $("body").append("<p id='preview'><img src='"+ $("#pics"+this.id).val() +"' alt='Image preview' width='499px' />"+ c +"</p>");
    $("#preview")
    .css("top",(e.pageY - xOffset) + "px")
    .css("left",(e.pageX + yOffset) + "px")
    .fadeIn("fast");
    },
    function(){
    this.title = this.t;
    $("#preview").remove();
    });
    $("img.preview").mousemove(function(e){
    $("#preview")
    .css("top",(e.pageY - xOffset) + "px")
    .css("left",(e.pageX + yOffset) + "px");
    });
    };
    
    
    // starting the script on page load
    $(document).ready(function(){
    imagePreview();
    });

