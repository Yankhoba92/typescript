import App from "./component/app.js";
import SocialMedia from "./model/social_media.js";

// Instanciation

const app: App = new App();
app.init();

// créer des objets
const tiktok: SocialMedia = new SocialMedia();
tiktok.name = "Tiktok";

const instagram: SocialMedia = new SocialMedia();
instagram.name = "Instagram";

const snap: SocialMedia = new SocialMedia();
snap.name = "Snap";

app.displaySocialMedia([tiktok, instagram, snap])