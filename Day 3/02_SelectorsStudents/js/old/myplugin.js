// JavaScript Document

(function( $ ) {
  $.fn.showLinkLocation = function() {
    return this.filter( "a" ).each(function() {
      $( this ).append( " (" + $( this ).attr( "href" ) + ")" );
    });
  };
}( jQuery ));

// Usage example:
$( "a" ).showLinkLocation();