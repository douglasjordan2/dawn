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
  document.querySelectorAll('.product-tabs__content .tab-content').forEach(tab => {
    const idCheck = el.id.split('-')[0]

    if(tab.id === idCheck) {
      tab.classList.add('active')
    } else {
      if(tab.classList.contains('active')) tab.classList.remove('active')
    }
  })

  document.querySelectorAll('.product-tabs__nav-toggle').forEach(toggle => {
    if(el === toggle) {
      toggle.classList.add('active')
    } else {
      if(toggle.classList.contains('active')) toggle.classList.remove('active')
    }
  })
}

function productFaqToggle(el) {
  if(el.parentNode.classList.contains('active')) {
    el.parentNode.classList.remove('active') 
    return
  }

  el.closest('ul').querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active')
  })
   
  el.closest('ul').querySelectorAll('.faq-item').forEach(item => {
    if(el === item.querySelector('.faq-accordion-toggle')) {
      item.classList.add('active')
    }
  })
}
