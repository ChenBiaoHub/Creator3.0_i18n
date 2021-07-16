
import { _decorator, Component, Label } from 'cc';
import { LocalizedManager } from './LocalizedManager';
const { ccclass, property } = _decorator;

@ccclass('LocalizedLabel')
export class LocalizedLabel extends Component {

    private label: Label | null = null;

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
            return;
        } 
    }

    updateLabel () {
        if (!this.label) {
            console.error('Failed to update localized label, label component is invalid!');
            return;
        }
        this.label.string = LocalizedManager.languages.get(this.dataID) || '';
    }
}

