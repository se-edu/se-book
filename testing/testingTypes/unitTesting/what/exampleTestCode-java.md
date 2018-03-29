
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