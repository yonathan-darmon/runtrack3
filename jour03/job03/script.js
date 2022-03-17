jQuery(document).ready(function ($) {


    var parent = $('li')
    var child = parent.children();
    var id = []
    var block = []

    $("button").click(function () {
        if (child.length == 9) {
            console.log('coucou')
            var rand = Math.floor((Math.random() * child.length) + 1)
            var value = '#' + rand
            $(value).remove()
            $("img").each(function () {
                id.push($(this).attr('src'))
            })
            console.log(id)
        }
    })
})