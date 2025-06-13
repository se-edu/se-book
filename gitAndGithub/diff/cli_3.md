
```{.no-line-numbers}
$ git diff fruits.txt
```
{{ icon_output }}
```diff
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   fruits.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
diff --git a/fruits.txt b/fruits.txt
index 5e64f9d..a8a0a01 100644
--- a/fruits.txt
+++ b/fruits.txt
@@ -2,3 +2,4 @@ apples
 bananas
 cherries
 dragon fruits
+elderberries
```