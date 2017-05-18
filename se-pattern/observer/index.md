### Observer Pattern
Here is another scenario from the same student management system where the user is adding a new student to the system.

<img class="center-block" src="observer/intro.png">

Now, assume the system has two additional *views* used in parallel by different users: 

* (a) `StudentListUi` : that accesses a list of students and
* (b) `StudentStatsUi` : that generates statistics of current students.

When a student is added to the database using *NewStudentUi* shown above, both *StudentListUi* and *StudentStatsUi* should get updated automatically, as shown below.

<img class="center-block" src="observer/intro2.png">

However, the `StudentList` object has no knowledge about `StudentListUi` and `StudentStatsUi` (note the direction of the navigability) and has no way to inform those objects. This is an example of the type of problem addressed by the **Observer pattern**.

#### Context
An object (possibly, more than one) is interested to get notified when a change happens to another object. That is, some objects want to ‘observe’ another object.

#### Problem
A bidirectional link between the two objects is not desirable. However the two entities need to communicate with each other. That is, the ‘observed’ object does not want to be coupled to objects that are ‘observing’ it.

#### Solution
The *Observer* pattern shows us how an object can communicate with other objects while avoiding a direct coupling with them.

The solution is to force the communication through an interface known to both parties. A concrete example is given below.

<img class="center-block" src="observer/solution1.png">

Here is the Observer pattern applied to the student management system.

During initialization of the system,

1.First, create the relevant objects.
```
StudentList studentList = new StudentList(); 
StudentListUi listUi = new StudentListUi(); 
StudentStatusUi statusUi = new StudentStatsUi();
```

2.Next, the two UIs indicate to the `StudentList` that they are interested in being updated whenever StudentList changes. This is also known as ‘subscribing for updates’.
```
studentList.addUi(listUi);
studentList.addUi(statusUi);
```
Within the addUi operation of `StudentList`, all Observer objects subscribers are added to an internal data structure called `observerList`.
```
//StudentList class
public void addUi(Observer o) { 
    observerList.add(o);
}
``` 
As such, whenever the data in `StudentList` changes (e.g. when a new student is added to the `StudentList`), all interested observers are updated by calling the `notifyUIs` operation.
```
//StudentList class
public void notifyUIs() {
for(Observer o: observerList) //for each observer in the list
    o.update();
}
```
UIs can then pull data from the StudentList whenever the update operation is called.
```
//StudentListUI class
public void update() {
    //refresh UI by pulling data from StudentList
}
```

Note that `StudentList` is unaware of the exact nature of the two UIs but still manages to communicate with them via an intermediary.

Here is the generic description of the observer pattern:

<img class="center-block" src="observer/solution2.png">

* `<<Observer>>` is an interface: any class that implements it can observe an `<<Observable>>`. Any number of `<<Observer>>` objects can observe (i.e. listen to changes of) the `<<Observable>>` object.
* The `<<Observable>>` maintains a list of `<<Observer>>` objects. `addObserver(Observer)` operation adds a new `<<Observer>>` to the list of `<<Observer>>`s.
* Whenever there is a change in the `<<Observable>`, the `notifyObservers()` operation is called that will call the `update()` operation of all `<<Observer>>`s in the list.

In a GUI application, how is the Controller notified when the “save” button is clicked?
UI frameworks such as JavaFX has inbuilt support for the Observer pattern.