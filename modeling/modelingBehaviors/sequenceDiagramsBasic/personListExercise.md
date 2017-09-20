Consider the code below:
```java
class Person{
    Tag tag;
    String name;

    Person(String personName, String tagName){
        name = personName;
        tag = new Tag(tagName);
    }
}

class Tag{
    Tag(String value){
        //...
    }
}

class PersonList{
    void addPerson(Person p){
        //...
    }
}
```

Draw a sequence diagram to illustrate the object interactions that happen in the code snippet below:
```java
PersonList personList = new PersonList();
while (hasRoom){
    Person p = new Person("Adam", "friend");
    personList.addPerson(p);
}
```