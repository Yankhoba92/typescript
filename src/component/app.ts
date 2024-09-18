import Show from "../model/show.js";
import TvShow from "../model/tvshow.js";

class App {
  private appElement: HTMLDivElement = document.querySelector(
    ".app"
  ) as HTMLDivElement;

  public init = async (): Promise<void> => {
    await this.display();
  };
  private getShow = async (): Promise<Show | TvShow> => {
    const request: Request = new Request(
      "https://api.reelgood.com/v3.0/content/random?sources=netflix"
    );
    const response = await fetch(request);
    const data: Show | TvShow = await response.json();
    return data;
  };

  private display = async (): Promise<void> => {
    const data = await this.getShow();
    console.log(data);
  };
}
export default App;
