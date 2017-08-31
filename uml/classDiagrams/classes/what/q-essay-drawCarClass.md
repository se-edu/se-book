<panel header=":lock: Draw Car class">
<question>

Draw a UML diagram to represent the Car class as given below. Include visibilities.

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

</question>
</panel>
