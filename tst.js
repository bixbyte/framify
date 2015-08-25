var button1 = document.getElementById("r1");
var button2 = document.getElementById("r2");
var button3 = document.getElementById("r3");

var val1;
var val2;
var result;

$(function(){

    $('#v1').change(function(e){
        
        e.preventDefault();
        
        val1 = $('#v1').val();
        
        calcualte();
        
    });
    
    $('#v2').change(function(e){
        
        e.preventDefault();
        
        val2 = $('#v2').val();
        
        calculate();
        
    });


});

var calculate = function(){

    if ( $("#r1").attr("checked") ){

        result = val1 + val2;
        $('#res').val(result);


    }else if ( $("#r2").attr("checked") ) {

        result = val1 * val2;
        $('#res').val(result);


    }else if( $("#r3").attr("checked") ) {


        result = val1 / val2;
        $('#res').val(result);



    }else {
        
        alert("Please Select an Operation");
        
    }

}
