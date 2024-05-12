//Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js')

//Визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
    // 'Газонокосарка 430',
    // 'Електричний тример 130',
    // 'Електрична газонокосарка 320',
    // 'Акумуляторний оприскувач 12 E',
]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

// Перевірка існування знайденого блоку
if (itemsDiv) {
    // Вивід знайденого елементу
    // console.log(itemsDiv)

    // // Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // // Додавання тексту в блок
    // itemsDiv.innerText = 'Перший Програмно доданий текст'
    // // itemsDiv.innerText = 'Другий Програмно доданий текст' 
    // itemsDiv.innerText += 'Другий Програмно доданий текст'

    // Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML = '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'
    // itemsDiv.innerHTML += '<div class = item></div>'

    // for (let i = 0; i < 100; i++) {
    //     itemsDiv.innerHTML += '<div class = item></div>'
    // }
    //Виведення елементів масиву
    itemsArray.forEach((item, index) => {
        // console.log(item)
        // itemsDiv.innerText += item
        // itemsDiv.innerHTML += `<div class = "item">${item}</div>`
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += 
        `
        <div class = "item">
            <h2>Товар №${index+1} з ${itemsArray.length}</h2>
            <p>${item}</p>
        </div>
        `
    })
} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}

// //Визначення масиву товарів
// // let itemsArray = ['','','','']
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     // 'Газонокосарка 430',
//     // 'Електричний тример 130',
//     // 'Електрична газонокосарка 320',
//     // 'Акумуляторний оприскувач 12 E',
// ]

// //Виведення елементів масиву
// itemsArray.forEach((item) => {
//     console.log(item)
// })

// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item) => {
//     console.log(index + '-й елемент', item)
// })

// //Виведення в консоль масиву
// console.log(itemsArray)

// //Виведення в консоль елементів масиву
// for (let i=0; i<itemsArray.length; i++) {
//     console.log(itemsArray[i])
// }

// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль номерів та значень елементів масиву
// for (let i=0; i<itemsArray.length; i++) {
//     console.log(i + '-й елемент: ', itemsArray[i])
// }
