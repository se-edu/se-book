<tip-box>

:package: The constructor of the `Account` class below is _overloaded_ because there are two constructors with different signatures: `()` and `(String, String, double)`. Furthermore, the `save` method in the `Account` class is overloaded in the child class `SavingAccount`.

```java
class Account {
    Account () {
        ...
    }
    
    Account (String name, String number, double balance) {
        ...
    }
    
    void save(int amount){
        ...
    }
}

class SavingAccount extends Account{
    
    void save(Double amount){
        ...
    }
}
```
</tip-box>

:paperclip: Resources:

* [**Method Overloading in Java**](https://www.javatpoint.com/method-overloading-in-java) a tutorial from javatpoint.com. Also mentions the topic of a related topic ==_type promotion_==.