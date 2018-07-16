<div id="title">

#### Enforcing Referential Integrity

</div>

<span id="prereqs"><panel src="../what/unit-inElsewhere-asFlat.md" boilerplate header="%%{{ icon_prereq }} Implementation → Error Handling → Defensive Programming → What%%" /></span>

<span id="outcomes">{{ icon_outcome }} Can use defensive coding to enforce referential integrity of bi-directional associations</span>

<div id="body">

A bidirectional association in the design (shown in (a)) is usually emulated at code level using two variables (as shown in (b)).


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

The two classes are meant to be used as follows: 

```java
Woman jean;
Man james;
…
james.setGirlfriend(jean);
jean.setBoyfriend(james);
```
Suppose the two classes were used this instead: 

```java
Woman jean; Man james, yong;
…
james.setGirlfriend(jean);  
jean.setBoyfriend(yong);  
```

Now James' girlfriend is Jean, while Jean's boyfriend is not James. This situation results as the code was not defensive enough to stop this "love triangle". In such a situation, we say that _the referential integrity has been violated_. It simply means _there is an inconsistency in object references_.

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/woman.png" height="50" />
<p/>

One way to prevent this situation is to implement the two classes as shown below. Note how the referential integrity is maintained.

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

When the code `james.setGirlfriend(jean)` is executed, the code ensures that `james` break up with any current girlfriend before he accepts `jean` as the girlfriend. Furthermore, the code ensures that `jean` breaks up with any existing boyfriends and accepts `james` as the boyfriend.

</div>

<div id="extras">

<include src="exercises.md" />

</div>