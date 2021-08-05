
import { _decorator, Component, find, Label } from 'cc';
import { Language, LocalizedManager } from './i18n/LocalizedManager';
const { ccclass, property } = _decorator;

@ccclass('MainScene')
export class MainScene extends Component {

	onLoad() {
		this.setLabelString();
	}

	clickBtn() {
		if (LocalizedManager.curLang === Language.English) {
            LocalizedManager.changeLanguage(Language.Chinese, (changed) =>{
				if (changed) {
					this.setLabelString();
				}
            });
        } else {
            LocalizedManager.changeLanguage(Language.English, (changed)=>{
				if (changed) {
					this.setLabelString();
				}
            });
        }
	}

	setLabelString() {
        let i18nStr = LocalizedManager.getFinishStr('hierarchy.name', {year: 2021});

        let lab = find('Canvas/demo_lab')!.getComponent(Label)!
        lab.string = i18nStr; 
	}
}