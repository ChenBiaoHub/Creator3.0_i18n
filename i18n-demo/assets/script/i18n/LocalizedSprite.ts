
import { _decorator, Component, Sprite, SpriteFrame } from 'cc';
import { LocalizedManager } from './LocalizedManager';
import { SpriteFrameModel } from './SpriteFrameModel';

const { ccclass, property } = _decorator;

@ccclass('LocalizedSprite')
export class LocalizedSprite extends Component {

    sprite: Sprite | null = null;

    @property([SpriteFrameModel])
    spriteFrameModels = new Array<SpriteFrameModel>();
    

    onLoad () {
        this.fetchRender();
    }

    fetchRender () {
        const sprite = this.getComponent(Sprite);
        if (sprite) {
            this.sprite = sprite;
            this.updateSprite(LocalizedManager.curLang);
            return;
        }
    }

    getSpriteFrameByLang (lang: string) : SpriteFrame | null {
        for (let i = 0; i < this.spriteFrameModels.length; ++i) {
            if (this.spriteFrameModels[i].language === lang) {
                return this.spriteFrameModels[i].spriteFrame;
            }
        }
        return null;
    }

    updateSprite (language : string) {
        if (!this.sprite) {
            console.log('Failed to update localized sprite, sprite component is invalid!');
            return;
        }

        let spriteFrame = this.getSpriteFrameByLang(language);

        if (!spriteFrame && this.spriteFrameModels[0]) {
            spriteFrame = this.spriteFrameModels[0].spriteFrame;
        }

        this.sprite.spriteFrame = spriteFrame;
    }
}

