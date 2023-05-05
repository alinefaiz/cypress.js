describe('Тестирование оформления заказа на сайте', function () {
    it('Оформление заказа', function () {
       cy.visit('https://huntingpony.com/');//посещение сайта
       cy.get('[href="/collection/lezhanki"] > .banner-list__item-title').click();//выбрать товар лежанки
       //cy.intercept('POST','/**').as('http-request');
       cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();//выбрать лежанку  
       //cy.wait('@http-request');
       cy.wait(2000);  
       //cy.intercept('POST','/product/**').as('http-request1');
       cy.get('.add-cart-counter__btn').click();//добавить в корзину
       cy.wait(2000);
       //cy.wait('@http-request1');
       cy.get('[data-add-cart-counter-plus=""]').click();//увеличить количество
       cy.get('.add-cart-counter__detail-text').contains('2');
       cy.get('.header__cart').click();//переход в корзину
       cy.get('.cart-controls > .button').click();//нажать оформить заказ
       cy.get('.decorated-title').contains('Оформление заказа');
       cy.get('.co-basket_item-count').contains('2');
    })
    })