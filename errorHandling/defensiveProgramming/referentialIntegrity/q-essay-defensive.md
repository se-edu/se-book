<panel header="{{ icon_Q_A }} Is the code defensive? `Teacher` and `Student`">
<question has-input="true">

(a) Is the code given below a defensive translation of the associations shown in the class diagram? Explain your answer.

```java
class Teacher{
    private Student favoriteStudent;

    void setFavoriteStudent(Student s){
        favoriteStudent = s;
    }
}
```

```java
class Student{
    private Teacher favoriteTeacher;

    void setFavoriteTeacher(Teacher t){
        favoriteTeacher = t;
    }
}
```

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/teacherStudent.png" height="80" />
<p/>

(b) In terms of maintaining referential integrity in the implementation, what is the difference between the following two diagrams?  

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/teacherStudent.png" height="80" />
<p/>
<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/manWomanAssoc.png" height="60" />
<p/>

(c) Show a defensive implementation of the `remove(Member m)` of the `Club` class given below.

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/clubMember.png" height="60" />
<p/>

<div slot="answer">

(a) Yes. Each links is mutable and unidirectional. A simple reference variable is suitable to hold the link.

`Teacher` class can be made even more defensive by introducing a `resetFavoriteStudent()` method to unlink the current favorite student from a teacher. In that case, `setFavoriteStudent(Student)` method should not accept null. This approach is more defensive because it prevents a null value being passed to `setFavoriteStudent(Student)` by mistake and being interpreted as a request to de-link the current favorite student from the `Teacher` object.

(b) First diagram has unidirectional links. Second has a bidirectional link. RI is only applicable to the second.

(c)
```java
void removeMember(Member m) {
    if (m==null) {
        throw exception("this is null, not a member!");
    } else if(member_count == 10) {
        throw exception("we need at least 10 members to survive!");
    } else if(!isMember(m)) {
        throw exception ("this fellow is not a member of our club!");
    } else {
        members.remove(m); // members is a data structure such as ArrayList
    }
}
```

</div>
</question>
</panel>
