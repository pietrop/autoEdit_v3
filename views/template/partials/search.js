/* *
* HyperTranscript Search function
* Word accurate, highlights the line in yellow, and makes matched word bold.
* It does so by switching CSS classes.
* */
/////////////////////////// word accurate search///////////////////////////////////
    $("#search-criteria").keypress(function(){
        var txt = $('#search-criteria').val();
        console.log(txt);
        if (txt == ""){
            $( '.child' ).css( "background-color", "" );
            $( '.child' ).css( "color", "" );
            $( '.child' ).css( "color", "" );
            $( '.child' ).css( "font-weight", "" );
        }else {
            $( '.child' ).css( "background-color", "" );
            $( '.child' ).css( "color", "" );
            $( '.child' ).css( "font-weight", "" );
            $( '.child:contains("'+txt+'")' ).css( "background-color", "yellow" );
            $( '.child:contains("'+txt+'")' ).css( "color", "black" );
            $( '.child:contains("'+txt+'")' ).css( "font-weight", "bold" );
        }
    });
    $("#search-criteria").keyup(function(){
        var txt = $('#search-criteria').val();
        console.log(txt);
        if (txt === ""){
            $( '.child' ).css( "background-color", "" );
            $( '.child' ).css( "color", "" );
            $( '.child' ).css( "color", "" );
            $( '.child' ).css( "font-weight", "" );
        }else {
            $( '.child' ).css( "background-color", "" );
            $( '.child' ).css( "color", "" );
            $( '.child' ).css( "font-weight", "" );
            $( '.child:contains("'+txt+'")' ).css( "color", "black" );
            $( '.child:contains("'+txt+'")' ).css( "background-color", "yellow" );
            $( '.child:contains("'+txt+'")' ).css( "color", "black" );
            $( '.child:contains("'+txt+'")' ).css( "font-weight", "bold" );
        }
    });
/////////////////////end  word accurate search///////////////////////////////////
