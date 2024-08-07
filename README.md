# Моя команда

[Сайт проекта](https://takosushi-explore-your-team-51c6.twc1.net/auth/sign-in)

## Основные функции
В качестве серверной части используется API https://reqres.in/
Данные не предоставляемы API остаются статичными, вставленными в HTML код (например описание члена команды в картачке).

При первом открытии приложения пользователь попадает на страницу входа.

Требуется ввести Логин и Пароль. 

> [!IMPORTANT]
> Из-за ограничений API получить токен авторизации можно используя только существующие почтовые адреса сервиса reqres.in. Пароль может быть любым. Для тестировния приложения воспользуйтесь одним из данных почтовых адресов:  michael.lawson@reqres.in, lindsay.ferguson@reqres.in, tobias.funke@reqres.in, byron.fields@reqres.in

Так же выполнена форма Регистрации. Попасть на нее можно перейдя по ссылке внизу страницы Входа.

Регистрация условная из-за ограничений API, отправляется запрос, приуспешном ответе происходит редирект на страницу Входа. 

> [!IMPORTANT]
> В поле "Электронная почта" так же используйте существующие адреса. 
Остальные поля заполняются на ваше усмотрение.
___

После входа пользователь попадает на главную страницу со списком членов команды. Все карточки интерактивные и ведут на страницу с информацией о конкретном члене команды.

Кнопка "показать еще" дозапрашивает данные с сервера и выводит дополнительные карточки с членами команды.
> [!IMPORTANT]
> Сервер позволяет получить только 2 страницы с членами команды.

## Запуск приложения

Следуйте следующим инструкциям: 

Скачайте репозиторий:
```
git clone git@github.com:TakoSushi/explore-your-team.git
```
Далее переходим в папку с проектом, выполняем установку зависимостей и запускаем проект.
```
cd explore-your-team
npm install
npm run dev
```
Запущенный проект доступен на локальной машине по адресу http://localhost:5173/
