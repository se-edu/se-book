<span id="title">Implementation</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can apply the Singleton design pattern</span>

<div id="body">

Here is the typical implementation of how the Singleton pattern is applied to a class:

```java{highlight-lines="2['private static'],2['Logic'],4['private'],8['public static']"}
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

If `Logic` was not a Singleton class, a `Logic` object can be created as follows:
```java{.no-line-numbers}
Logic m = new Logic();
```

But when it is a Singleton class, the single `Logic` object needs to be accessed as follows:
```java{.no-line-numbers}
Logic m = Logic.getInstance();
```

</div>

<div id="extras">
</div>
