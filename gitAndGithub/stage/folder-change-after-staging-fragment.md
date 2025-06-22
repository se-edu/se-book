<div id="a-staging">

```txt {heading="{{ icon_file }} names.txt" .no-line-numbers}
Alice
```
</div>
<div id="a-working">

```txt {heading="{{ icon_file }} names.txt" .no-line-numbers}
Alice
```
</div>
<div id="a-text">
(a) The file names.txt is staged. The copy in the staging area is an exact match to the one in the working directory.
</div>


<div id="b-staging">

```txt {heading="{{ icon_file }} names.txt" .no-line-numbers}
Alice
```
</div>
<div id="b-working">

```txt {heading="{{ icon_file }} names.txt #r#(modified)##" highlight-lines="2" .no-line-numbers}
Alice
Bob
```
</div>
<div id="b-text">
(b) State after adding a line to the file. Git indicates it as 'modified' because it now differs from the version in the staged area.
</div>

<div id="c-staging">

```txt {heading="{{ icon_file }} names.txt" highlight-lines="2" .no-line-numbers}
Alice
Bob
```
</div>
<div id="c-working">

```txt {heading="{{ icon_file }} names.txt" highlight-lines="2" .no-line-numbers}
Alice
Bob
```
</div>
<div id="c-text">

(c) After staging the file again, the staging area is updated with the latest copy of the file, and it is no longer marked as 'modified'.
</div>
