<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Explain WHAT and WHY, not HOW

</div>

<div id="body">

Comments should explain _what_ and _why_ aspect of the code, rather than the _how_ aspect. 

:+1: **What** : The specification of what the code _supposed_ to do. The reader can compare such comments to the implementation to verify if the implementation is correct 

<tip-box>

:package: Example: This method is possibly buggy because the implementation does not seem to match the comment. In this case the comment could help the reader to detect the bug.

```java
/** Removes all spaces from the {@code input} */
void compact(String input){
    input.trim();
}
```
</tip-box>

:+1: **Why** : The rationale for the current implementation.

<tip-box>

:package: Example: Without this comment, the reader will not know the reason for calling this method. 

```java
// Remove spaces to comply with IE23.5 formatting rules
compact(input);
```

</tip-box>

:-1: **How** : The explanation for how the code works. This should already be apparent from the code, if the code is self-explanatory. Adding comments to explain the same thing is redundant.

<tip-box>

:package: Example:  

![][Bad] %%Reason: Comment explains how the code works.%%
```java
// return true if both left end and right end are correct or the size has not incremented
return (left && right) || (input.size() == size);
```

![][Good] %%Reason: Code refactored to be self-explanatory. Comment no longer needed.%%
```java

boolean isSameSize = (input.size() == size) ;
return (isLeftEndCorrect && isRightEndCorrect) || isSameSize;
```

</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"


</div>

</div>
