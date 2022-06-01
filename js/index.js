const chefReceiverd = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Chef Received'
            resolve(orderNumber)
        }, 2000)
    })
}

const pizzaSauceAdded = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Pizza Sauce Added'
            resolve(orderNumber)
        }, 10000)
    })
}

const firstLayerOfCheezeAdded = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'First Layer of Cheeze Added'
            resolve(orderNumber)
        }, 5000)
    })
}

const toppingAdded = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Topping Added'
            resolve(orderNumber)
        }, 12000)
    })
}

const secondLayerOfCheezeAdded = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Second Layer of Cheeze Added!'
            resolve(orderNumber)
        }, 5000)
    })
}


const pizzaBaked = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Pizza Baked!'
            resolve(orderNumber)
        }, 15000)
    })
}

const oreganoAdded = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Oregano Added and packed!'
            resolve(orderNumber)
        }, 8000)
    })
}

const packageReceivedAtCounter = (orderNumber) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNumber).innerText = 'Package received at counter!'
            resolve(orderNumber)
        }, 5000)
    })
}