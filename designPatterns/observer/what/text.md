<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Software Design Patterns :arrow_right: Observer Pattern :arrow_right:</div>

<div id="title">

#### What :two:

</div>

<div id="body">

Here is another scenario from the same student management system where the user is adding a new student to the system.

<tip-box>

Example:

<img src="{{baseUrl}}/designPatterns/observer/what/images/sequenceDiagram.png" height="300" />
<p/>

Now, assume the system has two additional views used in parallel by different users:

* `StudentListUi`: that accesses a list of students and
* `StudentStatsUi`: that generates statistics of current students.

When a student is added to the database using `NewStudentUi` shown above, both `StudentListUi` and `StudentStatsUi` should get updated automatically, as shown below.

<img src="{{baseUrl}}/designPatterns/observer/what/images/studentListUI.png" height="150" />
<p/>

However, the `StudentList` object has no knowledge about `StudentListUi` and `StudentStatsUi` (note the direction of the navigability) and has no way to inform those objects. This is an example of the type of problem addressed by the Observer pattern.

</tip-box>

**Context**

An object (possibly, more than one) is interested to get notified when a change happens to another object. That is, some objects want to ‘observe’ another object.

**Problem**

A bidirectional link between the two objects is not desirable. However the two entities need to communicate with each other. That is, the ‘observed’ object does not want to be coupled to objects that are ‘observing’ it.

**Solution**

The Observer pattern shows us how an object can communicate with other objects while avoiding a direct coupling with them.
The solution is to force the communication through an interface known to both parties. A concrete example is given below.

<tip-box>

Example:

<img src="{{baseUrl}}/designPatterns/observer/what/images/studentListObserver.png" height="130" />
<p/>

Here is the Observer pattern applied to the student management system.

During initialization of the system,

1. First, create the relevant objects.

```java
StudentList studentList = new StudentList();
StudentListUi listUi = new StudentListUi();
StudentStatusUi statusUi = new StudentStatsUi();
```

2. Next, the two UIs indicate to the `StudentList` that they are interested in being updated whenever `StudentList` changes. This is also known as ‘subscribing for updates’.

```java
studentList.addUi(listUi);
studentList.addUi(statusUi);
```

Within the `addUi` operation of `StudentList`, all Observer objects subscribers are added to an internal data structure called `observerList`.

```java
//StudentList class
public void addUi(Observer o) {
    observerList.add(o);
}
```

As such, whenever the data in `StudentList` changes (e.g. when a new student is added to the `StudentList`), all interested observers are updated by calling the `notifyUIs` operation.

```java
//StudentList class
public void notifyUIs() {
    for(Observer o: observerList) //for each observer in the list
        o.update();
}
```

UIs can then pull data from the `StudentList` whenever the `update` operation is called.

```java
//StudentListUI class
public void update() {
    //refresh UI by pulling data from StudentList
}
```

Note that StudentList is unaware of the exact nature of the two UIs but still manages to communicate with them via an intermediary.

</tip-box>

Here is the generic description of the observer pattern:

<img src="{{baseUrl}}/designPatterns/observer/what/images/observableInterfaceDiagram.png" height="80" />
<p/>

*	`<< Observer >>` is an interface: any class that implements it can observe an `<< Observable >>`. Any number of `<< Observer >>` objects can observe (i.e. listen to changes of) the `<< Observable >>` object.
*	The `<< Observable >>` maintains a list of `<< Observer >>` objects. `addObserver(Observer)` operation adds a new `<< Observer >>` to the list of `<< Observer >>s`.
*	Whenever there is a change in the `<< Observable >>`, the `notifyObservers()` operation is called that will call the `update()` operation of all `<< Observer >>s` in the list.

In a GUI application, how is the Controller notified when the “save” button is clicked? UI frameworks such as JavaFX has inbuilt support for the Observer pattern.

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
