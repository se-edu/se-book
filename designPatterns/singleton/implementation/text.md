<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Patterns &rarr; Singleton Pattern &rarr;</div>

<div id="title">

#### Implementation :two:

</div>

<div id="body">

```java
class Logic {
    private Logic theOne = null;

    private Logic() {
        ...
    }

    public static Logic getInstance() {
        if (theOne == null) {
            theOne = new Logic();
        }
        return theOne;
    }
}

// somewhere else in the system ...
Logic m = Logic.getInstance();

//instead of ...
Logic m = new Logic();
```

Notes:

*	The constructor is private, which prevents instantiation from outside the class.
*	The single instance of the singleton class is maintained by a private class-level variable.
*	Access to this object is provided by a public class-level operation `getInstance()` which instantiates a single copy of the singleton class when it is executed for the first time. Subsequent calls to this operation return the single instance of the class.

</div>

<div id="extras">
<div>

</div>
