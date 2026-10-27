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
    private static final int MAX_ACCOUNTS = 8;
    private ArrayList<Account> theAccounts;

    public void addAccount(Account acc) throws Exception {
        assert theAccounts.size() <= MAX_ACCOUNTS; // the multiplicity is violated already!

        if (theAccounts.size() == MAX_ACCOUNTS) {
            throw new Exception("Adding more than " + MAX_ACCOUNTS + " accounts");
        }

        if (theAccounts.contains(acc)) {
            throw new Exception("Adding a duplicate account");
        }

        theAccounts.add(acc);
    }

    public void removeAccount(Account acc) {
        theAccounts.remove(acc);
    }
}
```

</panel>
</panel>
