import AbstractSocialMedia from "./abstract_social_media.js";

class SocialMedia extends AbstractSocialMedia {
  // propriété de la classe abstraite
  protected _name: string | undefined;

  // getter / setter

  public get name():string | undefined{
    return this._name 
  }
  public set name(value:string | undefined){
     this._name = value
  }

}

export default SocialMedia;
