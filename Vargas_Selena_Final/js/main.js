$(function(){

        $( "#19" ).draggable();



        var state = true;
        $( "#button" ).click(function() {
                if ( state ) {
                        $( "#effect" ).animate({
                                backgroundColor: "#ffd700",
                                color: "#fff",
                                width: 500
                        }, 1000 );
                } else {
                        $( "#effect" ).animate({
                                backgroundColor: "#000",
                                color: "#000",
                                width: 240
                        }, 1000 );
                }
                state = !state;

});

        //Midterm Plugin
        $.fn.color = function() {
                this.css("color", "pink");
                return this;
        };



        $("p")
            .attr("src", "span");
});

$( ".colorSwap" ).click(function() {
        
}


