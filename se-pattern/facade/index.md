### Façade Pattern

#### Context
Components need to access functionality deep inside other components. For example, 
the `UI` component of a Library system might want to access functionality of the Book class contained inside the `Logic` component.

<img src="facade/context.png" class="center-block">

#### Problem
Access to the component should be allowed without exposing its internal details. 
For example, the `UI` component should access the functionality of the `Logic` component without knowing that it contained a `Book` class within it.

#### Solution
Include a <tooltip content="Façade is a French word that means ‘front of a building’">[Façade]()</tooltip> class that sits between the component internals and users of the component such that all access to the component happens through the Façade class. 
The following class diagram shows the application of the Façade pattern to the Library System example. 
In this example, the `LibraryLogic` class acts as the Façade class.

<img class="center-block" src="facade/solution.png">

#### Code Example
The following `ShapeMaker` is a Façade class. The caller class who uses `ShapeMaker` could use it to draw different shape,
but the implementation detail and the actual `Shape` class is invisible to the caller class.
```
public class ShapeMaker {
   private Shape circle;
   private Shape rectangle;
   private Shape square;

   public ShapeMaker() {
      circle = new Circle();
      rectangle = new Rectangle();
      square = new Square();
   }

   public void drawCircle(){
      circle.draw();
   }
   public void drawRectangle(){
      rectangle.draw();
   }
   public void drawSquare(){
      square.draw();
   }
}
```

<tip-box type="important">  

1. Facade pattern is more like a helper for client applications.   
2. Facade pattern can be applied at any point of development, usually when the number of interfaces grow and system gets complex.
3. Subsystem interfaces are not aware of Facade and they shouldn’t have any reference of the Facade interface.
4. Facade pattern should be applied for similar kind of interfaces, its purpose is to provide a single interface rather than multiple interfaces that does the similar kind of jobs.

</tip-box>