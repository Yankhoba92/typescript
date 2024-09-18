class App {
    appElement = document.querySelector(".app");
    init = async () => {
        await this.display();
    };
    getShow = async () => {
        const request = new Request("https://api.reelgood.com/v3.0/content/random?sources=netflix");
        const response = await fetch(request);
        const data = await response.json();
        return data;
    };
    display = async () => {
        const data = await this.getShow();
        const p = document.createElement("p");
        const title = document.createElement("h1");
        const img = document.createElement("img");
        img.setAttribute("src", `https://img.rgstatic.com/content/movie/3a79fc99-f1af-4d5f-b4b3-59ab595af209/poster-500.webp`);
        title.innerHTML = data.title;
        p.innerHTML = data.overview;
        this.appElement.append(title);
        this.appElement.append(img);
        this.appElement.append(p);
        console.log(data);
    };
}
export default App;
