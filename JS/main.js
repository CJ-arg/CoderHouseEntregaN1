const mainList = JSON.parse(localStorage.getItem("mainList")) || [];
const resetButton = document.getElementById("resetBtn");
const inputProduct = document.getElementById("productInput");
const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("removeBtn");
const showButton = document.getElementById("showBtn");
const productList = document.getElementById("productList");


const addProduct = (product) => {
  if (product.trim() !== "") {
    mainList.push(product.trim());
    inputProduct.value = "";
    saveList();
  }
};

const removeProduct = (productToRemove) => {
  const index = mainList.indexOf(productToRemove.trim());
  if (index !== -1) {
    mainList.splice(index, 1);
    saveList();
  } else {
    alert(`El producto "${productToRemove}" no está en la lista.`);
  }
};

const renderList = () => {
  productList.innerHTML = "";
  if (mainList.length === 0) {
    productList.innerHTML = "<li>La lista está vacía.</li>";
  } else {
    for (let i = 0; i < mainList.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${i + 1}. ${mainList[i]}`;
      productList.appendChild(li);
    }
  }
};


const saveList = () => {
  localStorage.setItem("mainList", JSON.stringify(mainList));
};

addButton.addEventListener("click", () => {
  addProduct(inputProduct.value);
});

removeButton.addEventListener("click", () => {
  removeProduct(inputProduct.value);
  renderList();
});

resetButton.addEventListener("click", () => {
  if (confirm("¿Estás seguro que deseas reiniciar la lista?")) {
    localStorage.removeItem("mainList");
    mainList.length = 0; // Vacía el array
    productList.innerHTML = ""; // Limpia la lista visualmente
    alert("¡Lista reiniciada!");
  }
});

showButton.addEventListener("click", renderList);

const hideButton = document.getElementById("hideBtn");

hideButton.addEventListener("click", () => {
  productList.innerHTML = "";
});


