var Links = {
    SetColor:function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i++;
        // }
        $('a').css('color', color);
    }
}

var Body = {
    SetColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    SetBackgroundColor: function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.SetBackgroundColor('black');
        self.value = 'day';
        Body.SetColor('white');
        Links.SetColor('yellow');
    } else {
        Body.SetBackgroundColor('white');
        self.value = 'night';
        Body.SetColor('black');
        Links.SetColor('blue');
    }
}