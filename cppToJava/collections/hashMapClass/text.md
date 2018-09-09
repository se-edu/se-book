<div id="title">

#### The `HashMap` Class

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use the HashMap class</span>

<div id="body">

`HashMap` is an implementation of the `Map` interface. It allows you to store a collection of _key-value pairs_. The example below illustrates how to use a `HashMap<String, Point>` to maintain a list of coordinates and their identifiers e.g., the identifier `x1` is used to identify the point `0,0` where `x1` is the _key_ and `0,0` is the _value_.


```java
import java.awt.Point;
import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
    public static void main(String[] args) {
        HashMap<String, Point> points = new HashMap<>();

        // put the key-value pairs in the HashMap
        points.put("x1", new Point(0, 0));
        points.put("x2", new Point(0, 5));
        points.put("x3", new Point(5, 5));
        points.put("x4", new Point(5, 0));

        // retrieve a value for a key using the get method
        print("Coordinates of x1: " + pointAsString(points.get("x1")));

        // check if a key or a value exists
        print("Key x1 exists? " + points.containsKey("x1"));
        print("Key x1 exists? " + points.containsKey("y1"));
        print("Value (0,0) exists? " + points.containsValue(new Point(0, 0)));
        print("Value (1,2) exists? " + points.containsValue(new Point(1, 2)));

        // update the value of a key to a new value
        points.put("x1", new Point(-1,-1));

        // iterate over the entries
        for (Map.Entry<String, Point> entry : points.entrySet()) {
            print(entry.getKey() + " = " + pointAsString(entry.getValue()));
        }

        print("Number of keys: " + points.size());
        points.clear();
        print("Number of keys after clearing: " + points.size());

    }

    public static String pointAsString(Point p) {
        return "[" + p.x + "," + p.y + "]";
    }

    public static void print(String s) {
        System.out.println(s);
    }
}
```
{{ icon_output }}
```
Coordinates of x1: [0,0]
Key x1 exists? true
Key x1 exists? false
Value (0,0) exists? true
Value (1,2) exists? false
x1 = [-1,-1]
x2 = [0,5]
x3 = [5,5]
x4 = [5,0]
Number of keys: 4
Number of keys after clearing: 0
```
<small>[[Try the above code on Repl.it](https://repl.it/@seedu/Demo-HashMap)]</small>

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
  <include src="resourcesPanel.md" boilerplate />
</div>