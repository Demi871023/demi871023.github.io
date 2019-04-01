$(function(){
  var clock = $('#clock');
  
  //Массив классов разметки чисел
  var digitsNames = 'zero one two three four five six seven eight nine'.split(' ');
  
  //Массив дней недели
  var weekdays = clock.find('.clock__date-day');
  
  //Разметка чисел
  var digitsLayout = {};
  
  //Формат расстановки времени
  var digitsPositions = ['h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'];
  
  //Разметка
  var timeWrapper = clock.find('.time');
  
  $.each(digitsPositions, function(){
 
        if (this == ':') {
          timeWrapper.append('<div class="dots">');
        }
        else {
 
            var digWrapper = $('<div>');
 
            for(var i = 1; i < 8; i++){
                digWrapper.append('<span class="d' + i + '">');
            }
 
            digitsLayout[this] = digWrapper;
 
            timeWrapper.append(digWrapper);
        };
    });
    
  (function update_time(){
    var now = moment().format('HHmmssd');
    
    digitsLayout.h1.attr('id', digitsNames[now[0]]);
    digitsLayout.h2.attr('id', digitsNames[now[1]]);
    digitsLayout.m1.attr('id', digitsNames[now[2]]);
    digitsLayout.m2.attr('id', digitsNames[now[3]]);
    digitsLayout.s1.attr('id', digitsNames[now[4]]);
    digitsLayout.s2.attr('id', digitsNames[now[5]]);
    
    /*Определение дня недели*/
    
    var dow = now[6];
    dow--;
    if (dow < 0){
      dow = 6;
    };
    console.log(dow)
    weekdays.removeClass('clock__date-day--active').eq(dow).addClass('clock__date-day--active');
    
    
    setTimeout(update_time, 1000);
  })();
});
