import Show from "./show.js";

type TvShow = Show & {
    overview: string;
    has_poster: boolean;
}

export default TvShow