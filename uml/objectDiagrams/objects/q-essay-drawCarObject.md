<panel header="{{ icon_Q }} Draw Car object">
<question>

Draw a UML diagram to represent the `Car` object created by the following code.

<div class="alt-java">

```java
class Car{

    private double price;
    private int speed;

    Car(double price, int speed){
        //...
    }
}

// somewhere else in the code

Car myCar = new Car(13.5, 200);
```
</div>
<div class="alt-python">

```python
class Car:

  def __init__(self, price, speed):
    self.__price = price # type: float
    self.__speed = speed # type: int


# somewhere else in the code
my_car = Car(13.5, 200);
```
</div>

</question>
</panel>
