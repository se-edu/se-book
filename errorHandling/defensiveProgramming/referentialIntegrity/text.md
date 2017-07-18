<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Error Handling :arrow_right: Defensive Programming :arrow_right:</div>

<div id="title">

#### Enforcing Referential Integrity :three:

</div>

<div id="body">

A bidirectional association in the design (shown in (a)) is usually emulated at code level using two variables (as shown in (b)).

<tip-box>

Example:

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/manWoman.png" height="140" />
<p/>

```java
class Man {
    Woman girlfriend;

    void setGirlfriend(Woman w) {
        girlfriend = w;
    }
    …
}
```

```java
class Woman {
    Man boyfriend;

    void setBoyfriend(Man m) {
        boyfriend = m;
    }
}
```

</tip-box>

The two classes are meant to be used as shown in (c) below. Now see what happens if the two classes were used as in (d) below. Now James' girlfriend is Jean, while Jean's boyfriend is not James. This situation results as the code was not defensive enough to stop this “love triangle”. In such a situation, we say that _the referential integrity has been violated_. It simply means _there is an inconsistency in object references_.

<tip-box>

c)
```java
Woman jean;
Man james;
…
james.setGirlfriend(jean);
jean.setBoyfriend(james);
```

</tip-box>

<tip-box>

d)
```java
Woman jean; Man james, yong;
…
james.setGirlfriend(jean);  
jean.setBoyfriend(yong);  
```

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/woman.png" height="50" />
<p/>

</tip-box>

One way to prevent this situation is to implement the two classes as shown below. Note how the referential integrity is maintained.

<tip-box>

```java
public class Woman {
    private Man boyfriend;

    public void setBoyfriend(Man m) {
        if(boyfriend == m){
            return;
        }
        if (boyfriend != null) {
            boyfriend.breakUp();
        }
        boyfriend = m;
        m.setGirlfriend(this);
    }

    public void breakUp() {
        boyfriend = null;
    }   
    ...
}
```

```java
public class Man{
    private Woman girlfriend;

    public void setGirlfriend(Woman w) {
        if(girlfriend == w){
            return;
        }
        if (girlfriend != null) {
            girlfriend.breakUp();
        }
        girlfriend = w;
        w.setBoyfriend(this);
    }
    public void breakUp() {
        girlfriend = null;
    }  
   ...
}
```

</tip-box>

When the code `james.setGirlfriend(jean)` is executed, the code ensures that `james` break up with any current girlfriend before he accepts `jean` as the girlfriend. Furthermore, the code ensures that `jean` breaks up with any existing boyfriends and accepts `james` as the boyfriend.

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
