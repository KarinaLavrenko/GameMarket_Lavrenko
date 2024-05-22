// // Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
let itemsArray = [
    {
        email: "23b_bvo@liceum.ztu.edu.ua",
        group: "10-Б 1",
        name: "Башинська Вікторія",
        img_autor: "",
        img_game: "",
        project_name: "Dudi 3",
        project_github: "https://github.com/ViktoriaBashinska/Phaser2stGame",
        project_live_demo: "https://viktoriabashinska.github.io/Phaser2stGame/",
        project_drive: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
        project_form: "https://forms.gle/jHMQsybKdMdUHXKA7",
        gamemarket_name: "Game Market",
        gamemarket_github: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
        gamemarket_page: "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
        pmarket_page: "https://viktoriabashynska.github.io/GameMarket_Bashynska/market.html",
        final_page: "https://viktoriabashynska.github.io/GameMarket_Bashynska/final/final.html"
    },
    {
       title: "Електричний тример 110",
       image: "https://listasad.com.ua/images/0zYEp3pYvDHnhgOHNybNOFpXgsh6Iiz2f6J3xDKiNMs/w:600/bG9jYWw/6Ly8vbGlzdGFzYWQuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL21lZGlhLzI3OTY1L090bWlUSTVyYkFWeTJZYjNDUGE3WUtNWDVid1laNi1tZXRhWTJGMFlXeHZaMTl2Y21sbmFXNWZNamd5TkRFeExtcHdadz09LS5qcGc.webp",
       mono: 43,
       pb: 80,
       price_started: "4 497",
       price_discount: "3 498",
       price_coupon: "3 396",
   },
   {
    title: "Електрична газонокосарка 32",
    image: "https://aqb.com.ua/content/images/34/480x480l50nn0/elektrycheskaia-hazonokosylka-gardena-powermax-32-1200-g2-40502069671976.jpg",
    mono: 43,
    pb: 87,
    price_started: "4 497",
    price_discount: "3 297",
    price_coupon: "3 195",
 },
 {
    title: "Акумуляторний обприскувач 12 N",
    image: "https://hotline.ua/img/tx/449/4492289865.jpg",
    mono: 43,
    pb: 47,
    price_started: "2 190",
    price_discount: "1 698",
    price_coupon: "1 596",
 },
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
    itemsArray
    .forEach((item, index) => {
        // console.log(item)
        // itemsDiv.innerText += item
        // itemsDiv.innerHTML += `<div class = "item">${item}</div>`
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += 
        `
        <div class="item">
        <!-- Блок назва товару -->
        <div class="item-title">${item.title}</div>
        <!-- Блок зображення товару -->
        <div class="item-image"> 
            <img src="${item.image}" class="item-image">
        </div>
        <!-- Блок з оплатою частинами -->
        <div class="parts-pay">
            <div> <img src="img/mono-lapka.png" alt="">${item.mono}</div>
            <div> <img src="img/pb.png" alt="">${item.pb}</div>
        </div>
        <!-- Блок ціни -->
        <div class="price">
            <div> <span> ${item.price_started}</span><sup>грн</sup></div>
            <div> <span> ${item.price_discount}</span><sup>грн</sup></div>
        </div>
        <!-- Блок бонусної ціни -->
        <div class="price bonus">
            <div>ціна за купоном</div>
            <div><span> ${item.price_coupon}</span><sup>грн</sup></div>
        </div>
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