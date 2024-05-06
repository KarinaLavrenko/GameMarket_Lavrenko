
//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js')

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv){
    //Вивід знайденого елементу
    console.log(itemsDiv)
    //Вивід значення поля знайденого елементу
    //console.log('Поле classList: ', itemsDiv.classList)
    //console.log('Поле id: ', itemsDiv.id)
    //console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    //console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    //Додавання тексту в блок
    //itemsDiv.innerText = 'Перший Програино доданий текст'
    //itemsDiv.innerText += 'Другий Програино доданий текст'
    //Додавання відформатованого HTML коду і блок
    //itemsDiv.innerHTML += '<div class = item></div>'
    //itemsDiv.innerHTML += '<div class = item></div>'
    //itemsDiv.innerHTML += '<div class = item></div>'
    //itemsDiv.innerHTML += '<div class = item></div>'
    for (let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class = item></div>'
    }
    
} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}
