<panel header="{{ icon_Q }} Draw a Class Diagram for the code (`StockItem`, `Inventory`, `Review`, etc.)">
<question>

Consider the code below:

<div class="row">
  <div class="col-sm-6">

```java
public interface Billable {
    void bill();
}
```
```java
public abstract class Item
         implements Billable {
    public abstract void print();
}
```
```java
public class StockItem extends Item {
    private Review review;
    private String name;

    public StockItem(
        String name, Rating rating) {

        this.name = name;
        this.review = new Review(rating);
    }

    @Override
    public void print() {
        //...
    }

    @Override
    public void bill() {
        //...
    }
}
```
  </div>
  <div class="col-sm-6">

```java
public enum Rating {
    GOOD, OK, POOR
}
```
```java
public class Review {
    private final Rating rating;

    public Review(Rating rating) {
        this.rating = rating;
    }
}
```
```java
import java.util.List;

public class Inventory {
    private List<Item> items;

    public int getItemCount() {
        return items.size();
    }

    public void generateBill(Billable b) {
        // ...
    }

    public void add(Item s) {
        items.add(s);
    }
}
```
  </div>
</div>

(a) Draw a class diagram to represent the code. Show all attributes, methods, associations, navigabilities, visibilities, known multiplicities, and association roles. Show associations as lines.<br>
(b) Draw an object diagram to represent the situation where the inventory has one item named `spanner` and a review of `POOR` rating<br>
  i.e., `new Inventory().add(new StockItem("spanner", Rating.POOR))`{.java}.

</question>
</panel>
