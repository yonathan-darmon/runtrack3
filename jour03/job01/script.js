jQuery(document).ready(function ($) {
    $("p").hide();
    $("#button").click(function () {
        $("p").show();
    })
    $("#button2").click(function () {
        $("p").hide();
    })
});