import SocialMediaInterface from "./social_media_interface.js";

abstract class AbstractSocialMedia implements SocialMediaInterface {
  getIcon = (): string => {
    return "https://cdn.icon-icons.com/images/icon-icons.svg";
  };
  protected abstract name: string | undefined;
}

export default AbstractSocialMedia;
