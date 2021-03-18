/* ----------------------------------------------------- */
/* Данный скрипт называется "Области тьмы"

"Почему?": спросите вы... Да потому, что  благодаря ошибкам
в данном скрипте мне открылись два вещи и, печатая их (т.е. 
как бы проговаривая), я фиксирую их в своей памяти. 

1. переменная может быть объявлена заранее, а значение ей 
может быть присвоено позже. Переменная объявленная внутри функции 
как "var переменная" !не будет! доступна потом в коде, а будет
видна только внутри той функции, где объявлена. 

2. Меня посетила мысль, что в жизни хорошо, когда ты всё делаешь сам,
но не нужно забывать об ограничаниях времени и коль скоро мы
может перечивать всё занаво и САМИ понять где ошибка - СКОРЕЕ нам 
может помочь учитель, указанием на неё. А мы, проанализировав, её
потратим меньше времени на поиски информации о ней. Учителя важны 
и помогают нам высвобождать время! Таким образом!...

P.S.
Слова благодарности (чисто в америкнском стиле). По фану:
Спасибо Никите Хохлову за подсказку.
*/
/* ----------------------------------------------------- */
// 1.1 Фиксация Старта
// При щелчке что происходит:
// - фиксируется время начала игры
// - присваивается рандомный (1-30) номер div


function time() {

  //$('.timeCount').html();

}
time();

var userClicks = 0; var blunder = 0; var currTimeRessultInBox = 0; var resultInSeconds = 0;
$('#check1').fadeOut(0).fadeIn(1000).html(blunder);
$('#check2').fadeOut(0).fadeIn(1000).html(userClicks);
$('#check3').fadeOut(0).fadeIn(1000).html(currTimeRessultInBox);
$('#check4').fadeOut(0).fadeIn(1000).html(resultInSeconds);

// прячем кнопочку рестарта
$('#startAgain').fadeOut(5000);
$('#startAgain').prop('disabled',true).css('background-color', 'gray');  

function randomDivId() {
  let d = Math.ceil(Math.random()*30);  
  return `#slot-${d}`;
}
console.log(randomDivId());

var userClicks = 1;
console.log('Текущее число попыток:' + userClicks +'\n\n Текущее число ошибок: '+ blunderResult);

// фиксируется значение в мс начала игры
  function getTimestamp() {
    let d = new Date();    
    return d.getTime();
  };
var getTimestamp1;

// фиксируется значение в мс конца игры
    function getTimesEnd() {
      let d = new Date();    
      return d.getTime();
    };
var gameOverTime;

// подсчёт ошибок
console.log('BlunderResultDetail');
    function blunderCount(blunderResult){ // blunder - оплошность, промах, просчет ,ошибка, ляп.      
      blunder = 0;          
      console.log('Промах! Попади в красный квадрат!');  
      console.log(blunder);
      return blunder
    }
var blunderResult = blunderCount();

/* ----------------------------------------------------- */
// Стартуем игру нажатием на кнопку!
/* ----------------------------------------------------- */
$('#button-reload').click(function() {
  blunderCount();
  
  // - выбирается произвольный квадрат и меняем у него цвет
  $(randomDivId()).css({
   'background-color' : 'red',
   'border' : '1px solid #fff'       
  });
  
  /* выводим начальное время */
  console.log('Кнопка сработала! Время стартовло!');

  getTimestamp1 = getTimestamp();
  console.log(getTimestamp1);

  // отключаем кнопочку
  $(this).prop('disabled',true).css('background-color', 'gray');
  $('#startAgain').prop('disabled',true).css('background-color', 'gray');  

});

$('div[id^=slot-]').click(function() {

console.log('ок');
console.log(userClicks);
console.log(0 > 0);

    // ЕСЛИ цвета совпадают, то 
    // - меняем цвет на предыдущий (исходный)
    //console.log('Код перед if...else');  
    if ($(this).css('background-color') == 'rgb(255, 0, 0)') {      
      //alert('Works-3');
      /* ----------------------------------------------------- */
      /* ----------------------------------------------------- */
      /* ----------------------------------------------------- */
        if (userClicks !== 5) {
        console.log('Игра продолжается!');
              $(this).css({
                 'background-color' : 'rgba(255, 165, 0, .75)',
                 'border' : '0px solid #fff'       
               });
              // - уменльшаем колличество кликов
              userClicks ++;
              $('#check2').fadeOut(0).fadeIn(1000).html(userClicks);

              console.log(userClicks);
              // alert('Попыток осталось: '+userClicks);      
              // - заново окрашиваем НОВЫЙ рандомный квадрат
              function randomDivId() {
                let d = Math.ceil(Math.random()*30);  
                return `#slot-${d}`;
              }
              $(randomDivId()).css({
                 'background-color' : 'red',
                 'border' : '1px solid #fff'       
               });
              // фиксируется значение в мс начала игры
                  function currTimeRessult() {
                    let d = new Date();    
                    return d.getTime();
                  };
                getTimestamp1;
                var currTimeRessult1 = currTimeRessult();
                var currTimeRessultInBox = ((currTimeRessult1-getTimestamp1)/1000).toFixed(3);
                console.log('Hip hop!');
                console.log(currTimeRessultInBox);
              // выводим счётчик времени
              $('#check3').fadeOut(0).fadeIn(1000).html(currTimeRessultInBox);
        } else {
          // выводим итог по попаданиям
          $('#check2').fadeOut(0).fadeIn(1000).html(userClicks);
          console.log('ок');
          
          // размораживаем кнопку рестарта
          $('#startAgain').prop('disabled',false).css('background-color', '#53D031');  
          // делает невидимую кнопку - видимой          
          $('#startAgain').fadeIn(1000);
            $('#startAgain').click(function(event) {
              // отменяет отключение певой кнопки
            $('#button-reload').prop('disabled',false).css('background-color', '#53D031');
            $('#startAgain').prop('disabled',true).css('background-color', 'gray');  
             let userClicks = 0; let blunder = 0; let currTimeRessultInBox = 0; let resultInSeconds = 0;
             $('#check1').fadeOut(0).fadeIn(1000).html(blunder);
             $('#check2').fadeOut(0).fadeIn(1000).html(userClicks);
             $('#check3').fadeOut(0).fadeIn(1000).html(currTimeRessultInBox);
             $('#check4').fadeOut(0).fadeIn(1000).html(resultInSeconds);
            });
        
          userClicks = 1;      
          console.log(userClicks);

          $(this).css({
               'background-color' : 'rgba(255, 165, 0, .75)',
               'border' : '0px solid #fff'       
             });

          // вызываем функцию конца времени игры    
          gameOverTime = getTimesEnd();
          console.log(gameOverTime);

          var resultInSeconds = ((gameOverTime - getTimestamp1)/1000).toFixed(3);
          $('#check4').fadeOut(0).fadeIn(1000).html(resultInSeconds);
          alert('Игра окончена'+'\n\n Высправились за: '+ resultInSeconds + '\n\n Вы совершили всего '+blunder+' промах(-ов)!');                          
            
            $('#check3').fadeOut(0).fadeIn(1000).html(currTimeRessultInBox);            
          }
    } else {            
          // отдаём зафиксированный результат
        blunder ++;    
        $('#check1').fadeOut(0).fadeIn(1000).html(blunder);        
        }
});