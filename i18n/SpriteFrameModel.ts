
import { _decorator, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteFrameModel')
export class SpriteFrameModel {
    @property
    public language : String = 'zh';

    @property(SpriteFrame)
    public spriteFrame: SpriteFrame | null = null;
}

