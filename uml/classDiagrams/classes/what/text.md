<div id="title">

#### What :two:

</div>

<div id="body">

The basic UML notations used to represent a _class_:<br>

<img src="{{baseUrl}}/uml/classDiagrams/classes/what/images/basicNotation.png" height="130" />
<p/>

<tip-box>

:package: A `Table` class shown in UML notation:

<img src="{{baseUrl}}/uml/classDiagrams/classes/what/images/operations.png" height="150" />
<p/>

<panel type="seamless" header="The equivalent code">

```java

class Table{
    
    Integer number;
    Chair[] chairs = null;
    
    Integer getNumber(){
        ...
    }
    
    void setNumber(Integer n){
        ...
    }
}

```
</panel>

</tip-box>

**The 'Operations' compartment and/or the 'Attributes' compartment may be omitted** if such details are not important for the task at hand. 'Attributes' always appear above the 'Operations' compartment. All operations should be in one compartment rather than each operation in a separate compartment. Same goes for attributes.

<tip-box>

<img src="{{baseUrl}}/uml/classDiagrams/classes/what/images/classes.png" height="100" />

</tip-box>

**The _visibility_ of attributes and operations is used to indicate the level of access allowed for each attribute or operation.** The types of visibility and their exact meanings depend on the programming language used. Here are some common visibilities and how they are indicated in a class diagram:

* `+` : `public`
* `-` : `private`
* `#` : `protected`
* `~` : `package private`

<tip-box>

:package: `Table` class with visibilities shown:

<img src="{{baseUrl}}/uml/classDiagrams/classes/what/images/operationsVisibility.png" height="150" />
<p/>

</tip-box>

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
