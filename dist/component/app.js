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
        console.log(data);
    };
}
export default App;
