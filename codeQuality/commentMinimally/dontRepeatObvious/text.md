<span id="title">Do Not Repeat the Obvious</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: do not repeat the obvious </span>

<div id="body">

If the code is self-explanatory, refrain from repeating the description in a comment just for the sake of 'good documentation'.

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

</div>

<div id="extras">
</div>