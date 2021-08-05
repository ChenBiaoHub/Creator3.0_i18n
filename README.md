# Creator3.0_i18n
 cocos creator 3.0 TypeScript本版多语言功能
 
 ![示例图](https://github.com/ChenBiaoHub/Creator3.0_i18n/blob/master/i18n-demo.gif?raw=true)
 
 **注：目前还没有做成插件形式，后期会制作完整插件完善整体功能**
 
 ### 使用方法
 #### 使用前设置
 **要注意先设置语言**
 - 在 LocalizedManager.ts 中添加语言枚举
 ```
 export enum Language {
     English = 'en',
     Chinese = 'zh'
 }
 ```
 - 再去 resources/i18n 中添加对应的 json 文件
 - 切换语言
 ```
  LocalizedManager.changeLanguage(Language.Chinese);
 ```
- 动态加载文字
```
//层级可以无线叠加，用 . 分割
LocalizedManager.getFinishStr('hierarchy.name', {year: 2021});
```
- 静态文字
 - 添加 LocalizedLabel.ts 脚本，设置 dataID

- 静态图片
 - 添加 LocalizedSprite.ts 脚本，将 spriteFrameModels 数量设置为你语言数量
 - 再将 图片 和 language 对应
