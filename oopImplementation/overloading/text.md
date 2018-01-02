<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="title">

#### Implementing Overloading :one:

</div>

<div id="body">

An operation can be overloaded inside the same class or in sub/super classes.

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

<p/>

</div>

<div id="extras">
  <include src="resources.md" />
</div>

</div>
