let orderBlocks = document.getElementsByClassName('order-block');
let cardHeaders = document.getElementsByClassName('card-header');
let parentDiv = document.getElementById('parent-div');
let noOrderImg = document.getElementById('no-order-img');

const createNewOrderColumn = (orderIdInput) => {

    let coldiv = document.createElement('div');
    let cardDiv = document.createElement('div');
    let cardHeaderDiv = document.createElement('div');
    let cardBodyDiv = document.createElement('div');
    let cardTitleH5 = document.createElement('h5');
    let cardTextP = document.createElement('p');
    let cardOrderStatusSpan = document.createElement('span');
    let cardButtonA = document.createElement('a');
    let cardFooter = document.createElement('div');


    let cardHeaderDivText = document.createTextNode('Order id: ' + orderIdInput);
    let cardTitleH5Text = document.createTextNode('Bill Amount : $152');
    let cardTextPText = document.createTextNode('Corn Delight large size pizza -2 Nos');
    let cardButtonAText = document.createTextNode('cancel Order');
    let cardOrderStatusText = document.createTextNode('PIZZA BAKED!');

    /*----------------------appendChild------------------------- */

    parentDiv.appendChild(coldiv);
    coldiv.appendChild(cardDiv);
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooter);
    cardBodyDiv.appendChild(cardTitleH5);
    cardBodyDiv.appendChild(cardTextP);
    cardOrderStatusSpan.appendChild(cardOrderStatusText);
    cardBodyDiv.appendChild(cardOrderStatusSpan);
    cardFooter.appendChild(cardButtonA)
    cardTitleH5.appendChild(cardTitleH5Text);

    cardTextP.appendChild(cardTextPText);
    cardButtonA.appendChild(cardButtonAText);
    cardHeaderDiv.appendChild(cardHeaderDivText);

    /*----------------------adding class------------------------- */

    coldiv.classList = 'col-md-4 col-xs-12 order-block';
    cardDiv.classList = 'card text-center';
    cardHeaderDiv.classList = 'card-header';
    cardBodyDiv.classList = 'card-body';
    cardTitleH5.classList = 'card-title';
    cardTextP.classList = 'card-text';
    cardButtonA.classList = 'btn btn-danger cancel-button';
    cardFooter.classList = 'card-footer';
    cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'
    cardHeaderDiv.id = 'order-id-display-1';
    cardButtonA.href = '#';

    cardOrderStatusSpan.id = orderIdInput;

    cardButtonA.addEventListener('click', () => {
        coldiv.style.display = 'none'
    })
}

const executeOrder = () => {
    noOrderImg.style.display = 'none';
    let orderIdInput = document.getElementById('order-id-input').value;
    if (!orderIdInput.length) {
        alert('Please enter a valid order id!')
        return
    }

    createNewOrderColumn(orderIdInput);

    document.getElementById(orderIdInput).innerText = 'Order Placed'

    chefReceiverd(orderIdInput)
        .then(pizzaSauceAdded)
        .then(firstLayerOfCheezeAdded)
        .then(toppingAdded)
        .then(secondLayerOfCheezeAdded)
        .then(pizzaBaked)
        .then(oreganoAdded)
        .then(packageReceivedAtCounter)
        .then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
        .catch(err => console.log(err))
}


{/* <div class="col-md-4 col-xs-12 order-block">
    <div class="card text-center">
        <div class="card-header" id="order-id-display-1">
            Order Id: 2022052233
        </div>
        <div class="card-body">
            <h5 class="card-title">Bill Amount : $152</h5>
            <p class="card-text">
                Corn Delight large size pizza -2 Nos
            </p>
            <span class="badge rounded-pill bg-success order-status">PIZZA BAKED!</span>
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-danger cancel-button">Cancel Order</a>
        </div>
    </div>
</div> */}

/*--------------------Example------------------------- */

// let newDiv = document.createElement('div');
// let newH5 = document.createElement('h5');
// let newH5Text = document.createTextNode('we created this HTML part using JS');

// newH5.appendChild(newH5Text);
// newDiv.appendChild(newH5);
// parentDiv.appendChild(newDiv);

// <div>
//     <h5>we created this HTML part using JS</h5>
// </div>
/*--------------------Example------------------------- */
 