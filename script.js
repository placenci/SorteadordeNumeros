document.getElementById('draw-button').addEventListener('click', () => {
   const minValue = parseInt(document.getElementById('min-value').value);
   const maxValue = parseInt(document.getElementById('max-value').value);
   const quantity = parseInt(document.getElementById('quantity').value);
   const allowRepeat = document.getElementById('repeat').value === 'true';
   const resultsContainer = document.getElementById('results');
   resultsContainer.innerHTML = ''; // Limpar resultados anteriores

   if (isNaN(minValue) || isNaN(maxValue) || isNaN(quantity)) {
       alert('Por favor, preencha todos os campos corretamente.');
       return;
   }

   if (minValue >= maxValue || quantity <= 0) {
       alert('Intervalo ou quantidade inválidos.');
       return;
   }

   const generateNumbers = () => {
       const numbers = [];
       while (numbers.length < quantity) {
           const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
           if (allowRepeat || !numbers.includes(randomNumber)) {
               numbers.push(randomNumber);
           }
       }
       return numbers;
   };

   const numbers = generateNumbers();
   numbers.forEach((num, index) => {
       setTimeout(() => {
           const numberElement = document.createElement('span');
           numberElement.textContent = num;
           resultsContainer.appendChild(numberElement);
       }, index * 500); // Animação a cada 500ms
   });
});
