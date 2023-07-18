<panel header="{{ icon_Q_A }} Is the code defensive? `Teacher` and `Student`">

(a) Is the code given below a defensive translation of the associations shown in the class diagram? Explain your answer.

```java
class Teacher {
    private Student favoriteStudent;

    void setFavoriteStudent(Student s) {
        favoriteStudent = s;
    }
}
```

```java
class Student {
    private Teacher favoriteTeacher;

    void setFavoriteTeacher(Teacher t) {
        favoriteTeacher = t;
    }
}
```

<pic src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/teacherStudent.png" height="80" />
<p/>

(b) In terms of maintaining referential integrity in the implementation, what is the difference between the following two diagrams?

<pic src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/teacherStudent.png" height="80" />
<p/>
<pic src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/manWomanAssoc.png" height="60" />
<p/>

(c) Show a defensive implementation of the `remove(Member m)` method of the `Club` class given below.

<pic src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/clubMember.png" height="60" />
<p/>

<panel type="seamless" header="{{ icon_A }} Answer" minimized>

(a) Yes. Each link is mutable and unidirectional. A simple reference variable is suitable to hold the link.

The `Teacher` class can be made even more defensive by introducing a `resetFavoriteStudent()` method to unlink the current favorite student from a teacher. In that case, the `setFavoriteStudent(Student)` method should not accept `null`. This approach is more defensive because it prevents a `null` value being passed to `setFavoriteStudent(Student)` by mistake and being interpreted as a request to de-link the current favorite student from the `Teacher` object.

(b) First diagram has unidirectional links. Second has a bidirectional link. RI is only applicable to the second.

(c)
```java
void removeMember(Member m) {
    if (m==null) {
        throw exception("this is null, not a member!");
    } else if (member_count == 10) {
        throw exception("we need at least 10 members to survive!");
    } else if (!isMember(m)) {
        throw exception("this fellow is not a member of our club!");
    } else {
        members.remove(m); // members is a data structure such as ArrayList
    }
}
```

</panel>
</panel>
