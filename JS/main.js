const mainList = [];

addProduct = () => {
    let productInput = prompt("Ingresa un Producto para agregar")
    if (productInput) {
        mainList.push(productInput);
        alert(`Producto "${productInput}" agregado a la lista.`);
    } else {
        alert("No se ingresó ningún producto.");
    }
};
const removeProduct = () => {
    if (mainList.length === 0) {
        alert("La lista está vacía, no hay productos para eliminar.");
        return;
    }
    let productOutput = prompt("Ingresa el producto que deseas eliminar");
    let index = mainList.indexOf(productOutput);
    if (index !== -1) {
        mainList.splice(index, 1);
        alert(`Producto "${productOutput}" eliminado de la lista.`);
    } else {
        alert(`El producto "${productOutput}" no está en la lista.`);
    }
};
const showList = () => {
    if (mainList.length === 0) {
        alert("La lista está vacía.");
    } else {let listText = "🛒 Lista de Compras:\n\n";
        mainList.forEach((product, index) => {
            listText += `${index + 1}. ${product}\n`;
        });
        alert(listText);
    }
};
const startSimulator = () => {
    let option = "";

    while (option !== "4") {
        option = prompt(
            "Selecciona una opción:\n1 - Agregar producto\n2 - Eliminar producto\n3 - Mostrar lista\n4 - Salir"
        );

        if (option === "1") {
            addProduct();
        } else if (option === "2") {
            removeProduct();
        } else if (option === "3") {
            showList();
        } else if (option === "4") {
            let confirmExit = confirm("¿Estás seguro que deseas salir?");
            if (confirmExit) {
                alert("Gracias por usar el simulador de lista de compras.\nDeberas reiniciar la página para volver a usarlo.");
            } else {
                option = ""; 
            }
        } else {
            alert("Opción no válida. Intenta nuevamente.");
        }
    }
};

setTimeout(() => {
    startSimulator();
}, 3000);



    

