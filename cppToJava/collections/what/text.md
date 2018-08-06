<div id="title">

#### The Collections Framework

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Collections framework</span>

<div id="body">

Given below is an extract from the {{ oracle }}, with slight adaptations.

<blockquote>

**A _collection_ — sometimes called a _container_ — is simply an object that groups multiple elements into a single unit.** Collections are used to store, retrieve, manipulate, and communicate aggregate data. Typically, they represent data items that form a natural group, such as a poker hand (a collection of cards), a mail folder (a collection of letters), or a telephone directory (a mapping of names to phone numbers). If you have used the Java programming language — or just about any other programming language — you are already familiar with collections.

**A collections framework is a unified architecture for representing and manipulating collections.** All collections frameworks contain the following:

* **Interfaces**: These are abstract data types that represent collections. Interfaces allow collections to be manipulated independently of the details of their representation. In object-oriented languages, interfaces generally form a hierarchy.
* **Implementations**: These are the concrete implementations of the collection interfaces. In essence, they are reusable data structures.
* **Algorithms**: These are the methods that perform useful computations, such as searching and sorting, on objects that implement collection interfaces. The algorithms are said to be polymorphic: that is, the same method can be used on many different implementations of the appropriate collection interface. In essence, algorithms are reusable functionality.

Apart from the Java Collections Framework, **the best-known examples of collections frameworks are the C++ Standard Template Library (STL)** and Smalltalk's collection hierarchy.

The following list describes the core collection interfaces:

* `Collection` — the root of the collection hierarchy. A collection represents a group of objects known as its elements. The Collection interface is the least common denominator that all collections implement and is used to pass collections around and to manipulate them when maximum generality is desired. Some types of collections allow duplicate elements, and others do not. Some are ordered and others are unordered. The Java platform doesn't provide any direct implementations of this interface but provides implementations of more specific subinterfaces, such as Set and List. Also see The Collection Interface section.
* `Set` — a collection that cannot contain duplicate elements. This interface models the mathematical set abstraction and is used to represent sets, such as the cards comprising a poker hand, the courses making up a student's schedule, or the processes running on a machine. See also The Set Interface section.
* `List` — an ordered collection (sometimes called a sequence). Lists can contain duplicate elements. The user of a List generally has precise control over where in the list each element is inserted and can access elements by their integer index (position). If you've used Vector, you're familiar with the general flavor of List. Also see The List Interface section.
* `Queue` — a collection used to hold multiple elements prior to processing. Besides basic Collection operations, a Queue provides additional insertion, extraction, and inspection operations.
* `Map` — an object that maps keys to values. A Map cannot contain duplicate keys; each key can map to at most one value. If you've used Hashtable, you're already familiar with the basics of Map. Also see The Map Interface section.

* Others: `Deque`, `SortedSet`, `SortedMap`


</blockquote>

</div>

<div id="extras">
</div>