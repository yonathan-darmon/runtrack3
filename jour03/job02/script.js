jQuery(document).ready(function ($) {
    var block = []
    var verify = ["1", "2", "3", "4", "5", "6"]
    var point=0
    $("#button").click(function () {
        $(function () {
            var parent = $("#rangees");
            var divs = parent.children();
            while (divs.length) {
                parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
                $('#rangees img').addClass('clickable')
                $('#rangees img').prependTo($('#melangees'))
            }
        })
    })

    function click() {
        block.push($(this).attr('id'))
        $(this).appendTo($("#rangees"))
        $(this).removeClass('clickable')
        if (block.length === 6) {
            for (let i = 0; i < block.length; i++) {
                if (verify[i] === block[i]) {
                    point++;
                }
            }
            if (point === 6) {
                $("body").append('<p>Vous avez gagné</p>')
                $('p').css("color", "green");
            } else {
                $("body").append('<p>Vous avez perdu</p>')
                $('p').css("color", "red");
            }
        }
    }

    $('#melangees').on('click', '.clickable', click)
})
