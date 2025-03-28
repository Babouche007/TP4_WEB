const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode');

 if(document.body.classList.contains('dark-mode')) {
 toggleBtn.textContent = '☀️ Mode clair';
 } else {
 toggleBtn.textContent = '🌙 Mode sombre';
 }
})



function handlePriceSearch() {

    const priceInput = document.getElementById('price');
    
    const enteredPrice = priceInput.value;
    console.log(enteredPrice);
    const products = document.querySelectorAll('.produits div');
    products.forEach(product => {
        const priceElement = product.querySelector('p');
        const price = parseFloat(priceElement.textContent.replace('€', ''));
        if (price >= enteredPrice) {
            product.style.display = 'none';
        }
        else
        {
            product.style.display = 'block';

        }
        console.log(price);
    })
}
