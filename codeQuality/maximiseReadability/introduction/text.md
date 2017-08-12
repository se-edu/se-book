<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Code Quality &rarr; Guideline: Maximise Readability &rarr;</div>

<div id="title">

#### Introduction :one:

</div>

<div id="body">

> Programs should be written and polished until they acquire publication quality. <sub>--[Niklaus Wirth](https://en.wikipedia.org/wiki/Niklaus_Wirth)</sub>

**Among various dimensions of code quality, such as run-time efficiency, security, and robustness, one of the most important is understandability.** This is because in any non-trivial software project, code needs to be read, understood, and modified by other developers later on. Even if we do not intend to pass the code to someone else, code quality is still important because we all become 'strangers' to our own code someday.

The two code samples given below achieve the same functionality, but one is easier to read.

<tip-box>

Example: Same function, different readability

![][Bad]
```java
int subsidy() {
    int subsidy;
    if (!age) {
        if (!sub) {
            if (!notFullTime) {
                subsidy = 500;
            } else {
                subsidy = 250;
            }
        } else {
            subsidy = 250;
        }
    } else {
        subsidy = -1;
    }
    return subsidy;
}
```

![][Good]
```java
int calculateSubsidy() {
    int subsidy;
    if (isSenior) {
        subsidy = REJECT_SENIOR;
    } else if (isAlreadySubsidised) {
        subsidy = SUBSIDISED_SUBSIDY;
    } else if (isPartTime) {
        subsidy = FULLTIME_SUBSIDY * RATIO;
    } else {
        subsidy = FULLTIME_SUBSIDY;
    }
    return subsidy;
}
```

</tip-box>


[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

<div id="extras">
<div>

</div>
