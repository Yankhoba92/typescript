import Show from "../model/show.js";
import TvShow from "../model/tvshow.js";

class App {
  private appElement: HTMLDivElement = document.querySelector(
    ".app"
  ) as HTMLDivElement;

  public init = (): void => {};
  private getShow = async (): Promise<Show | TvShow> => {
    const request: Request = new Request(
      ": https://api.reelgood.com/v3.0/content/random?sources=netflix"
    );
    const response = await fetch(request);
    const data:Show | TvShow = await response.json();
    return data;
  };
}
export default App;
