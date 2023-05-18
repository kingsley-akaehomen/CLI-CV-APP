#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import { start } from './controller.js'


let visitorName;

 const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));


async function welcome() {

    const chalkTitle = chalkAnimation.rainbow('WELCOME TO MY CV COMPARTMENT!! \n');

    await sleep();
    chalkTitle.stop();

    console.log(`
 ==Feel free to peruse==
 I hope you get the best of this experience.
 you can ${chalk.bgRed('proceed ==>')}
    `)

}


async function getName() {
    const answers = await inquirer.prompt({
        name: 'visitor_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'visitor'
        }
    });

    visitorName = answers.visitor_name;

}

async function displayInfo() {
    const answers = await inquirer.prompt({
        name: 'c1',
        type: 'list',
        message: 'select an option to get my CV information',
        choices: [
            'About',
            'Experience',
            'Skills',
            'Exit'
        ]
    })

    if (answers.c1 === 'About') {
        const spinner = createSpinner('fetching data.....🏃🏃🏃🏃🏃').start();
        await sleep();
        spinner.success({ text: `data fetched 🕺🕺🕺🕺🕺` });
        console.log(`
        My Name is kingsley Akaehomen. \na web developer and a Real Estate strategist. \n 
        I pride myself in my ability to strategically \norganize a project portfolio from conception to execution.
        `);
        back();
    } else if (answers.c1 === 'Experience') {
        const spinner = createSpinner('fetching data.....🏃🏃🏃🏃🏃').start();
        await sleep();
        spinner.success({ text: `data fetched 🕺🕺🕺🕺🕺` });
        console.log('worked at Valley Oak Realty, Sterlingwell Homes, Stutern Inc');
        back();
    } else if (answers.c1 === 'Skills') {
        const spinner = createSpinner('fetching data.....🏃🏃🏃🏃🏃').start();
        await sleep();
        spinner.success({ text: `data fetched 🕺🕺🕺🕺🕺` });
        console.log('Js, Html, Css, Jupyther Notebook, Nodejs, MongoDB');
        back();
    } else { exit(); }


}

async function back() {
    const answers = await inquirer.prompt({
        name: 'c2',
        type: 'list',
        message: 'press enter to go back..',
        choices: ['back']
    })
    if (answers.c2 === 'back') {
        displayInfo();
    }
}


function exit() {
    console.clear();
    figlet(`Bye, ${visitorName} !\n`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');

        console.log(
            chalk.green(
                `Thank You for visiting my CV compartment. `
            )
        );
        process.exit(0);
    });
}
console.clear();
await start();
await welcome();
await getName();
await displayInfo();