# Creator3.0_i18n
 cocos creator 3.0 TypeScript本版多语言功能

[![MIT](https://img.shields.io/dub/l/vibe-d.svg)](https://opensource.org/licenses/MIT)![](https://www.code-inspector.com/project/25356/status/svg)

 ![示例图](https://github.com/ChenBiaoHub/Creator3.0_i18n/blob/master/i18n-demo.gif?raw=true)

 **注：目前还没有做成插件形式，后期会制作完整插件完善整体功能**

 ### 使用方法
 #### 使用前设置
 - 在 resources/i18n 中添加对应的语言的 json 文件

 #### 具体使用

 - 切换语言
     - 注：因为是动态加载 json 文件，所以会有延时，第一个界面面的动态修改，需要在 block 回调里面处理。静态修改的本身有处理工具本身有处理。
 ```
  LocalizedManager.changeLanguage('en');
 ```
- 动态加载文字
```
//层级可以无线叠加，用 . 分割
LocalizedManager.getFinishStr('hierarchy.name', {year: 2021});
```
- 静态文字(包括 Label 和 RichText )
  - 添加 LocalizedLabel.ts 脚本，设置 dataID

- 静态图片
  - 添加 LocalizedSprite.ts 脚本，将 spriteFrameModels 数量设置为你语言数量
  - 再将 图片 和 language 对应
