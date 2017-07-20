<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Refactoring :arrow_right: </div>

<div id="title">

#### What :one:

</div>

<div id="body">

The first version of the code you write may not be of production quality. It is acceptable to first concentrate on making the code work, rather than worry over the quality of the code, SO LONG AS you improve the quality later. This process of **improving a program's internal structure without modifying its external behavior** is called _refactoring_.

*	Refactoring is not about discarding poorly-written code and re-writing it from scratch. It is the process of improving the code in very small steps until it achieves production quality.
*	By definition, refactoring is different from bug fixing or any other modifications that alter the external behavior of the component in concern.

Given below are two common refactorings (taken from
  <popover effect="fade" placement="top">
    refactoring-catalog <span slot="content"><include src="../../common/references.md#refactoring-catalog" inline/></span>
  </popover>
).

<tip-box>

Refactoring Name: **Consolidate Duplicate Conditional Fragments**

Situation:  The same fragment of code is in all branches of a conditional expression.

Method: Move it outside of the expression.

Example:

```java
//before
if (isSpecialDeal()) {
    total = price * 0.95;
    send();
} else {
    total = price * 0.98;
    send();
}
```

```java
//after
if (isSpecialDeal()){
    total = price * 0.95;
} else {
    total = price * 0.98;
}
send();
```

</tip-box>

<tip-box>

Refactoring Name:  **Extract Method**

Situation:  You have a code fragment that can be grouped together.

Method: Turn the fragment into a method whose name explains the purpose of the method.

Example:  

```java
//before
void printOwing() {
    printBanner();

//print details
    System.out.println("name:	" + name);
    System.out.println("amount	" + getOutstanding());
}
```

```java
//after
void printOwing() {
    printBanner();
    printDetails(getOutstanding());
}

void printDetails (double outstanding) {
    System.out.println("name:	" + name);
    System.out.println("amount	" + outstanding);
}
```

</tip-box>

</div>

<div id="extras">
<div>

</div>
