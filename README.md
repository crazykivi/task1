# Server project (выполнено задание 1)

Веб-интерфейс для управления серверами. 

## Описание

У нас есть список серверов, у которых мы можем указать хост, логин, пароль, группу.

Из веб-интерфейса мы можем запускать и останавливать сервера. 
Действия пользователя по запуску и остановке сервера журналируются.

## Технический стек

db: mongodb

backend: node.js c фреймворком express.js, работа с бд через mongoose

frontend: фреймворк angular.js, шаблонизатор pug, оформление bootstrap css, графики chart.js

## Задания

### задание 1

действие "перезапуск" для сервера: 

а) добавить кнопку с действием в сервер

б) добавить журналирование этого действия

## запуск

должны быть установлены: nodejs, mongodb

> git clone https://github.com/antirek/server-project.git   // клонируем этот репозиторий

> cd server-project     // переходим в директорию проекта

> npm install           // устанавливаем зависимости

> npm run build         // делаем сборку (вебпак собирает скрипт для фронтенда)

> npm run start:web     // запускаем наш сервер

переходим в браузере на http://localhost:3000

по необходимости конфигурируем подключение к mongodb в config/default.js
