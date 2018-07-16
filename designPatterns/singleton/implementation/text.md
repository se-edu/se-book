<div id="title">

#### Implementation

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can apply the Singleton design pattern</span>

<div id="body">

Here is the typical implementation of how the Singleton pattern is applied to a class:

```java
class Logic {
    private static Logic theOne = null;

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
```

Notes:

* The constructor is `private`, which prevents instantiation from outside the class.
* The single instance of the singleton class is maintained by a `private` class-level variable.
* Access to this object is provided by a `public` class-level operation `getInstance()` which instantiates a single copy of the singleton class when it is executed for the first time. Subsequent calls to this operation return the single instance of the class.

If `Logic` was not a Singleton class, an object is created like this:
```java
Logic m = new Logic();
```

But now, the `Logic` object needs to be accessed like this:
```java
Logic m = Logic.getInstance();
```



</div>

<div id="extras">
</div>