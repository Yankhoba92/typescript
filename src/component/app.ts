import Show from "../model/show.js";
import SocialMedia from "../model/social_media.js";
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
    const data: Show | TvShow = await this.getShow();
    const p: HTMLParagraphElement = document.createElement("p");
    const title: HTMLParagraphElement = document.createElement("h1");
    const img: HTMLImageElement = document.createElement("img");
    img.setAttribute(
      "src",
      `https://img.rgstatic.com/content/movie/3a79fc99-f1af-4d5f-b4b3-59ab595af209/poster-500.webp`
    );
    title.innerHTML = (data as TvShow).title;
    p.innerHTML = (data as TvShow).overview;
    this.appElement.append(title);
    this.appElement.append(img);
    this.appElement.append(p);
    // console.log(data);
  };

  public displaySocialMedia = (data: SocialMedia[]): void => {
    data.map((value: SocialMedia) => {
      const p: HTMLParagraphElement = document.createElement("p");
      const img: HTMLImageElement = document.createElement("img");
      img.setAttribute("src", value.getIcon());

      p.append(value.name as string);
      p.append(img);

      this.appElement.append(p);
    });
  };
}
export default App;
