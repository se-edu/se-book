<panel header=":lock: Draw Car object">
<question>

Draw a UML diagram to represent the `Car` object created by the following code.

<tabs> 
  <tab header="Java">

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
  </tab>
  <tab header="Python">

```python
class Car:
  
  def __init__(self, price, speed):
    self.__price = price # type: float
    self.__speed = speed # type: int
    

# somewhere else in the code
my_car = Car(13.5, 200);  
```
</tab>
</tabs><hr>

</question>
</panel>
