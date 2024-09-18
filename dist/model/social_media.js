import AbstractSocialMedia from "./abstract_social_media.js";
class SocialMedia extends AbstractSocialMedia {
    // propriété de la classe abstraite
    _name;
    // getter / setter
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
export default SocialMedia;
