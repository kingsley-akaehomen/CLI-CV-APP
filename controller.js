import figlet from 'figlet';

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

export async function start() {

    figlet(`Hellooooo  \n`, (err, data) => {

        console.log(data);

    });
    await sleep()
}
