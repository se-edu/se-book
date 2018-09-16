<panel header="{{ icon_Q }} Draw Class Diagram for Box etc.">
<question>

Draw a class diagram for the code below. Show the attributes, methods, associations, navigabilities, and multiplicities in the class diagram below:

```java
class Box {
    private Item[] parts = new Item[10];
    private Item spareItem;
    private Lid lid; // lid of this box
    private Box outerBox;

    public void open(){
        //...
    }
}
```
```java
class Item {
    public static int totalItems;
}
```
```java
class Lid {
    Box box; // the box for which this is the lid
}
```


</question>
</panel>
