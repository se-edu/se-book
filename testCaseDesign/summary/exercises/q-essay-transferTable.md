<panel header="{{ icon_Q_A }} transferTable">
<question has-input="true">

Given below is an operation description taken from a restaurant booking system. Use equivalence partitions and boundary value analysis technique to design a set of test cases for it.

* boolean transferTable (Booking b, Table t)
* Description:  Used to transfer a Booking b to Table t, if t has enough room.
* Preconditions:  t has room for b , b.getTable() != t
* Postconditions:  b.getTable() == t

<div slot="answer">

**Equivalence partitions**

* Booking:

  * Invalid: null, not null and b.getTable==t
  * Valid: not null and b.getTable != t

* Table:

  * Invalid: null, not vacant, vacant but doesn’t have enough room,
  * Valid: vacant and has enough room.

**Boundary values:**

* Booking:

  * Invalid: null, not null and b.getTable==t
  * Valid:not null and b.getTable != t

* Table:

  * Invalid: null, not vacant, (booking size == table size + 1)
  * Valid: (booking size == table size), (booking size == table size-1)

**Test cases:**

| Test case   | Booking                     | Table                            |
| :---------: | :-------------------------: | :------------------------------: |
| 1           | null                        | Any valid                        |
| 2           | not null and b.getTable==t  | Any valid                        |
| 3           | Any valid                   | null                             |
| 4           | Any valid                   | not vacant                       |
| 5           | Any valid                   | (booking size == table size + 1) |
| 6           | Any valid                   | (booking size == table size)     |
| 7           | Any valid                   | (booking size == table size - 1) |

Note: We can use Bookings of different sizes for different test cases so that we increase the chance of finding bugs. If there is a minimum and maximum booking size, we should include them in those test cases.

</div>
</question>
</panel>
