# attendance-chart

- [x] Создать проект в папке hw2-attendance-chart.
- [x] Приложение должно представлять из себя таблицу для отметки присутствия студентов на занятии. 
Студенты - массив строк (имён).
Занятия - массив дат в текстовом формате виде ("2023-12-02")
Данные - указывать в программе хардкодом. Т.е. - указать явно переменные с нужными значениями
- [x] Написать React-компонент, отображающий таблицу присутствия (можно использовать табличную верску, можно на 
  div-ах). 
Вверху - даты
В левой части - порядковый номер и имя студента.
На пересечении (в каждой ячейке) - должен быть кликабельный элемент.
По нажанию - состояние элемента должно менятся на "присутствует" (UI-реализация -  на своё усмотрение).
Таблица может выходить за рамки экрана или границы сайта.
- [x] После таблицы - кнопка с текстом "Сохранить".
При нажатии на кнопку - кнопка блокируется и на ней появляется надпись "Идёт сохранение".
Данные из таблицы - сораняются в localStorage (формат - на своё усмотрение).
По прошествии 2 секунд - кнопка возвращется в исходное состояние.
- [x] При открытии страницы нужно загружать данные из localStorage и прокидывать их в дочерние компоненты используя 
  props-ы.
  
P.S. Учтите, что данные в localStorage могут быть повреждены злонамеренными пользователями, так что их следует 
  загружать с использованием try-catch).

- [x] (*) По желанию - можно добавть на UI 2 кноки - "добавить студента" и "добавить дату". Использовать prompt для
  реализации такого функционала.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
