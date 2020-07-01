```sh
git show < part-of-commit-hash >
```
Example:
```
git show 251b4cf
```
{{ icon_output }}
```diff
commit 5bc0e30635a754908dbdd3d2d833756cc4b52ef3
Author: … < … >
Date:   Sat Jul 8 16:50:27 2017 +0800

    fruits.txt: replace banana with berries

diff --git a/fruits.txt b/fruits.txt
index 15b57f7..17f4528 100644
--- a/fruits.txt
+++ b/fruits.txt
@@ -1,3 +1,3 @@
 apples
-bananas
+berries
 cherries
```
