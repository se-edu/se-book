<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Make the Happy Path Prominent

</div>

<div id="body">

The happy path (i.e. the execution path taken when everything goes well) should be clear and prominent in your code. Restructure the code to make the happy path unintended. It is the ‘unusual’ cases that should be indented. Someone reading the code should not get distracted by alternative paths taken when error conditions happen. One technique that could help in this regard is the use of [guard clauses](http://wiki.c2.com/?GuardClause).

<tip-box>

Example:

![][Bad]
```java
if (!isUnusualCase) {
    if (!isErrorCase) {
        start();
        process();
        cleanup();
        exit();
    } else {
        handleError();
    }
} else {
    handleUnusualCase();
}
```

* Alternative conditions are separated from their handling.
* Main path is nested deeply.

![][Good]
```java
if (isUnusualCase) { //Guard Clause
    handleUnusualCase();
    return;
}

if (isErrorCase) { //Guard Clause
    handleError();
    return;
}

start();
process();
cleanup();
exit();
```

* Alternative paths dealt with first so that the reader doesn't have to remember them for long.
* The main path is un-indented.

</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
