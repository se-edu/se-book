### Abstraction occurrence pattern

#### Context
There is a group of similar entities that appears to be ‘occurrences’ (or ‘copies’) of the same thing, sharing lots of common information, but also differing in significant ways.

For example, in a library, there can be multiple copies of same book title. Each copy shares common information such as `book title`, `author`, <tooltip content="International Standard Book Number">[`ISBN`]()</tooltip> etc. However, there are also significant differences like `purchase date` and `barcode number` (assumed to be unique for each copy of the book). Other examples include episodes of the same TV series and stock items of the same product model (e.g. TV sets of the same model).

#### Problem
Representing the objects mentioned previously as a single class would be problematic (refer to anti-pattern description below). A better way to represent such instances is required, which should avoid duplicating the common information. Without duplicated information, inconsistency is avoided should these common information be changed.

#### Anti-patterns
<img src="abstraction-occurrence/antipattern1.png" class="pull-right">

Take for example the problem of representing books in a library.
Assume that there could be multiple copies of the same title, bearing the same ISBN number, but different serial numbers.
The above diagram shows an inferior or incorrect design for this problem. It requires common information to be duplicated by all instances.
This will not only waste storage space, but also creates a consistency problem.
Suppose that after creating several copies of the same title, the librarian realized that the author name was wrongly spelt.
To correct this mistake, the system needs to go through every copy of the same title to make the correction.
Also, if a new copy of the title is added later on, the librarian has to make sure that all information entered is the same as the existing copies to avoid inconsistency.

<img src="abstraction-occurrence/antipattern2.png" class="center-block">

The design above segregates the common and unique information into a class hierarchy.
Each book title is represented by a separate class with common data (i.e. `Name`, `Author`, <tooltip content="International Standard Book Number">[`ISBN`]()</tooltip>) hard-coded in the class itself.
This solution is worse than the first as each book title is represented as a class, resulting in thousands of classes.
Every time the library buys new books, the source code of the system will have to be updated with new classes.

#### Solution

The solution is to let a book copy be represented by two objects instead of one, as given below.

<img src="abstraction-occurrence/solution1.png" class="center-block">

In this solution, the common and unique information are separated into two classes to avoid duplication.
Given below is another example that contrasts the two situations *before* and *after* applying the pattern.

<img src="abstraction-occurrence/solution2.png" class="center-block">

The general idea can be found in the following class diagram:
<img src="abstraction-occurrence/classdiagram.png" class="center-block">

The `<<Abstraction>>` class should hold all common information,
and the unique information should be kept by the `<<Occurrence>>` class.
Note that ‘Abstraction’ and ‘Occurrence’ are not class names, but roles played by each class.
Think of this diagram as a *meta-model* (i.e. a ‘model of a model’) of the `BookTitle-BookCopy` class diagram given above.

#### Code Example
<tabs>
<tab header="Java">

```java
class MetaBook {
    String name;
    String author;
    String isbn;
    List<BookCopy> copies;
}

class BookCopy {
    MetaBook meta;
    String serial;
}
```

</tab>
<tab header="C++">

```c++
class MetaBook {
    public:
        string name;
        string author;
        string isbn;
        vector<BookCopy> copies;
};

class BookCopy {
    public:
        string serial;
        MetaBook meta;
}
```

</tab>
</tabs>

#### Exercise
<panel header="Question 1" minimized>
<Question has-input>

What is the resulted Java class for the following relationship model using abstraction occurrence pattern?

![](abstraction-occurrence/question.png)

<div slot="hint">

Refer to the code example.

</div>
<div slot="answer">

```java
class TVSeries {
    String seriesName;
    String producer;
    List<Episode> episodes;
}

class Episode {
    TVSeries series;
    int number;
    String title;
    String storySynopsis;
}
```

</div>
</Question>

</panel>
