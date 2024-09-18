class App {
    appElement = document.querySelector(".app");
    init = () => { };
    getShow = async () => {
        const request = new Request(": https://api.reelgood.com/v3.0/content/random?sources=netflix");
        const response = await fetch(request);
        const data = await response.json();
        return data;
    };
}
export default App;
