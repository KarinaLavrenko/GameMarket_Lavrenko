let itemsArray = [
    {
        "email": "23b_bvo@liceum.ztu.edu.ua",
        "group": "10-Б 1",
        "name": "Башинська Вікторія",
        "project_name": "Dudi 3",
        "project_github": "https://github.com/ViktoriaBashinska/Phaser2stGame",
        "project_demo": "https://viktoriabashinska.github.io/Phaser2stGame/",
        "project_drive": "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
        "project_form": "https://forms.gle/jHMQsybKdMdUHXKA7",
        "gamemarket_github": "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
        "gamemarket_demo": "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
        "gamemarket_market_page": "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
        "gamemarket_final_page": "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html",
        "img_author": "Башинська.jpg",
        "img_game": ""
    }
];

document.addEventListener("DOMContentLoaded", function() {
    let project = itemsArray[0];

    document.getElementById("project-name").textContent = project.project_name;
    document.getElementById("author-info").textContent = `${project.name} ${project.group} ${project.email}`;


    document.getElementById("github-repo").href = project.project_github;
    document.getElementById("github-pages-game").href = project.project_demo;
    document.getElementById("google-drive-doc").href = project.project_drive;
    document.getElementById("survey-form").href = project.project_form;
    document.getElementById("gamemarket-github").href = project.gamemarket_github;
    document.getElementById("gamemarket-demo").href = project.gamemarket_demo;
    document.getElementById("market-pages-4-products").href = project.gamemarket_market_page;
    document.getElementById("market-pages-final").href = project.gamemarket_final_page;
});