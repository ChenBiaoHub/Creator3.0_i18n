
import { _decorator, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteFrameModel')
export class SpriteFrameModel {
    @property
    public language = '';

    @property(SpriteFrame)
    public spriteFrame: SpriteFrame | null = null;
}

