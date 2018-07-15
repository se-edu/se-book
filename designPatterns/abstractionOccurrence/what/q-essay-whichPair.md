<panel header="{{ icon_Q_A }} Which situations match the pattern?">
<question has-input="true">

Which pairs of classes are likely to be the `<< Abstraction >>` and the `<< Occurrence >>` of the abstraction occurrence pattern?

1. CarModel, Car. (Here CarModel represents a particular model of a car produced by the car manufacturer. E.g. BMW R4300)
2. Car, Wheel
3. Club, Member
4. TeamLeader, TeamMember
5. Magazine (E.g. ReadersDigest, PCWorld), MagazineIssue

<div slot="answer">

One of the key things to keep in mind is that the `<< Abstraction >>` does not represent a real entity. Rather, it represents some information common to a set of objects. A single real entity is represented by an object of `<< Abstraction >>` type and `<< Occurrence >>` type.

Before applying the pattern, some attributes have the same values for multiple objects. For example, w.r.t. the BookTitle-BookCopy example given in this handout, values of attributes such as `book_title`, `ISBN` are exactly the same for copies of the same book.

After applying the pattern, the `Abstraction` and the `Occurrence` classes together represent one entity. It is like one class has been split into two. For example, a `BookTitle` object and a `BookCopy` object combines to represent an actual `Book`.

1.	CarModel, Car: **Yes**
2.	Car, Wheel: **No. Wheel is a ‘part of’ Car. A wheel is not an occurrence of Car.**
3.	Club, Member: **No. this is a ‘part of’ relationship.**
4.	TeamLeader, TeamMember: **No. A TeamMember is not an occurrence of a TeamLeader or vice versa.**
5.	Magazine, MagazineIssue: **Yes.**

</div>
</question>
</panel>
