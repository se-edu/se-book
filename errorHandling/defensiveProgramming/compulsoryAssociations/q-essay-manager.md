<panel header="{{ icon_Q_A }} Write a `Manager#addAccount()`">

For the `Manager` class shown below, write an `addAccount()` method that

* restricts the maximum number of Accounts to 8
* avoids adding duplicate Accounts

<pic eager src="{{baseUrl}}/errorHandling/defensiveProgramming/compulsoryAssociations/images/managerAccount.jpg" height="55" />
<p/>

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

```java
import java.util.*;

public class Manager {
    private ArrayList<Account> theAccounts;

    public void addAccount(Account acc) throws Exception {
        if (theAccounts.size() == 8) {
            throw new Exception("adding more than 8 accounts");
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

</panel>
</panel>
