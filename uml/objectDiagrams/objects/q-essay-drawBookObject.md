<panel header="{{ icon_Q }} Draw Book object">

Draw a UML diagram to represent the `Book` object created by the following code.

<div class="alt-java">

```java
class Book {

    private double price;
    private int pageCount;

    Book(double price, int pageCount) {
        // ...
    }
}

// somewhere else in the code

Book myBook = new Book(13.5, 200);
```
</div>
<div class="alt-python">

```python
class Book:

  def __init__(self, price, page_count):
    self.__price = price # type: float
    self.__page_count = page_count # type: int


# somewhere else in the code
my_book = Book(13.5, 200)
```
</div>

</panel>
