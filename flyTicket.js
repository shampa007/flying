function purchaseTicket(type , isIncrease ){
    const ticketInput = document.getElementById(type + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketTotal = ticketCount ;
    if (isIncrease == true) {
        ticketTotal = ticketCount + 1 ;
        document.getElementById(type + '-count').value = ticketTotal;

    const subTotal = document.getElementById('subtotal-count').innerText;
    const subTotalCount = parseInt(subTotal);
    let subtotal = subTotalCount ;
    if ( type == 'firstClass' ) {
         subtotal = subTotalCount + 150; 
    }
    if (type == 'economy' ) {
        subtotal = subTotalCount + 100; 
   }
    document.getElementById('subtotal-count').innerText = subtotal;

    const tax = document.getElementById('tax-total').innerText;
    const taxAmount = parseFloat(tax);
    const taxTotal = Math.round(subtotal * 0.1);
    document.getElementById('tax-total').innerText = taxTotal;

    const total = document.getElementById('total-count').innerText;
    const totalAmount = parseFloat(total);
    const totalPayment = subtotal + taxTotal ;
    document.getElementById('total-count').innerText = totalPayment;
}

    if (isIncrease == false && ticketCount > 0) { 
        ticketTotal = ticketCount - 1 ;
        document.getElementById(type + '-count').value = ticketTotal;

    const subTotal = document.getElementById('subtotal-count').innerText;
    const subTotalCount = parseInt(subTotal);
    let subtotal = subTotalCount ;
    if ( type == 'firstClass' ) {
         subtotal = subTotalCount - 150; 
    }
    if (type == 'economy' ) {
        subtotal = subTotalCount - 100; 
   }
    document.getElementById('subtotal-count').innerText = subtotal;

    const tax = document.getElementById('tax-total').innerText;
    const taxAmount = parseFloat(tax);
    const taxTotal = Math.round(subtotal * 0.1);
    document.getElementById('tax-total').innerText = taxTotal;

    const total = document.getElementById('total-count').innerText;
    const totalAmount = parseFloat(total);
    const totalPayment = subtotal + taxTotal ;
    document.getElementById('total-count').innerText = totalPayment;
}
}
//     document.getElementById(type + '-count').value = ticketTotal;

//     const subTotal = document.getElementById('subtotal-count').innerText;
//     const subTotalCount = parseInt(subTotal);
//     let subtotal = subTotalCount ;
//     if ( type == 'firstClass' ) {
//          subtotal = subTotalCount + 150; 
//     }
//     if (type == 'economy' ) {
//         subtotal = subTotalCount + 100; 
//    }
//     document.getElementById('subtotal-count').innerText = subtotal;

//     const tax = document.getElementById('tax-total').innerText;
//     const taxAmount = parseFloat(tax);
//     const taxTotal = Math.round(subtotal * 0.1);
//     document.getElementById('tax-total').innerText = taxTotal;

//     const total = document.getElementById('total-count').innerText;
//     const totalAmount = parseFloat(total);
//     const totalPayment = subtotal + taxTotal ;
//     document.getElementById('total-count').innerText = totalPayment;



// first class increase event handler 
// document.getElementById('firstClass-increase').addEventListener('click', function () {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassTotal = firstClassCount + 1;
//     document.getElementById('firstClass-count').value = firstClassTotal;

//     const subTotal = document.getElementById('subtotal-count').innerText;
//     const subTotalCount = parseInt(subTotal);
//     const subtotal = subTotalCount + 150;
//     document.getElementById('subtotal-count').innerText = subtotal;

//     const tax = document.getElementById('tax-total').innerText;
//     const taxAmount = parseFloat(tax);
//     const taxTotal = Math.round(subtotal * 0.1);
//     document.getElementById('tax-total').innerText = taxTotal;

//     const total = document.getElementById('total-count').innerText;
//     const totalAmount = parseFloat(total);
//     const totalPayment = subtotal + taxTotal ;
//     document.getElementById('total-count').innerText = totalPayment;
// })


// economy increase event handler
// document.getElementById('economy-increase').addEventListener('click', function () {
//     const economyClassInput = document.getElementById('economy-count');
//     const economyClassCount = parseInt(economyClassInput.value);
//     const economyClassTotal = economyClassCount + 1;
//     document.getElementById('economy-count').value = economyClassTotal;

//     const subTotal = document.getElementById('subtotal-count').innerText;
//     const subTotalCount = parseInt(subTotal);
//     const subtotal = subTotalCount + 100;
//     document.getElementById('subtotal-count').innerText = subtotal;

//     const tax = document.getElementById('tax-total').innerText;
//     const taxAmount = parseFloat(tax);
//     const taxTotal = Math.round(subtotal * 0.1);
//     document.getElementById('tax-total').innerText = taxTotal;

//     const total = document.getElementById('total-count').innerText;
//     const totalAmount = parseFloat(total);
//     const totalPayment = subtotal + taxTotal ;
//     document.getElementById('total-count').innerText = totalPayment;
// })

// first class decrease event handler
// document.getElementById('firstClass-decrease').addEventListener('click', function () {
//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     let firstClassTotal = firstClassCount;
//     if (firstClassCount > 0) {
//         firstClassTotal = firstClassCount - 1;
//         document.getElementById('firstClass-count').value = firstClassTotal;

//         const subTotal = document.getElementById('subtotal-count').innerText;
//         const subTotalCount = parseInt(subTotal);
//         const subtotal = subTotalCount - 150;
//         document.getElementById('subtotal-count').innerText = subtotal;

//         const tax = document.getElementById('tax-total').innerText;
//         const taxAmount = parseFloat(tax);
//         const taxTotal = Math.round(subtotal * 0.1);
//         document.getElementById('tax-total').innerText = taxTotal;

//         const total = document.getElementById('total-count').innerText;
//         const totalAmount = parseFloat(total);
//         const totalPayment = subtotal + taxTotal ;
//         document.getElementById('total-count').innerText = totalPayment;
//     }
// })

// economy decrease event handler
// document.getElementById('economy-decrease').addEventListener('click', function () {
//     const economyClassInput = document.getElementById('economy-count');
//     const economyClassCount = parseInt(economyClassInput.value);
//     let economyClassTotal = economyClassCount;
//     if (economyClassCount > 0) {
//         economyClassTotal = economyClassCount - 1;
//         document.getElementById('economy-count').value = economyClassTotal;

//         const subTotal = document.getElementById('subtotal-count').innerText;
//         const subTotalCount = parseInt(subTotal);
//         const subtotal = subTotalCount - 100;
//         document.getElementById('subtotal-count').innerText = subtotal;

//         const tax = document.getElementById('tax-total').innerText;
//         const taxAmount = parseFloat(tax);
//         const taxTotal = Math.round(subtotal * 0.1);
//         document.getElementById('tax-total').innerText = taxTotal;

//         const total = document.getElementById('total-count').innerText;
//         const totalAmount = parseFloat(total);
//         const totalPayment = subtotal + taxTotal ;
//         document.getElementById('total-count').innerText = totalPayment;
//     }

// })


