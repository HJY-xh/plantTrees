## What

该脚本用于自动该仓库相关 Issue 的问答信息同步到源码中

## Why

每次手动更新过于繁琐，解放双手，爱护键盘 ⌨️

## How

命令行输入`npm run update`，按照相关提示进行操作

## 具体实现流程

```flow
s=>start: 开始
op1=>operation: 输入需要同步的Issue编号
op2=>operation: 确认是否改动相关源码
op3=>operation: 爬取页面信息
cond1=>condition: 判断该Issue是否填写相关信息
op4=>operation: 脚本改动源码
op5=>operation: Git提交相关操作
exit=>operation: 脚本退出
e=>end: 结束

s->op1->op2->op3->cond1->op4->op5->e
cond1(yes)->op4
cond1(no)->exit
exit->e
```
