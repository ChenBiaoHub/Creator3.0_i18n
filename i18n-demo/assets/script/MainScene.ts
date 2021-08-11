
import { _decorator, Component, find, Label } from 'cc';
import { LocalizedManager } from './i18n/LocalizedManager';
const { ccclass, property } = _decorator;

@ccclass('MainScene')
export class MainScene extends Component {

	onLoad() {
		let self = this;
		LocalizedManager.changeLanguage('en', (changed) =>{
			self.setLabelString();
		})
	}

	clickBtn() {
		let self = this;
		if (LocalizedManager.curLang === 'en') {
            LocalizedManager.changeLanguage('zh', (changed) =>{
				if (changed) {
					self.setLabelString();
				}
            });
        } else {
            LocalizedManager.changeLanguage('en', (changed)=>{
				if (changed) {
					self.setLabelString();
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