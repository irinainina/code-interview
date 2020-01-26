# code-interview

## Задание

Вам необходимо создать тренажер для подготовки к собеседованиям по JavaScript.

Для этого подготовьте базу задач по JavaScript и распределите их по категориям, отвечающим часто встречающимся вопросам собеседований, например, типы данных, замыкания, асинхронность, event loop и т.д. Список таких вопросов можно посмотреть в поисковике или по ссылкам:
- https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/interview-corejs.md
- https://discordapp.com/channels/516715744646660106/665102735556739083/666993161456975883  
Сложность задач подбирайте соответствующую собеседованию на позицию Junior JavaScript developer.

### Категории вопросов

Ориентировочное количество категорий вопросов в вашем приложении -  10-12, можно больше. Каждая категория содержит 10-15 задач.

Список категорий содержится в выдвигающемся боковом меню, которое размещается в левой части страницы.

### Задачи

Задача включает в себя условие или вопрос + ваш вариант решения + механизм проверки правильности предложенного пользователем решения + теория (или ссылка на неё).

Решение задачи предполагает написание кода.

Для этого в вашем приложении должно быть предусмотрено окно, в котором можно набрать код решения (подсветка и автодополнение кода приветствуются). 

### Проверка решения

По клику на кнопку Run  происходит проверка правильности решения и выводится уведомление о её результате. 

Для проверки правильности решения вы можете использовать синтаксис "new Function" или другой механизм проверки. Использование с этой целью функции eval() нежелательно.

### Прохождение тренажёра

Каждую категорию вопросов можно проходить независимо от других.

При прохождении категории отслеживается прогресс, в котором отображается номер текущей задачи и их общее количество в данной категории.

Задачи категории доступны последовательно - после выполнения предыдущей задачи активируется кнопка, позволяющая перейти к следующей.

После выполнения всех задач категории выводится их список с отметками о правильности выполнения возле каждой из них.

### Оценивание

- по 2 балла за каждую задачу, но не более 300 баллов за все
- 120 баллов за работающее приложение
- 80 баллов за качественно выполненное приложение
