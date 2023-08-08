<span id="title">Do not repeat the obvious</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: do not repeat the obvious </span>

<div id="body">

**Do not repeat in comments information that is already obvious from the code.** If the code is self-explanatory, a comment may not be needed.

<box>

<div class="alt-java">

{{bad}}
```java
//increment x
x++;

//trim the input
trimInput();
```
</div>
<div class="alt-python">

{{bad}}
```python
# increment x
x = x + 1

# trim the input
trim_input()
```
</div>
</box>

</div>

<div id="extras">
</div>
