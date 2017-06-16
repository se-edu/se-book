<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Code Quality :arrow_right: Guideline: Maximise Readability :arrow_right:</div>

<div id="title">

#### Introduction :one:

</div>

<div id="body">

Among various dimensions of code quality, such as run-time efficiency, security, and robustness, one of the most important is understandability. This is because in any non-trivial team project, team members expect their code to be read, understood, and modified by other developers later on. Here we interpret ‘good quality code’ primarily as code that is easy for developers to work with.

The two code samples given below achieve the same functionality, but one is easier to read.

{give more versions of the code, ask to find bug}

<tip-box>

Example:

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

Code comparison: same function, different quality

</tip-box>

> The competent programmer is fully aware of the strictly limited size of his own skull; therefore he approaches the programming task in full humility, and among other things
> he avoids clever tricks like the plague.
>
> -- Edsger Dijkstra

Even if we do not intend to pass the code to someone else, code quality is still important because we all become 'strangers' to our own code someday.

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
