document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('tbody');
    const apiUrl = 'https://fakestoreapi.com/products'; // Substitua pela URL da sua API

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then(products => {
        // 'products' é um array de objetos, onde cada objeto representa um produto
        products.forEach(product => {
          const row = tableBody.insertRow(); // Cria uma nova linha (<tr>) no tbody
  
          // Cria as células (<td>) para cada coluna
          const idCell = row.insertCell();
          const titleCell = row.insertCell();
          const priceCell = row.insertCell();
          const descriptionCell = row.insertCell();
          const imageCell = row.insertCell();
          const ratingCell = row.insertCell();
          const rateCell = row.insertCell();
          const countCell = row.insertCell();
  
          // Preenche as células com os dados do produto
          idCell.textContent = product.id;
          titleCell.textContent = product.title;
          priceCell.textContent = product.price;
          descriptionCell.textContent = product.description;
  
          // Para a imagem, você precisará criar um elemento <img>
          const img = document.createElement('img');
          img.src = product.image;
          img.style.maxWidth = '25px'; // Defina um tamanho máximo para a imagem
          imageCell.appendChild(img);
  
          // Para o rating, que é um objeto com 'rate' e 'count'
          ratingCell.textContent = `Rate: ${product.rating.rate}, Count: ${product.rating.count}`;
          rateCell.textContent = product.rating.rate;
          countCell.textContent = product.rating.count;
        });
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
        const errorRow = tableBody.insertRow();
        const errorCell = errorRow.insertCell();
        errorCell.colSpan = 8; // Define que a célula ocupa todas as colunas
        errorCell.textContent = `Ocorreu um erro ao carregar os dados: ${error.message}`;
      });
  });