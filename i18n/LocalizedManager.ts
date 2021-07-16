
import { _decorator, Component, Node, JsonAsset, director } from 'cc';
import { languagesInfo } from './languages/LocalizedLanguageManager';
import { LocalizedLabel } from './LocalizedLabel';
import { LocalizedSprite } from './LocalizedSprite';

const { ccclass, property } = _decorator;
export enum Language {
    English = 'en',
    Chinese = 'zh'
}
@ccclass('LocalizedManager')
export class LocalizedManager {
    
    public static curLang = Language.Chinese;

    public static languages = languagesInfo(Language.Chinese);
    

    static changeLanguage(newLanguage: Language) {
        if (LocalizedManager.curLang === newLanguage) {
            return;
        } else {
            LocalizedManager.curLang = newLanguage;
            LocalizedManager.languages = languagesInfo(LocalizedManager.curLang);

            let rootNodes = director.getScene()?.children;
            rootNodes?.forEach(element => {
                let localizedLabel = element.getComponentInChildren(LocalizedLabel);
                if (localizedLabel) {
                    localizedLabel.updateLabel();
                }

                let localizedSprite = element.getComponentInChildren(LocalizedSprite);
                if (localizedSprite) {
                    localizedSprite.updateSprite(LocalizedManager.curLang);
                }
            })
        }
    }


    static getFinishStr(phrase: string, ...restOfParams: string[]) {
        let result = phrase;

        const prefix = '%{'
        const suffix = '}'
        const regex = new RegExp(prefix + '(.*?)' + suffix, 'g');

        const matchArray = phrase.match(regex);
        if (matchArray) {
            if (matchArray.length !== restOfParams?.length) {                
                console.warn('参数数量不匹配');
            } else {
                for (let i = 0; i < matchArray.length; i++) {
                    const element = matchArray[i];
                    result = result.replace(element, restOfParams[i])
                }
            }
        }
        return result;
    }


        // '这是%{num}个元宝'

    static analysePhrase2(phrase: String, ...restOfParams: string[]) {
        let result = phrase;

        const prefix = '%{'
        const suffix = '}'
        const regex = new RegExp(prefix + '(.*?)' + suffix, 'g');

        const matchArray = phrase.match(regex);
        if (matchArray) {
            if (matchArray.length !== restOfParams?.length) {                
                console.warn('参数数量不匹配');
            } else {
                for (let i = 0; i < matchArray.length; i++) {
                    const element = matchArray[i];
                    result = result.replace(element, restOfParams[i])
                }
            }
        }
        return result;

    }



}

