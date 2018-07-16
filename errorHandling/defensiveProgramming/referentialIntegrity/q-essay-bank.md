<panel header="{{ icon_Q_A }} Bidirectional association between `Bank` and `Account`">
<question has-input="true">

Implement this bidirectional association.  Note that the `Bank` uses `accNumber` attribute to uniquely identify an `Account` object. Assume the `Bank` class is responsible for maintaining the links between objects.

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/bankAccount.jpg" height="60" />
<p/>

<div slot="answer">

The code below contains a method in the `Bank` class to create an account; the bank field in the new account is thereby filled by the bank creating it.

We assume that once an `Account` has been assigned to one `Bank`, it cannot be assigned to a different `Bank`. Once the `Account` is removed from the `Bank`, it will not be used any more (hence, no need to remove the link from `Account` to `Bank`).

```java
public class Account {
    private int accNumber ;
    private Bank theBank ;

    public Account(int n, Bank b) {
        accno = n ;
        theBank = b ;
    }
    public int getNumber() {
        return accNumber;
    }
    public Bank getBank() {
        return theBank ;
    }
}
```

```java
import java.util.*;

public class Bank {
    private HashMap< Integer, Account > theAccounts = new HashMap < Integer, Account > ();

    public void createAccount(int n) {
        addAccount(new Account(n, this)) ;
    }
    public void addAccount(Account a) {          
        theAccounts.put(a.getNumber(), a);
    }
    public void removeAccount(int accNumber) {
        theAccounts.remove(accNumber);
    }
    public Account lookupAccount(int accNumber) {
        return theAccounts.get(accNumber);
    }
}
```

</div>
</question>
</panel>
