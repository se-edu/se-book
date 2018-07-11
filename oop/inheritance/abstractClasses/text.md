<div id="title">

#### Abstract Classes

</div>

<span id="prereqs"></span>

<span id="outcomes">{{glyphicon_flag}} Can implement abstract classes</span>

<div id="body">

<tip-box type="definition">

<include src="../../../common/definitions.md#def-abstractClass" /> 
  
</tip-box>

**An abstract method is simply the method interface without the implementation.** 

<tip-box>

{{ icon_example }} The `Account` class has an abstract method (`addInterest()`).

</tip-box>

**A class that has an abstract method becomes an abstract class**. Evan a class that does not have any abstract method can be declared as an abstract class. Abstract classes cannot be instantiated.

##### <big>Implementing abstract classes</big>

**Use the `abstract` keyword to identify abstract classes/methods.**

<tip-box> 

{{ icon_example }} Partial code below gives an example of how to declare abstract classes/methods. The `addInterest()` method in the `Account` class is abstract and therefore the `Account` class itself is abstract. The `CurrentAccount` class need not be abstract because it overrides the abstract method inherited from the parent class.

```java
abstract class Account {
    
    int number;
    
    abstract void addInterest();
    
    void close(){
        //...
    }
}

class CurrentAccount extends Account{

    @Override
    void addInterest() {
        //...
    }
}
```

</tip-box>

In Java, if a class contains an abstract method, the class itself should be an abstract class %%&nbsp;i.e. if any methods of the class is 'incomplete', the class itself is 'incomplete'%%.


</div>

<div id="extras">
  <include src="resources.md" />
</div>