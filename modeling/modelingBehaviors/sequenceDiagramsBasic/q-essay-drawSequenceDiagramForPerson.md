<panel header="{{ icon_Q }} Draw a Sequence Diagram for the code (`PersonList`, `Person`, `Tag`)">
<question>

Consider the code below:
<div class="row">
  <div class="col-sm-7">

```java{.no-line-numbers}
class Person {
    Tag tag;
    String name;

    Person(String personName, String tagName) {
        name = personName;
        tag = new Tag(tagName);
    }
}
```
  </div>
  <div class="col-sm-5">

```java{.no-line-numbers}
class Tag {
    Tag(String value) {
        // ...
    }
}

class PersonList {
    void addPerson(Person p) {
        // ...
    }
}
```
  </div>
</div>

Draw a sequence diagram to illustrate the object interactions that happen in the code snippet below:
```java{.no-line-numbers}
PersonList personList = new PersonList();
while (hasRoom) {
    Person p = new Person("Adam", "friend");
    personList.addPerson(p);
}
```

</question>
</panel>
