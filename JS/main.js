const mainList = [];

const addProduct = (list) => {
    let productInput = prompt("Ingresa un Producto para agregar");
    if (productInput) {
        list.push(productInput);
        alert(`Producto "${productInput}" agregado a la lista.`);
    } else {
        alert("No se ingresó ningún producto.");
    }
};

const removeProduct = (list) => {
    if (list.length === 0) {
        alert("La lista está vacía, no hay productos para eliminar.");
        return;
    }
    let productOutput = prompt("Ingresa el producto que deseas eliminar");
    let index = list.indexOf(productOutput);
    if (index !== -1) {
        list.splice(index, 1);
        alert(`Producto "${productOutput}" eliminado de la lista.`);
    } else {
        alert(`El producto "${productOutput}" no está en la lista.`);
    }
};


const showList = (list) => {
    if (list.length === 0) {
        alert("La lista está vacía.");
    } else {
        let listText = "🛒 Lista de Compras:\n\n";
        for (let i = 0; i < list.length; i++) {
            listText += `${i + 1}. ${list[i]}\n`;
        }
        alert(listText);
    }
};


const startSimulator = () => {
    let option = "";

    while (option !== "4") {
        option = prompt(
            "Selecciona una opción:\n1 - Agregar producto\n2 - Eliminar producto\n3 - Mostrar lista\n4 - Salir"
        );

        switch (option) {
            case "1":
                addProduct(mainList);
                break;
            case "2":
                removeProduct(mainList);
                break;
            case "3":
                showList(mainList);
                break;
            case "4":
                const confirmExit = confirm("¿Estás seguro que deseas salir?");
                if (confirmExit) {
                    alert("Gracias por usar el simulador de lista de compras.\nDeberás reiniciar la página para volver a usarlo.");
                } else {
                    option = "";
                }
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
                break;
        }
    }
};

startSimulator(); 

