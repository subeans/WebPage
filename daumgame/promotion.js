$(document).ready(function(){
    $("#animate").mouseover(function(){
    $("#animate").animate({
        opacity:"1" },1000);
        });
    $("#animate").mouseout(function(){
    $("#animate").animate({
        opacity:"0.3"},1000);
        });
    $("#animate2").mouseover(function(){
    $("#animate2").animate({
        opacity:"1"},1000);
        });
    $("#animate2").mouseout(function(){
    $("#animate2").animate({
        opacity:"0.3"},1000);
        });
//    $("#p1").mouseover(function(){
//    $("#p1").animate({
//        opacity:"1"},1000);
//        });
//    $("#p1").mouseout(function(){
//    $("#p1").animate({
//        opacity:"0.3"},1000);
//        });
});
