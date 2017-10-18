<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Abstract Classes :two:

</div>

<div id="body">

**Use the `abstract` keyword to identify abstract classes/methods.**

<tip-box> 

:package: Partial code below gives an example of how to declare abstract classes/methods.

<img src="{{baseUrl}}/oopDesign/inheritance/abstractClasses/images/account.png" height="220" />
<p/>

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
<include src="exercises.md" />

</div>

</div>
