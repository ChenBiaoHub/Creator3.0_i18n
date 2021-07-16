
import { _decorator, Component, Node } from 'cc';
import { chinese } from './Chinese';
import { english } from './English';
import { Language } from '../LocalizedManager';

export let languagesInfo = (lang: Language)=>{
    switch (lang) {
        case Language.Chinese:
            return chinese;
        case Language.English:
            return english;
    }
}