import { EventEmitter } from 'events';

function notificationServer() {

    const notificationServer = new EventEmitter();

    let listeners = [];
    for (let i = 0; i < 10; i++) {
        let iphone = new EventEmitter();

        iphone.on('message', async data => {
            new Promise(resolve => {
                setTimeout(() => {
                    console.log(data);
                    resolve(data)
                }, 2000);
            })
        });

        listeners.push(iphone)
    }

    notificationServer.on('message', (data) => {
        listeners.map(listener => {
            listener.emit('message', data)
        })
    });

    notificationServer.emit('message', 'message to iphones');

}

function callingFunctionInsideAnotherFunctionWithoutCallingThem() {

    let button = new EventEmitter();

    function listen(button) {
        console.log('listening for clicks')
        // after some time user clicked
        button.emit('click');
        console.log('clicked')
    }

    async function getUser() {
        // setTimeout(() => {
        console.log('going to call api')
        const response = await Promise.resolve({ 'id': 1 })
        return response;
        // }, 100)
    }

    // (function () {

    button.on('click', async () => {
        console.log('click handler')
        const user = await getUser()
        console.log(user);
    });

    listen(button);

    // setInterval(() => ping(g), 100)
    // })();

}

callingFunctionInsideAnotherFunctionWithoutCallingThem();

