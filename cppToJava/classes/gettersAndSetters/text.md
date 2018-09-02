<div id="title">

#### Getters and setters

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can define getters and setters</span>

<div id="body">

As the instance variables of `Time` are private, you can access them from within the `Time` class only. To compensate, **you can provide methods to access attributes**:

```java
public int getHour() {
    return hour;
}

public int getMinute() {
    return minute;
}

public int getSecond() {
    return second;
}
```

Methods like these are formally called “accessors”, but more commonly referred to as _getters_. By convention, the method that gets a variable named something is called `getSomething`.

Similarly, **you can provide _setter_ methods to modify attributes** of a `Time` object:

```java
public void setHour(int hour) {
    this.hour = hour;
}

public void setMinute(int minute) {
    this.minute = minute;
}

public void setSecond(int second) {
    this.second = second;
}
```

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>