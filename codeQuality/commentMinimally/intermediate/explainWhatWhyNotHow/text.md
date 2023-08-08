<span id="title">Explain WHAT and WHY, not HOW</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can improve code quality using technique: explain what and why, not how </span>

<div id="body">

**Comments should explain the _WHAT_ and _WHY_ aspects of the code, rather than the _HOW_ aspect.**

{{ icon_tick_green }} **WHAT: The specification of what the code is _supposed_ to do.** The reader can compare such comments to the implementation to verify if the implementation is correct.

<box>

{{ icon_example }} Example: This method is possibly buggy because the implementation does not seem to match the comment. In this case, the comment could help the reader to detect the bug.

```java
/** Removes all spaces from the {@code input} */
void compact(String input) {
    input.trim();
}
```
</box>

{{ icon_tick_green }} **WHY: The rationale for the current implementation.**

<box>

{{ icon_example }} Example: Without this comment, the reader will not know the reason for calling this method.

```java
// Remove spaces to comply with IE23.5 formatting rules
compact(input);
```

</box>

{{ icon_x_red }} **HOW: The explanation for how the code works.** This should already be apparent from the code, if the code is self-explanatory. Adding comments to explain the same thing is redundant.

<box>

{{ icon_example }} Example:

{{bad}} %%Reason: Comment explains how the code works.%%
```java
// return true if both left end and right end are correct
//    or the size has not incremented
return (left && right) || (input.size() == size);
```

{{good}} %%Reason: The code is now self-explanatory -- the comment is no longer needed.%%
```java
boolean isSameSize = (input.size() == size);
return (isLeftEndCorrect && isRightEndCorrect) || isSameSize;
```

</box>



</div>

<div id="extras">
</div>
