export function loadHome() {
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
        <h1>Добро пожаловать на главную страницу!</h1>        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
    `;
    homeDiv.classList.add('tab-content');
    return homeDiv;
}