/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false;
const isVerifiedUser = truefalse;
const hasSpecialPermission = truefalse;
const hasTemporaryPass = false;

let isAccess;


// your code
if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
    isAccess = true;
    if (isAccess === true) {
        console.log("The entrance is completed");
    }
} else {
    isAccess = false;
    console.log("You don't have access to this page");
}
