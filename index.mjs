import { Builder, By, Key } from 'selenium-webdriver';
import assert from 'assert';
import * as chai from 'chai';

//describe block
// describe('Add todo tests', function(){
    
//     //it block
//     it('successfully adds a todo to app', async function(){
        
//     })

// })




const should = chai.should();

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN);

    let todoText = await driver.findElement(By.xpath('//li[last()]')).getText().then(function (value) {
        return value;
    });

    // assert using node assertion
    // assert.strictEqual(todoText, 'Learn Selenium');

    // assert using chai should
    todoText.should.equal('Learn Selenium');

    await driver.quit();
}

example();
