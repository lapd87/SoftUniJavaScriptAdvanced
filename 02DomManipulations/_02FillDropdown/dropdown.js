function addItem() {
    let newItemText = document.getElementById("newItemText").value;
    let newItemValue = document.getElementById("newItemValue").value;

    let newItem = document.createElement("option");
    newItem.value = newItemValue;
    newItem.textContent = newItemText;

    document.getElementById("menu").appendChild(newItem);

    document.getElementById("newItemText").value="";
    document.getElementById("newItemValue").value="";
}