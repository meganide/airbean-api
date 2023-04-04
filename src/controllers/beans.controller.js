import Menu from "../models/beans/beans.schema.js"

function httpGetMenu(req, res) {
    Menu.find()
    .then((result) => {
        res.send(result)
    })
}

function httpCreateOrder(req, res) {}

export { httpGetMenu, httpCreateOrder };
