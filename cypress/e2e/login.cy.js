describe('Тестирование авторизации', function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('')//посещение сайта
      })
    it('Проверка ввода правильного логина и пароля', function () {
       cy.get('#mail').type('');//ввод логина
       cy.get('#pass').type('');//ввод пароля
       cy.get('#loginButton').click();//клик по кнопке войти
       cy.contains('Авторизация прошла успешно').should('be.visible');//наличие сообщения об успешной авторизации
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие крестика
       })
    it('Проверка восстановления пароля', function () {
        cy.get('#forgotEmailButton').click();//нажать забыли пароль
        cy.get('#mailForgot').type('');//ввод логина
        cy.get('#restoreEmailButton').click();//клик по кнопке отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Проверка ввода правильного логина и неправильного пароля', function () {
        cy.get('#mail').type('');//ввод логина
        cy.get('#pass').type('');//ввод неправильного пароля
        cy.get('#loginButton').click();//клик по кнопке войти
        cy.contains('Такого логина или пароля нет').should('be.visible');//наличие сообщения об ошибке
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//наличие крестика
        })
    it('Проверка ввода неправильного логина и правильного пароля', function () {
        cy.get('#mail').type('');//ввод неправильного логина
        cy.get('#pass').type('');//ввод пароля
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    it('Проверка валидации логина без @', function () {
        cy.get('#mail').type('');//ввод логина без @
        cy.get('#pass').type('');//ввод пароля
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('');//ввод логина с заглавными буквами
        cy.get('#pass').type('');//ввод пароля
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})