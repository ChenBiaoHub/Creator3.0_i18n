
import { _decorator, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteFrameModel')
export class SpriteFrameModel {
    @property
    public language : string = 'zh';

    @property(SpriteFrame)
    public spriteFrame: SpriteFrame | null = null;
}

