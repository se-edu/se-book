<panel header="{{ icon_Q_A }} Implement `Marriage`">
<question has-input="true">

Implement the classes defensively with appropriate references and operations to establish the association among the classes. Follow the defensive coding approach. Let the `Marriage` class handle setting/removal of reference.

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/compulsoryAssociations/images/manMarriageWoman.jpg" height="55" />
<p/>

<div slot="answer">

```java
public class Marriage {
    private Man husband = null;
    private Woman wife = null;

    // extra information like date etc can be added

    public Marriage(Man m, Woman w) throws Exception {
        if (m == null || w == null) {
            throw new Exception("no man/woman");
        }
        if (m.isMarried() || w.isMarried()) {
            throw new Exception("already married");
        }
        husband = m;
        m.enterMarriage(this);
        wife = w;
        w.enterMarriage(this);
    }

    public Man getHusband() throws Exception {
        if(husband == null) {
            throw new Exception("error state");
        } else {
            return husband;
        }
    }

    public Woman getWife() throws Exception {
        if(wife == null) {
            throw new Exception("error state");
        } else {
            return wife;
        }
    }

    // removal of both ends of 'Marriage'
    public void divorce() throws Exception {
        if (husband==null || wife==null) {
            throw new Exception("no marriage");
        }
        husband.removeFromMarriage(this);
        husband = null;
        wife.removeFromMarriage(this);
        wife = null;
    }
} 
```

</div>
</question>
</panel>
