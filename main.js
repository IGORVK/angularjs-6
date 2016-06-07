
// В обычном подходе AngularJS в шаблоне часто не понятно из какого контроллера вызывается метод
// Поэтому разберем this и controller as!!!
// Создадим шаблон с тремя вложенными друг в друга контроллерами   
//<div ng-controller="mainCtrl">
      // <div ng-controller="firstCtrl">
             // <div ng-controller="secondCtrl"> 
                    // {{myLesson}}
             // </div> 
      // </div>
  // </div>

// если мы перенесем определние переменной myLesson из secondCtrl контроллера в firstCtrl или даже в mainCtrl все будет работать точно так же так как и предполагает вложенность
// Это конечно хорошо но у нас появилось усложнение кода
// Потому что мы можем не знать из какого конкретно контроллера вызывается эта переменная!!!
// Чтобы избежать этой неопределенности  используется синтаксис controller as!!!!
// <div ng-controller="mainCtrl as mainCtrl">
  // <div ng-controller="firstCtrl as firstCtrl">
    // <div ng-controller="secondCtrl as secondCtrl">
      // {{myLesson}}
    // </div>
  // </div>
// </div>
//Что это значит?
// Это значит что теперь в контроллерах у нас появляется три переменные  mainCtrl firstCtrl secondCtrl которые связаны с this в каждом контроллере
// Теперь поробуем что это значит!!!
// удалим $scope в каждом контроллере. Теперь мы можем использовать this в место $scope в каждом контроллере
// сейчас если мы обновимся то у нас ничего не выведется!!!
// Теперь в шаблоне мы можем достучаться до переменной myLesson только через переменную контроллера secondCtrl
// Теперь у нас нет непонимание откуда вызывается эта переменная!!!
// Она не может находиться не в mainCtrl ни в firstCtrl
// Скопируем этот код в другие контроллеры
// Теперь если мы хотим вызвать переменную myLesson из firstLesson или mainLesson нужно прописать {{mainCtrl.myLesson}} или {{firstCtrl.myLesson}}

// Как мы видим весь синтаксис который нам неоходимо прописать чтобы  оно работало это имя-контроллер as имя-которе-мы-хотим-использовать и далее использовать this в этом //случае мы може не использовать scope вообще
// Давайте попробуем добавить каку-нибудь функцию например addLesson() в контроллере mainCtrl и попробуем ее вызвать в шаблоне {{mainCtl.addLesson()}}
// В итоге она выведет в консоле addLesson function!!!! Все дело в том что теперь функцию необходимо вызывать через переменную

// ВО ВСЕХ ПРОЕКТАХ ЖЕЛАТЕЛЬНО ПРИМЕНЯТЬ ВЫЗОВ ПЕРЕМЕННЫХ И ФУНКЦИЙ ЧЕРЕЗ THIS  и МЕНЬШЕ ИСПОЛЬЗОВАТЬ $scope!!!!!!!!!!!!!!!!!!!!!!

// Теперь давайте посмотрим как Angular обрабатывает controller as синтаксис внутри себя. Давайте на примере mainCtrl заиджерим $scope и в конце контроллера в переменную 
//$scope.mainCtrl запишем this
// Что это дает?
// Мы создаем переменную mainCtrl которая доступна в шаблоне
// Если мы сейчас уберем синтаксис controller as синтаксис для mainCtrl то код продолжит работать без изменений так как переменная mainCtrl у нас уже есть!!!

// Только что мы сделали свой подход к реализации синтаксиса controller as. НО ЛУЧШЕ ЭТОГО НЕ ДЕЛАТЬ И ПОЛЬЗОВАТЬСЯ НАТИВНЫМИ СПОСОБАМИ ПРОГРАММИРОВАНИЯ ТАК КАК ЭТО ПРОЩЕ!!!

var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
   this.myLesson = "this is var myLesson mainCtrl"; 
   this.addLesson = function(){
       console.log("addLesson function");
   };  

$scope.mainCtrl = this;

});

app.controller('firstCtrl', function(){
   this.myLesson = "this is var myLesson firstCtrl";

});

app.controller('secondCtrl', function(){
   this.myLesson = "this is var myLesson secondCtrl";

});
