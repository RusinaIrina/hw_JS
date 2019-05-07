var strP = document.getElementsByTagName('p')[0]; 
var str = strP.textContent; 

if (str.length != 0) {
  // разделяем на отдельные пары ключ-значение
  var result = str.split(/;/g); 

  // заносим в объект
  var obj = {};
  for (var i = 0; i < result.length - 1; i++) { 
    result[i] = result[i].trim(); // убираем лишние пробелы в начале и конце строки
    // ключ
    var key = result[i].match(/^[^:]+/g); 
    
    // значение 
    var val = result[i].match(/:+[^;]*/g);
    val[0] = val[0].substr(1); // убираем ':'' в начале строки
    
    val[0] = val[0].trim();
    if (i == 0) { // element
      val[0] = val[0].toLowerCase();
    } 
    
    obj[key[0]] = val[0];
  }

  // вывод информации на консоль
  console.log(obj);

  // удаление тега <p>
  var par = strP.parentElement;
  par.removeChild(strP);

  // отрисовка страницы
  for (var i = 0; i < obj.count; ++i) {
    var newT = document.createElement(obj.element);
    newT.textContent = obj.text;
    par.appendChild(newT);
  }
}
