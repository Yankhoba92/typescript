import App from "./component/app.js";
import SocialMedia from "./model/social_media.js";
// Instanciation
const app = new App();
app.init();
// créer des objets
const tiktok = new SocialMedia();
tiktok.name = "Tiktok";
const instagram = new SocialMedia();
instagram.name = "Instagram";
const snap = new SocialMedia();
snap.name = "Snap";
app.displaySocialMedia([tiktok, instagram, snap]);
