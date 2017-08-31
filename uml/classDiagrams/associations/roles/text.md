<div id="title">

#### Roles :two:

</div>

<div id="body">

**_Association Role_ labels are used to indicate the role played by the classes in the association.**

<img src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/association.png" height="120" />
<p/>

<tip-box>

:package: This association represents a marriage between a `Man` object and a `Woman` object. The respective roles played by objects of these two classes are `husband` and `wife`. 

<img src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/husbandWife.png" width="300" />
<p/>

Note how the variable names match closely with the association roles.

```java
class Man{
    Woman wife;
}

class Woman{
    Man husband;
}
```

</tip-box>

<tip-box>

:package: The role of `Student` objects in this association is `charges` %%(i.e. Admin is in charge of students)%%

<img src="{{baseUrl}}/uml/classDiagrams/associations/roles/images/adminStudent.png" height="70" />
<p/>

```java
class Admin{
    List<Student> charges;
}
```

</tip-box>


</div>

<div id="extras">
</div>

</div>
