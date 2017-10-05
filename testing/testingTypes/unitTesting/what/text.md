<div id="title">

#### What :one:

</div>

<div id="body">

**_Unit testing_ : testing individual units (methods, classes, subsystems, ...) to ensure each piece works correctly.**
 
In OOP code, it is common to write one or more unit tests for each public method of a class.

<tip-box> 

:package: Here are the code skeletons for a `Foo` class containing two methods and a `FooTest` class that contains JUnit tests for those two methods.

```java
class Foo{
    String read(){
        //...
    }
    
    void write(String input){
        //...
    }
    
}

class FooTest{
    
    @Test
    void read(){
        //a unit test for Foo#read() method
    }
    
    @Test
    void write_emptyInput_exceptionThrown(){
        //a unit tests for Foo#write(String) method
    }  
    
    @Test
    void write_normalInput_writtenCorrectly(){
        //another unit tests for Foo#write(String) method
    }
}
```
</tip-box>



</div>

<div id="extras">
</div>

</div>
