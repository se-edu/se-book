<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Don't Recycle Variables or Parameters

</div>

<div id="body">

*	Use one variable for one purpose. Do not reuse a variable for a different purpose other than its intended one, just because the data type is the same.
*	Do not reuse formal parameters as local variables inside the method.

<tip-box>

![][Bad]
```java
double computeRectangleArea(double length, double width) {
    length = length * width;
    return length;
}

```
![][Good]
```java
double computeRectangleArea(double length, double width) {
    double area;
    area = length * width;
    return area;
}
```

</tip-box>

[Bad]: {{baseUrl}}/images/Bad.png "Bad"
[Good]: {{baseUrl}}/images/Good.png "Good"

</div>

</div>
