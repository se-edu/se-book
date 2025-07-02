The file should be currently listed under `Unstaged files`. Right-click it and choose `Ignore...`. Choose `Ignore exact filename(s)` and click `OK`.<br>
Also take note of other options available e.g., `Ignore all files with this extension` etc. They may be useful in future.

<pic src="images/sourcetreeIgnoreFileDialog.png" />

Note how the `temp.text` is no longer listed under `Unstaged files`. Observe that a file named `.gitignore` has been created in the working directory root and has the following line in it. This new file is now listed under `Unstaged files`.

```{heading=".gitignore"}
temp.txt
```

Right-click on any of the `.tmp` files you added, and choose `Ignore...` as you did previously. This time, choose the option `Ignore files with this extension`.

Note how `.temp` files are no longer shown as unstaged files, and the `.gitignore` file has been updated as given below:
```{heading=".gitignore" highlight-lines="2"}
temp.txt
*.tmp
```
