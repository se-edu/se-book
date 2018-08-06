<panel header="{{ icon_Q_A }} Class Diagram for code">
<question>

<div class="alt-java">

Draw a class diagram for the code below. Also draw an object diagram that will represent the object structure after running `Main#main()`.
* Make the multiplicities as strict as possible without contradicting the code.
* You may omit the `Main` class from both diagrams.

```java

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Item item1 = new Item();
        Item item2 = new Item();
        Box box1 = new Box(item1);
        Box box2 = new Box(item2);
        item2.setMainCard(new Card());
        item2.addPreviousBox(box1);
        item2.addPreviousBox(box2);
    }
}

class Box{
    private Item item;
    Box (Item item){
        this.item = item;
    }
}

class Item{
    private List<Box> previousBoxes = new ArrayList<>();
    private Card mainCard = null;
    private Card subCard = null;

    void setMainCard(Card card){
        this.mainCard = card;
    }

    void setSubCard(Card card){
        this.subCard = card;
    }

    void addPreviousBox(Box previousBox){
        previousBoxes.add(previousBox);
    }
}

class Card{

}
```
</div>
<div class="alt-python">

Draw a class diagram for the code below. Also draw an object diagram that will represent the object structure after running the code. Make the multiplicities as strict as possible without contradicting the code.

```python
class Box:

  def __init__(self, item):
    self.__item = item # type: Item

class Item:

  def __init__(self):
    self.__previous_boxes = [] # type: list of Box objects
    self.__main_card = None    # type: Car
    self.__sub_card = None     # type: Card

  def set_main_card(self, card):
    self.__main_card = card # type: Card

  def set_sub_card(self, card):
    self.__sub_card = card # type: Card

  def add_previous_box(self, previous_box):
    self.__previous_boxes.append(previous_box)


class Card:
  pass


item1 = Item();
item2 = Item();
box1 = Box(item1);
box2 = Box(item2);
item2.set_main_card(Card());
item2.add_previous_box(box1);
item2.add_previous_box(box2);
```
</div>

<div slot="answer">

<img src="{{baseUrl}}/uml/classDiagrams/combine/basic/images/classDiagramForCodeAnswer.png" width="600" />

</div>

</question>
</panel>
