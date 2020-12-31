/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
$(document).ready(function(){
    $(".burger-nav").on("click", function(){
        $(".primary-nav ul").toggleClass("open");
    })
});