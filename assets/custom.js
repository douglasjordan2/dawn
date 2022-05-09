function productCardATC(id) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      items: [
        {
          id: id,
          quantity: 1
        }
      ]
    })
  }).then(res => res.json())
    .then(data => console.log(data))
}

function changeProductTab(el) {
  const tabs = document.querySelectorAll('.product-tabs__content .tab-content')

  alert()
}
