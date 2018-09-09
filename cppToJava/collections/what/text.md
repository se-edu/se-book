<div id="title">

#### The Collections Framework

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Collections framework</span>

<div id="body">

This section uses extracts from the {{ oracle }}, with some adaptations.


**A _collection_ — sometimes called a _container_ — is simply an object that groups multiple elements into a single unit.** Collections are used to store, retrieve, manipulate, and communicate aggregate data.

<box>

{{ icon_example }} Typically, collections represent data items that form a natural group, such as a poker hand (a collection of cards), a mail folder (a collection of letters), or a telephone directory (a mapping of names to phone numbers).

</box>

**The collections framework is a unified architecture for representing and manipulating collections.** It contains the following:

* **Interfaces**: These are abstract data types that represent collections. Interfaces allow collections to be manipulated independently of the details of their representation.<br>
  %%{{ icon_example }} Example: the `List<E>` interface can be used to manipulate list-like collections which may be implemented in different ways such as `ArrayList<E>` or `LinkedList<E>`.%%<br>

* **Implementations**: These are the concrete implementations of the collection interfaces. In essence, they are reusable data structures.<br>
  %%{{ icon_example }} Example: the `ArrayList<E>` class implements the `List<E>` interface while the `HashMap<K, V>` class implements the `Map<K, V>` interface.%%<br>

* **Algorithms**: These are the methods that perform useful computations, such as _searching_ and _sorting_, on objects that implement collection interfaces. The algorithms are said to be polymorphic: that is, the same method can be used on many different implementations of the appropriate collection interface.<br>
  %%{{ icon_example }} Example: the `sort(List<E>)` method can sort a collection that implements the `List<E>` interface.%%

{{ similar }} **A well-known example of collections frameworks is the C++ _Standard Template Library (STL)_**. {{ different }} Although both are collections frameworks and the syntax look similar, note that there are important philosophical and implementation differences between the two.

The following list describes the core collection interfaces:

* **`Collection`** — the root of the collection hierarchy. A collection represents a group of objects known as its elements. The Collection interface is the least common denominator that all collections implement and is used to pass collections around and to manipulate them when maximum generality is desired. Some types of collections allow duplicate elements, and others do not. Some are ordered and others are unordered. The Java platform doesn't provide any direct implementations of this interface but provides implementations of more specific subinterfaces, such as `Set` and `List`. %%Also see the [`Collection` API]({{ java_api }}/java/util/Collection.html).%%
* **`Set`** — a collection that cannot contain duplicate elements. This interface models the mathematical set abstraction and is used to represent sets, such as the cards comprising a poker hand, the courses making up a student's schedule, or the processes running on a machine. %%Also see the [`Set` API]({{ java_api }}/java/util/Set.html).%%
* **`List`** — an ordered collection (sometimes called a _sequence_). `List`s can contain duplicate elements. The user of a `List` generally has precise control over where in the list each element is inserted and can access elements by their integer index (position). %%Also see the [`List` API]({{ java_api }}/java/util/List.html).%%
* **`Queue`** — a collection used to hold multiple elements prior to processing. Besides basic `Collection` operations, a `Queue` provides additional insertion, extraction, and inspection operations. %%Also see the [`Queue` API]({{ java_api }}/java/util/Queue.html).%%
* **`Map`** — an object that maps keys to values. A `Map` cannot contain duplicate keys; each key can map to at most one value. %%Also see the [`Map` API]({{ java_api }}/java/util/Map.html).%%

* Others: `Deque`, `SortedSet`, `SortedMap`

</div>

<div id="extras">
</div>