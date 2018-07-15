<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Abstraction Occurrence design pattern</span>

<div id="body">

**Context**

There is a group of similar entities that appears to be ‘occurrences’ (or ‘copies’) of the same thing, sharing lots of common information, but also differing in significant ways.

<tip-box>

{{ icon_example }} In a library, there can be multiple copies of same book title. Each copy shares common information such as book title, author, ISBN etc. However, there are also significant differences like purchase date and barcode number (assumed to be unique for each copy of the book).

Other examples:

* Episodes of the same TV series
* Stock items of the same product model (e.g. TV sets of the same model).

</tip-box>

**Problem**

Representing the objects mentioned previously as a single class would be problematic because it results in duplication of data which can lead to inconsistencies in data (if some of the duplicates are not updated consistently).

<tip-box>

{{ icon_example }} Take for example the problem of representing books in a library. Assume that there could be multiple copies of the same title, bearing the same ISBN number, but different serial numbers.

<img src="{{baseUrl}}/designPatterns/abstractionOccurrence/what/images/book.png" height="200" />
<p/>

The above solution requires common information to be duplicated by all instances. This will not only waste storage space, but also creates a consistency problem. Suppose that after creating several copies of the same title, the librarian realized that the author name was wrongly spelt. To correct this mistake, the system needs to go through every copy of the same title to make the correction. Also, if a new copy of the title is added later on, the librarian (or the system) has to make sure that all information entered is the same as the existing copies to avoid inconsistency.

</tip-box>

**Anti-pattern**



<tip-box>

{{ icon_example }} Refer to the same Library example given above.

<img src="{{baseUrl}}/designPatterns/abstractionOccurrence/what/images/bookFriends.png" height="240" />
<p/>

The design above segregates the common and unique information into a class hierarchy. Each book title is represented by a separate class with common data (i.e. Name, Author, ISBN) hard-coded in the class itself. This solution is problematic because each book title is represented as a class, resulting in thousands of classes (one for each title). Every time the library buys new books, the source code of the system will have to be updated with new classes.

</tip-box>

**Solution**

Let a copy of an entity (e.g. a copy of a book)be represented by two objects instead of one, separating the common and unique information into two classes to avoid duplication.

<tip-box>

{{ icon_example }} Given below is how the pattern is applied to the Library example:

<img src="{{baseUrl}}/designPatterns/abstractionOccurrence/what/images/bookTitleBookCopy.png" height="260" />
<p/>

{{ icon_example }} Here's a more generic example:

<img src="{{baseUrl}}/designPatterns/abstractionOccurrence/what/images/beforeAfter.png" height="370" />
<p/>

</tip-box>

The general solution:

<img src="{{baseUrl}}/designPatterns/abstractionOccurrence/what/images/abstractionOccurrence.png" height="40" />
<p/>

The `<< Abstraction >>` class should hold all common information, and the unique information should be kept by the `<< Occurrence >>` class. Note that ‘Abstraction’ and ‘Occurrence’ are not class names, but roles played by each class. Think of this diagram as a _meta-model_ (i.e. a ‘model of a model’) of the `BookTitle-BookCopy` class diagram given above.

</div>

<div id="extras">

<include src="exercises.md" />

</div>