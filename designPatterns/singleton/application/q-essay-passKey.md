<panel header="Q: Implement the PassKey system using the Singleton pattern.">
<question has-input="true">

Assume that you are implementing a class called PassKey that can have only three instances at any time. These instances are to be called entryPassKey, exitPassKey and lockPassKey. They are to be created at system startup. All three instances are immutable (i.e. once created, cannot be changed). As you know, Singleton pattern can limit the number of instances to only one. Explain how you will extend the idea behind the Singleton pattern to implement the Passkey class. Show code examples where necessary.

<div slot="answer">

There are other acceptable variations.

```java
class PassKey {
    private static PassKey entryPassKey = new PassKey(); // this way, the object is created as a system startup
    private static PassKey exitPassKey = new PassKey();
    private static PassKey lockPassKey = new PassKey();
    private void PassKey() { ... } // private constructor

    public static PassKey getEntryPassKey() {
        return entryPassKey; // no need to check whether it is null
    }

    // getExitPassKey() and getLockPassKey() are similar.
    // ...
}
```

</div>
</question>
</panel>
