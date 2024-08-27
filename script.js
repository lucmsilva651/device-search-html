// Função de pesquisa por codename
async function searchDevice() {
  const codenameInput = document.getElementById('codenameInput').value.trim();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (!codenameInput) {
    resultDiv.innerHTML = 'Please enter a codename.';
    return;
  }

  try {
    const response = await fetch('https://raw.githubusercontent.com/androidtrackers/certified-android-devices/master/by_device.json');
    const data = await response.json();

    let found = false;
    for (const key in data) {
      if (key.toLowerCase().includes(codenameInput.toLowerCase())) {
        const devices = data[key];
        devices.forEach((device, index) => {
          found = true;
          const isLast = index === devices.length - 1;
          const deviceInfo = `
            <p><strong>Name:</strong> ${device.name}</p>
            <p><strong>Codename:</strong> ${key}</p>
            <p><strong>Brand:</strong> ${device.brand}</p>
            <p><strong>Model:</strong> ${device.model}</p>
            ${isLast ? '' : '<hr>'}
          `;
          resultDiv.innerHTML += deviceInfo;
        });
      }
    }

    if (!found) {
      resultDiv.innerHTML = 'No device found with that codename.';
    }
  } catch (error) {
    console.error('Error fetching information:', error);
    resultDiv.innerHTML = 'Error fetching information. Please try again later.';
  }
}

// Função de pesquisa por modelo
async function searchByModel() {
  const modelInput = document.getElementById('modelInput').value.trim();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (!modelInput) {
    resultDiv.innerHTML = 'Please enter a model.';
    return;
  }

  try {
    const response = await fetch('https://raw.githubusercontent.com/androidtrackers/certified-android-devices/master/by_device.json');
    const data = await response.json();

    let found = false;
    for (const key in data) {
      const devices = data[key];
      devices.forEach((device, index) => {
        if (device.model.toLowerCase().includes(modelInput.toLowerCase())) {
          found = true;
          const isLast = index === devices.length - 1;
          const deviceInfo = `
            <p><strong>Codename:</strong> ${key}</p>
            <p><strong>Brand:</strong> ${device.brand}</p>
            <p><strong>Model:</strong> ${device.model}</p>
            <p><strong>Name:</strong> ${device.name}</p>
            ${isLast ? '' : '<hr>'}
          `;
          resultDiv.innerHTML += deviceInfo;
        }
      });
    }

    if (!found) {
      resultDiv.innerHTML = 'No device found with that model.';
    }
  } catch (error) {
    console.error('Error fetching information:', error);
    resultDiv.innerHTML = 'Error fetching information. Please try again later.';
  }
}

// Função de pesquisa por nome
async function searchByName() {
  const nameInput = document.getElementById('nameInput').value.trim();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (!nameInput) {
    resultDiv.innerHTML = 'Please enter a name.';
    return;
  }

  try {
    const response = await fetch('https://raw.githubusercontent.com/androidtrackers/certified-android-devices/master/by_device.json');
    const data = await response.json();

    let found = false;
    for (const key in data) {
      const devices = data[key];
      devices.forEach((device, index) => {
        if (device.name.toLowerCase().includes(nameInput.toLowerCase())) {
          found = true;
          const isLast = index === devices.length - 1;
          const deviceInfo = `
            <p><strong>Codename:</strong> ${key}</p>
            <p><strong>Brand:</strong> ${device.brand}</p>
            <p><strong>Model:</strong> ${device.model}</p>
            <p><strong>Name:</strong> ${device.name}</p>
            ${isLast ? '' : '<hr>'}
          `;
          resultDiv.innerHTML += deviceInfo;
        }
      });
    }

    if (!found) {
      resultDiv.innerHTML = 'No device found with that name.';
    }
  } catch (error) {
    console.error('Error fetching information:', error);
    resultDiv.innerHTML = 'Error fetching information. Please try again later.';
  }
}

// Função para abrir a aba correta e limpar o conteúdo da aba anterior
function openTab(evt, tabName) {
  const tabcontents = document.getElementsByClassName("tabcontent");
  const resultDiv = document.getElementById('result');
  
  // Ocultar todos os conteúdos das abas
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }
  
  // Remover a classe "active" de todas as abas
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Exibir a aba selecionada e adicionar a classe "active"
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  
  // Limpar o conteúdo da div de resultados
  resultDiv.innerHTML = '';
}

// Configurar a aba padrão ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tablinks').click();
});
