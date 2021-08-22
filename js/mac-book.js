// clicking button id
const minMemory = document.getElementById('default-8GB-btn');
const midMemory = document.getElementById('16GB-memory-btn');
const minStorage = document.getElementById('storage-256GB-btn');
const midStorage = document.getElementById('storage-512GB-btn');
const largeStorage = document.getElementById('storage-1TB-btn');
const minDelivery = document.getElementById('free-delivery');
const midDelivery = document.getElementById('delivery-charge');

// innerText value
const memoryValue = document.getElementById('extra-cost');
const storageValue = document.getElementById('storage-value');
const deliveryValue = document.getElementById('delivery-cost');
const bestPriceValue = document.getElementById('best-price');
const TotalValue = document.getElementById('total-cost');

// final price id
let finalCost = document.getElementById('final-cost');

// total sum
function getUpdateValue(){
    const memoryUpdateValue = parseInt(memoryValue.innerText);
    const storageUpdateValue = parseInt(storageValue.innerText);
    const deliveryUpdateValue = parseInt(deliveryValue.innerText);
    const bestPriceUpdateValue = parseInt(bestPriceValue.innerText);
    const addTotalCost = memoryUpdateValue + storageUpdateValue + deliveryUpdateValue + bestPriceUpdateValue;
    TotalValue.innerText = addTotalCost;
    finalCost.innerText = addTotalCost;

}


// add addEventListener on button
minMemory.addEventListener('click',function(){
    memoryValue.innerText = 0;
    getUpdateValue();
});
midMemory.addEventListener('click',function(){
    memoryValue.innerText = 180;
    getUpdateValue();
});
minStorage.addEventListener('click',function(){
    storageValue.innerText = 0;
    getUpdateValue();
});
midStorage.addEventListener('click',function(){
    storageValue.innerText = 100;
    getUpdateValue();
});
largeStorage.addEventListener('click',function(){
    storageValue.innerText = 180;
    getUpdateValue();
});
minDelivery.addEventListener('click',function(){
    deliveryValue.innerText = 0;
    getUpdateValue();
});
midDelivery.addEventListener('click',function(){
    deliveryValue.innerText = 20;
    getUpdateValue();
});
// promo code
document.getElementById('apply-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('input-value');
    const input = inputValue.value;
    const TotalValueText = document.getElementById('total-cost');
    const TotalValue = TotalValueText.innerText;
    const discountAmount = parseInt(TotalValue);
    if(input == "stevekaku"){
        const totalDiscount = (discountAmount / 100)*20;
        finalCost.innerText = totalDiscount;
        inputValue.value = '';

    }
})

