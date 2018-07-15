<panel header="{{ icon_Q_A }} Write a `Manager#addAccount()`">
<question has-input="true">

For the `Manager` class shown below, write an `addAccount()` method that

* restricts the maximum number of Accounts to 8
* avoids adding duplicate Accounts

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/compulsoryAssociations/images/managerAccount.jpg" height="55" />
<p/>

<div slot="answer">

```java
import java.util.*;

public class Manager {
    private ArrayList< Account > theAccounts ;

    public void addAccount(Account acc) throws Exception {
        if (theAccounts.size( ) == 8){
            throw new Exception ("adding more than 8 accounts");
        }
        
        if (!theAccounts.contains(acc)) {
            theAccounts.add(acc);
        }
    }

    public void removeAccount(Account acc) {
        theAccounts.remove(acc);
    }
}
```

</div>
</question>
</panel>
