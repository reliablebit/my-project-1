// for burger builder
  
  const burger = document.getElementById('burger');
  const totalDisplay = document.getElementById('total');
  
  
  const ingredients = {
    meat: { class: 'ismeat', price: 1.50 },
    lettuce: { class: 'islettuce', price: 0.50 },
    cheese: { class: 'ischeese', price: 1.00 }
  };

 
  let totalPrice = 3.00;
  updatePrice();

  
  document.querySelectorAll('.button-group').forEach(group => {
    const type = group.querySelector('span').textContent.toLowerCase();
    const [minusBtn, plusBtn] = group.querySelectorAll('button');
    

    plusBtn.addEventListener('click', () => addIngredient(type));
    minusBtn.addEventListener('click', () => removeIngredient(type));
  });


    function addIngredient(type) {
    const div = document.createElement('div');
    div.className = `ingredient ${ingredients[type].class}`;
    
    
    const bottomBun = document.querySelector('.bun-bottom');
    burger.insertBefore(div, bottomBun);
    
    
    totalPrice += ingredients[type].price;
    updatePrice();
  }

  
  function removeIngredient(type) {
    const allOfType = document.querySelectorAll(`.${ingredients[type].class}`);
    if (allOfType.length > 0) {
      allOfType[allOfType.length - 1].remove();
      totalPrice -= ingredients[type].price;
      updatePrice();
    }
  }
  function updatePrice() {
    totalDisplay.textContent = totalPrice.toFixed(2);
  } 
  











    // const burger = document.getElementById('burger');
    // const totalDisplay = document.getElementById('total');
    // const emptyMessage = document.getElementById('empty-message');

    // const ingredientData = [
    //   { type: 'meat', class: 'ismeat', price: 1.50 },
    //   { type: 'lettuce', class: 'islettuce', price: 0.50 },
    //   { type: 'cheese', class: 'ischeese', price: 1.00 }
    // ];

    // let addedIngredients = [];

    // function updatePrice() {
    //   let total = 3.00; // Base price for buns
    //   for (let i = 0; i < addedIngredients.length; i++) {
    //     total += addedIngredients[i].price;
    //   }
    //   totalDisplay.textContent = total.toFixed(2);
    // }

    // function updateBurgerDisplay() {
    //   const current = burger.querySelectorAll('.ingredient');
    //   current.forEach(item => {
    //     if (item.className.indexOf('bun-top') === -1 && item.className.indexOf('bun-bottom') === -1) {
    //       item.remove();
    //     }
    //   });

    //   if (addedIngredients.length > 0) {
    //     emptyMessage.style.display = 'none';
    //   } else {
    //     emptyMessage.style.display = 'block';
    //   }

    //   const bottomBun = burger.querySelector('.bun-bottom');
    //   for (let i = 0; i < addedIngredients.length; i++) {
    //     const div = document.createElement('div');
    //     div.className = `ingredient ${addedIngredients[i].class}`;
    //     burger.insertBefore(div, bottomBun);
    //   }
    // }

    // function addIngredient(type) {
    //   for (let i = 0; i < ingredientData.length; i++) {
    //     if (ingredientData[i].type === type) {
    //       addedIngredients.push(ingredientData[i]);
    //       break;
    //     }
    //   }
    //   updateBurgerDisplay();
    //   updatePrice();
    // }

    // function removeIngredient(type) {
    //   for (let i = addedIngredients.length - 1; i >= 0; i--) {
    //     if (addedIngredients[i].type === type) {
    //       addedIngredients.splice(i, 1);
    //       break;
    //     }
    //   }
    //   updateBurgerDisplay();
    //   updatePrice();
    // }

    // document.querySelectorAll('.button-group button').forEach(button => {
    //   button.addEventListener('click', (e) => {
    //     const text = button.textContent;
    //     const parent = button.closest('.ingredient-controls');
    //     const label = parent.querySelector('.ingredient-label').textContent.toLowerCase();

    //     if (text === '+') {
    //       addIngredient(label);
    //     } else if (text === '−') {
    //       removeIngredient(label);
    //     }
    //   });
    // });

    // // Initialize with empty burger
    // updateBurgerDisplay();
    // updatePrice();



// const burger = document.getElementById('burger');
// const totalDisplay = document.getElementById('total');

// const ingredients = {
//   meat: { class: 'ismeat', price: 1.50 },
//   lettuce: { class: 'islettuce', price: 0.50 },
//   cheese: { class: 'ischeese', price: 1.00 }
// };

// let totalPrice = 3.00;
// updatePrice();
// checkIngredients();

// document.querySelectorAll('.button-group').forEach(group => {
//   const type = group.querySelector('span').textContent.toLowerCase();
//   const [minusBtn, plusBtn] = group.querySelectorAll('button');

//   plusBtn.addEventListener('click', () => {
//     addIngredient(type);
//     checkIngredients();
//   });

//   minusBtn.addEventListener('click', () => {
//     removeIngredient(type);
//     checkIngredients();
//   });
// });

// function addIngredient(type) {
//   const div = document.createElement('div');
//   div.className = `ingredient ${ingredients[type].class}`;
//   const bottomBun = document.querySelector('.bun-bottom');
//   burger.insertBefore(div, bottomBun);
//   totalPrice += ingredients[type].price;
//   updatePrice();
// }

// function removeIngredient(type) {
//   const allOfType = document.querySelectorAll(`.${ingredients[type].class}`);
//   if (allOfType.length > 0) {
//     allOfType[allOfType.length - 1].remove();
//     totalPrice -= ingredients[type].price;
//     updatePrice();
//   }
// }

// function updatePrice() {
//   totalDisplay.textContent = totalPrice.toFixed(2);
// }

// function checkIngredients() {
//   const hasIngredients = Object.values(ingredients).some(ing => {
//     return document.querySelector(`.${ing.class}`);
//   });

//   let label = document.getElementById('no-ingredients-label');

//   if (!hasIngredients) {
//     if (!label) {
//       label = document.createElement('div');
//       label.id = 'no-ingredients-label';
//       label.textContent = 'No ingredients';
//       label.style.textAlign = 'center';
//       // label.style.fontStyle = 'italic';
//       const bottomBun = document.querySelector('.bun-bottom');
//       burger.insertBefore(label, bottomBun);
//     }
//   } else {
//     if (label) {
//       label.remove();
//     }
//   }
// }
