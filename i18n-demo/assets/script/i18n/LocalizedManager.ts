
import { _decorator, JsonAsset, director, resources } from 'cc';
import { LocalizedLabel } from './LocalizedLabel';
import { LocalizedSprite } from './LocalizedSprite';

const { ccclass } = _decorator;

interface LanguageInterface {
    [propName: string] : any
}

@ccclass('LocalizedManager')
export class LocalizedManager {
    
    public static curLang = 'zh';
    
    public static langInfo: LanguageInterface; 

    static changeLanguage(newLanguage: string, finish?:((changed: boolean)=>void)) {
        if (LocalizedManager.curLang === newLanguage) {
            if (finish) finish(false);
            return;
        } else {
            const jsonPath = 'i18n/' + newLanguage;
            resources.load(jsonPath, JsonAsset, (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {
                    LocalizedManager.langInfo = data.json as LanguageInterface;
                    LocalizedManager.curLang = newLanguage;
                    if (finish) finish(true);
                    const rootNodes = director.getScene()?.children;
                    rootNodes?.forEach(element => {
                        const localizedLabels = element.getComponentsInChildren(LocalizedLabel);
                        localizedLabels.forEach(lab => {
                            lab.updateLabel();
                        });

                        const localizedSprites = element.getComponentsInChildren(LocalizedSprite);
                        localizedSprites.forEach(spr => {
                            spr.updateSprite(LocalizedManager.curLang);
                        });
                    })

                }
            });
        }
    }


    static getFinishStr(phrase: string, params?: {[proName: string]: number | string}) {
        let temp = LocalizedManager.langInfo;
        if (!temp) return phrase;

        const phraseArr = phrase.split('.');
        let result = phrase;
        for (let i = 0; i < phraseArr.length; i++) {
            const element = phraseArr[i];
            if (i === phraseArr.length - 1) {
                result = temp[element];
            } else {
                temp = temp[element];
            }
        }

        if (params) {
            const prefix = '%{'
            const suffix = '}'
            const regex = new RegExp(prefix + '(.*?)' + suffix, 'g');
    
            const matchArray = result.match(regex);
            matchArray?.forEach(element =>{
                const proName = element.substring(2, element.length - 1);
                result = result.replace(element, params[proName] as string);
            });
        }
        return result;
    }
}

