(function ( $ ) {

    $.fn.color = function() {
        this.css( "color", "green" );
        return this;
    };

    $( ".myName" ).css( "border", "5px solid gold" ); //Class

    $( "ul.navigation > li" ).css( "font-family", "cursive" ); //Parent>Child

    $( ":header" ).css({ color: "green" }); //:Header

    $( "h2:contains('Jquery')" ).css( "text-decoration", "underline" ); //:contains()

    $( "div:hidden" ).show( 3000 ); //:show()

    $( ":visible" ).click(function() {
        $( this ).css( "background", "black" ); //:visible
    });

    $( "a[hreflang|='en']" ).css( "border", "3px dotted green" ); //[name|=”value”]

    $( "span:first-of-type" ).addClass( "fot" ); ////:first-of-type

    $( "input:disabled" ).val( "FUN = Debugging" ); //:disabled

    $( "input[type='checkbox']" ).prop({ //.prop()
        enabled: true
    });

    function showHeight( element, height ) {
        $( "div" ).text( "The height for the " + element + " is " + height + "px." );
    }
    $( "#getp" ).click(function() {
        showHeight( "paragraph", $( "p" ).height() ); //.height()
    });

    var p = $( "p:last" );
    var offset = p.offset();
    p.html( "left: " + offset.left + ", top: " + offset.top ); //.offset()

    $( "div" ).data( "test", { first: 1, last: "boxes!" } );
    $( "span:first" ).text( $( "div" ).data( "test" ).first );
    $( "span:last" ).text( $( "div" ).data( "test" ).last ); //.data()

    $( "b" ).clone().prependTo( "p" ); //.clone()

    $( "p" ).wrapInner( $( "<span class='red'></span>" ) ); //.wrapInner()

    $( ".p3" ).after( "<b>I can even make words appear like shooting stars!</b>" ); //.after()

    var pTags = $( "p" );
    $( "button" ).click(function() {
        if ( pTags.parent().is( "div" ) ) {
            pTags.unwrap();
        } else {
            pTags.wrap( "<div></div>" );
        }
    }); //.unwrap()

    $( "p4" ).click(function() {
        $( this ).replaceWith( $( "div" ) ); //.replaceWith()
    });

    $( "p5" )
        .append( $( "input" ).map(function() {
            return $( this ).val();
        })
            .get()
            .join( ", " ) ); //.map()

    $( "div1" ).css( "border", "2px solid red" )
        .add( "p" )
        .css( "background", "yellow" ); //.add()

    $( "p" ).find( "span" ).css( "color", "red" ); //.find()

    $( ".p7" ).clone().appendTo( document.body );
    $( window ).scroll(function() {
        $( "p" ).css( "display", "inline" ).fadeOut( "slow" );
    }); //.scroll()

    $( "button:first" ).click(function() {
        update( $( "span:first" ) );
    }); //.trigger()

    $( "form" ).submit(function( event ) {
        if ( $( "input:first" ).val() === "correct" ) {
            $( "span" ).text( "Validated..." ).show();
            return;
        }

        $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
        event.preventDefault();
    }); //.submit()

    var xTriggered = 0;
    $( "#target" ).keydown(function( event ) {
        if ( event.which == 13 ) {
            event.preventDefault();
        }
        xTriggered++;
        var msg = "Handler for .keydown() called " + xTriggered + " time(s).";
        $.print( msg, "html" );
        $.print( event );
    });

    $( "#other" ).click(function() {
        $( "#target" ).keydown();
    }); //.keydown()

    $( "p" ).click(function() {
        $( this ).slideUp();
    }); //.click()

    $( "p" ).click(function( event ) {
        alert( event.type ); // event.type
    });


    $( "#go" ).click(function() {
        $( "#block" ).animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500 );
    }); //.animate()



}( jQuery ));