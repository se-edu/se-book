<panel header="{{ icon_Q }} Draw Car class">
<question>

Draw a UML diagram to represent the `Car` class as given below. Include visibilities.

<div class="alt-java">

```java
class Car{

    Engine engine;
    private List<Wheel> wheels = null;
    public String model;

    public void drive(int speed){
        move(speed);
    }

    private void move(int speed){
        ...
    }
}
```
</div>
<div class="alt-python">

:bulb: You may omit `self` from method signatures in the class diagram.

```python
class Car:

  def __init__(self, model):
    self._engine = None # type: Engine
    self.__wheels = []  # type: a list of Wheel objects
    self.model = model  # type: string

    def drive(self, speed): # speed is an int
      self.move(speed)

    def __move(self, speed):
      pass
```
</div>

</question>
</panel>
