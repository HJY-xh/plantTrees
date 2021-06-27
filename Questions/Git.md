## Git 相关

[1.[2021-3-24] Git 常用基本命令有哪些？](https://github.com/HJY-xh/plantTrees/issues/82)

<details>
<summary>展开查看</summary>
<pre>

-   $ git branch # 查看所有分支
-   $ git add --all # 添加所有文件至暂存区
-   $ git add . # 只添加当前目录下的修改文件到暂存区
-   $ git commit -m '修改说明' # 根据暂存区的内容创建一次提交
-   $ git log # 查看提交历史
-   $ git log -p # 详细显示提交与修改变动信息
-   $ git push origin master # 将本地仓库的 master 分支推送到远程仓库的 master 分支
-   $ git fetch origin master # 拉取远程仓库的 master 分支到本地
-   $ git checkout branch-name # 切换到另外一个分支
-   $ git checkout -b new-branch # 基于当前分支创建一个新分支并切换到这个新的分支

</pre>
</details>

[2.[2021-5-11] git 的数据流走向是什么样的？](https://github.com/HJY-xh/plantTrees/issues/233)

<details>
<summary>展开查看</summary>
<pre>

[![git数据流走向](https://user-images.githubusercontent.com/39485286/117751619-ffdc9380-b247-11eb-948b-ee9a13a37899.png)](https://user-images.githubusercontent.com/39485286/117751619-ffdc9380-b247-11eb-948b-ee9a13a37899.png)

</pre>
</details>

[3.[2021-5-20] git rebase 与 git merge 有什么区别？](https://github.com/HJY-xh/plantTrees/issues/256)

<details>
<summary>展开查看</summary>
<pre>

`git rebase`和`git merge`一样都是用于从一个分支获取并且合并到当前分支。假设一个场景，我们开发的[feature/todo]分支要合并到 master 主分支，那么用 rebase 或者 merge 有什么不同呢？

### merge

-   merge 特点：自动创建一个新的 commit，如果合并的时候遇到冲突，仅需要修改后重新 commit
-   优点：记录了真实的 commit 情况，包括每个分支的详情
-   缺点：因为每次 merge 会自动产生一个 merge commit，所以在 commit 比较频繁时，看到的分支很杂乱

### rebase

-   rebase 特点：会合并之前的 commit 历史
-   优点：得到更简洁的项目历史，去掉了 merge history
-   缺点：如果合并出现代码问题不容易定位，因此当需要保留详细的合并信息的时候建议使用 git merge，特别是需要将分支合并进入 master 分支时。

</pre>
</details>

[4.[2021-5-27] git pull 和 git fetch 的区别是什么?](https://github.com/HJY-xh/plantTrees/issues/265)

<details>
<summary>展开查看</summary>
<pre>

-   `git fetch` 只是将远程仓库的变化下载下来，并没有和本地分支合并
-   `git pull` 会将远程仓库的变化下载下来，并和本地分支合并

</pre>
</details>

[5.[2021-6-19] git stash 相关的命令有哪些？](https://github.com/HJY-xh/plantTrees/issues/324)

<details>
<summary>展开查看</summary>
<pre>

会有这么一个场景，现在你正在用你的 feature 分支上开发新功能。这时，生产环境上出现了一个 bug 需要紧急修复，但是你这部分代码还没开发完，不想提交，怎么办？这个时候可以用 git stash 命令先把工作区已经修改的文件暂存起来，然后切换到 hotfix 分支上进行 bug 的修复，修复完成后，切换回 feature 分支，从堆栈中恢复刚刚保存的内容。
基本命令如下

```git
git stash //把本地的改动暂存起来
git stash save "message" 执行存储时，添加备注，方便查找。
git stash pop // 应用最近一次暂存的修改，并删除暂存的记录
git stash apply  // 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} 。
git stash list // 查看stash有哪些存储
git stash clear // 删除所有缓存的stash
```

</pre>
</details>

[6.[2021-6-27] git 分支的相关命令？](https://github.com/HJY-xh/plantTrees/issues/347)

<details>
<summary>展开查看</summary>
<pre>

相关命令：

```javascript
# 新建本地分支，但不切换
git branch <branch-name>
# 查看本地分支
git branch
# 查看远程分支
git branch -r
# 查看本地和远程分支
git branch -a
# 删除本地分支
git branch -D <branch-nane>
# 重新命名分支
git branch -m <old-branch-name> <new-branch-name>
```

</pre>
</details>
