<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Observer design pattern</span>

<div id="body">


**Context**

An object (possibly more than one) is interested in being notified when a change happens to another object. That is, some objects want to ‘observe’ another object.

<box>

{{ icon_example }} Consider this scenario from a student management system where the user is adding a new student to the system.

<pic eager src="{{baseUrl}}/designPatterns/observer/what/images/sequenceDiagram.png" height="330" />
<p/>

Now, assume the system has two additional views used in parallel by different users:

* `StudentListUi`: that accesses a list of students and
* `StudentStatsUi`: that generates statistics of current students.

When a student is added to the database using `NewStudentUi` shown above, both `StudentListUi` and `StudentStatsUi` should get updated automatically, as shown below.

<pic eager src="{{baseUrl}}/designPatterns/observer/what/images/studentListUI.png" height="180" />
<p/>

However, the `StudentList` object has no knowledge about `StudentListUi` and `StudentStatsUi` (note the direction of the navigability) and has no way to inform those objects. This is an example of the type of problem addressed by the Observer pattern.

</box>

**Problem**

The ‘observed’ object does not want to be coupled to objects that are ‘observing’ it.

**Solution**

Force the communication through an interface known to both parties.

<pic eager src="{{baseUrl}}/designPatterns/observer/what/images/studentListObserver.png" height="160" />
<p/>

<box>

{{ icon_example }} Here is the Observer pattern applied to the student management system.

**During the initialization of the system,**

1. First, create the relevant objects.

   ```java
   StudentList studentList = new StudentList();
   StudentListUi listUi = new StudentListUi();
   StudentStatsUi statsUi = new StudentStatsUi();
   ```

1. Next, the two UIs indicate to the `StudentList` that they are interested in being updated whenever `StudentList` changes. This is also known as ‘subscribing for updates’.

   ```java
   studentList.addUi(listUi);
   studentList.addUi(statsUi);
   ```

1. Within the `addUi` operation of `StudentList`, all Observer object subscribers are added to an internal data structure called `observerList`.

   ```java
   // StudentList class
   public void addUi(Observer o) {
       observerList.add(o);
   }
   ```

**Now, whenever the data in `StudentList` changes** (e.g. when a new student is added to the `StudentList`),

1. All interested observers are updated by calling the `notifyUIs` operation.
   ```java
   // StudentList class
   public void notifyUIs() {
       // for each observer in the list
       for (Observer o: observerList) {
           o.update();
       }
   }
   ```

1. UIs can then pull data from the `StudentList` whenever the `update` operation is called.
   ```java
   // StudentListUI class
   public void update() {
       // refresh UI by pulling data from StudentList
   }
   ```
   Note that `StudentList` is unaware of the exact nature of the two UIs but still manages to communicate with them via an intermediary.

</box>

Here is the generic description of the observer pattern:

<pic eager src="{{baseUrl}}/designPatterns/observer/what/images/observableInterfaceDiagram.png" height="100" />
<p/>

* `<<Observer>>` is an interface: any class that implements it can observe an `<<Observable>>`. Any number of `<<Observer>>` objects can observe (i.e., listen to changes of) the `<<Observable>>` object.
* The `<<Observable>>` maintains a list of `<<Observer>>` objects. `addObserver(Observer)` operation adds a new `<<Observer>>` to the list of `<<Observer>>`s.
* Whenever there is a change in the `<<Observable>>`, the `notifyObservers()` operation is called that will call the `update()` operation of all `<<Observer>>`s in the list.

<box>

{{ icon_example }} In a GUI application, how is the Controller notified when the “save” button is clicked? UI frameworks such as JavaFX have inbuilt support for the Observer pattern.

</box>

</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
