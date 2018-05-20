<panel header=":lock: Draw Car class">
<question>

Draw a UML diagram to represent the `Car` class as given below. Include visibilities.

<tabs> 
  <tab header="Java">

```java
class Car{
    
    Engine engine;
    private List<Wheel>[] wheels = null;
    public String model;
    
    public void drive(int speed){
        move(speed);
    }
    
    private move(int speed){
        ...
    }
}
```
  </tab>
  <tab header="Python">

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
</tab>
</tabs><hr>

</question>
</panel>
