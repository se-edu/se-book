<div id="title">

#### The `ArrayList` Class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use the ArrayList class</span>

<div id="body">

The `ArrayList` class is a resizable-array implementation of the `List` interface. Unlike a normal `array`, an `ArrayList` can grow in size as you add more items to it. The example below illustrate some of the useful methods of the `ArrayList` class using an `ArrayList` of `String` objects.

```java
import java.util.ArrayList;

public class ArrayListDemo {

    public static void main(String args[]) {
        ArrayList<String> items = new ArrayList<>();

        System.out.println("Before adding any items:" + items);

        items.add("Apple");
        items.add("Box");
        items.add("Cup");
        items.add("Dart");
        print("After adding four items: " + items);

        items.remove("Box"); // remove item "Box"
        print("After removing Box: " + items);

        items.add(1, "Banana"); // add "Banana" at index 1
        print("After adding Banana: " + items);

        items.add("Egg"); // add "Egg", will be added to the end
        items.add("Cup"); // add another "Cup"
        print("After adding Egg: " + items);

        print("Number of items: " + items.size());

        print("Index of Cup: " + items.indexOf("Cup"));
        print("Index of Zebra: " + items.indexOf("Zebra"));

        print("Item at index 3 is: " + items.get(2));

        print("Do we have a Box?: " + items.contains("Box"));
        print("Do we have an Apple?: " + items.contains("Apple"));

        items.clear();
        print("After clearing: " + items);
    }

    private static void print(String text) {
        System.out.println(text);
    }
}
```
{{ icon_output }}
```
Before adding any items:[]
After adding four items: [Apple, Box, Cup, Dart]
After removing Box: [Apple, Cup, Dart]
After adding Banana: [Apple, Banana, Cup, Dart]
After adding Egg: [Apple, Banana, Cup, Dart, Egg, Cup]
Number of items: 6
Index of Cup: 2
Index of Zebra: -1
Item at index 3 is: Cup
Do we have a Box?: false
Do we have an Apple?: true
After clearing: []
```
<small>[[Try the above code on Repl.it](https://repl.it/@seedu/Demo-ArrayList)]</small>

</div>

<div id="extras">
  <include src="resourcesPanel.md" boilerplate />
  <include src="exercisesPanel.md" boilerplate />
</div>