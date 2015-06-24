$(function(){

 //--------------------------19----------------------------------//
        $(function() {
                $( "#draggable" ).draggable();
                $( "#droppable" ).droppable({
                        drop: function( event, ui ) {
                                $( this )
                                    .addClass( "ui-state-highlight" )
                                    .find( "p" )
                                    .html( "Dropped!" );
                        }
                });
        });

        //$( "#19" ).draggable();

//---------------------Color Animation-------------------------//
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

//-----------------Midterm Plugin-----------------//
        $.fn.color = function() {
                this.css("color", "pink");
                return this;
        };

//--------------------Attr Method-----------------//

        $("p")
            .attr("src", "span");
});

//----------------------8--------------------------//
//        $('.colorSwap').on('click', function(e){
//                e.preventDefault();
//                    .Show();
//
//
//});

//---------------------10--------------------------//
$('p').each(2);