$(document).ready(function(){
    $('#full-time').on('click', function(){
        $('#full-time-schedule').toggle();
        $('#part-time-schedule').toggle();
    });
    $('#part-time').on('click', function(){
        $('#part-time-schedule').toggle();
        $('#full-time-schedule').toggle();
    });
    
    
    $('.residence-address-btn').on('click', function(e){
        e.preventDefault();
        $('#residence-addres').toggle();
    });
});