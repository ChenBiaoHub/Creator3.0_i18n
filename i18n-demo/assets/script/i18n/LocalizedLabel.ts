
import { _decorator, Component, Label, RichText } from 'cc';
import { LocalizedManager } from './LocalizedManager';
const { ccclass, property } = _decorator;

@ccclass('LocalizedLabel')
export class LocalizedLabel extends Component {

    private label: Label | RichText | null = null;

    @property
    dataID = '';
    
    onLoad () {
        this.fetchRender();
    }

    fetchRender () {
        let label = this.getComponent(Label);
        if (label) {
            this.label = label;
            this.updateLabel();
        } else {
            let richText = this.getComponent(RichText);
            if (richText) {
                this.label = richText;
            }
            this.updateLabel();
        }
    }
    

    updateLabel () {
        if (this.label) {
            this.label.string = LocalizedManager.getFinishStr(this.dataID);
        } else {
            console.error('Failed to update localized label, label or richText component is invalid!');
            return;
        }
    }
}