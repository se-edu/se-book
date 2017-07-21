<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Test Case Design :arrow_right: Equivalence Partitions :arrow_right:</div>

<div id="title">

#### Intermediate :two:

</div>

<div id="body">

When deciding EPs of OOP methods, we need to identify EPs of all data participants  that can potentially influence the behaviour of the method, such as,

* the target object of the operation call
*	input parameters of the operation call
*	other data/objects accessed by the operation such as global variables. This category may not be applicable if using the black box approach (because the test case designer using the black box approach will not know how the method is implemented)

<tip-box>

Example:

Consider the push operation from a DataStack class.

* Operation: `push(Object o): boolean`
* Description: Throws `MutabilityException` if the global flag `FREEZE==true`

  * Else, throws `InvalidValueException` if `o==null`.
  * Else, returns `false` if the stack is full.
  * Else, puts `o` at the top of the `DataStack` and returns `true`.

* Here are the equivalence partitions for the push operation.

  * `DataStack` object: [full] [not full]
  * `o`: [null] [not null]
  * `FREEZE`: [true][false]

</tip-box>

<tip-box>

Example:

Consider the Minesweeper system that was explored previously. What are the EPs for the `newGame()` operation of the `Logic` component?

As `newGame()` does not have any parameters, the only obvious participant is the `Logic` object itself.

Note that if the glass-box or the grey-box approach is used, other associated objects that are involved in the operation might also be included as participants. For example, Minefield object can be considered as another participant of the `newGame()` operation. Here, the black-box approach is assumed.

Next, let us identify equivalence partitions for each participant. Will the `newGame` operation behave differently for different `Logic` objects? If yes, how will it differ? In this case, yes, it might behave differently based on the game state. Therefore, the equivalence partitions are:

* `PRE_GAME` (before the game starts, minefield does not exist yet)
* `READY` (a new minefield has been created and waiting for player’s first move)
* `IN_PLAY` (the current minefield is already in use)
* `WON`, `LOST` (let us assume the `newGame` behaves the same way for these two values)

</tip-box>

<tip-box>

Example:

Consider the Logic component of the Minesweeper application. What are the EPs for the `markCellAt(int x, int y)` operation?. The partitions in **bold** represent valid inputs.

* Logic: PRE_GAME, **READY**, **IN_PLAY**, WON, LOST
* x: [MIN_INT..-1] **[0..(W-1)]** [W..MAX_INT] (we assume a minefield size of WxH)
*	y: [MIN_INT..-1] **[0..(H-1)]** [H..MAX_INT]
* Cell at (x,y): **HIDDEN**, MARKED, CLEARED

A test case for the push operation can be a combination of the equivalence partitions. Given below is such a test case.

* id: DataStack_Push_001
* description: checks whether pushing onto a full stack works correctly
* input: ds is full, o!=null, FREEZE==false
* expected output: returns false, ds remains unchanged

</tip-box>

Knowledge of how the SUT behaves is used when deriving equivalence partitions for a given data participant. The table below illustrates some examples.

<table class="table">
  <tr>
    <th>Specification</th>
    <th>Equivalence partitions</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>isValidFlag(String s): boolean</li>
        <li>Returns true if s is one of [“F”, “T”, “D”]. The comparison is case-sensitive.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>[“F”] [“T”] [“D”] [“f”, “t”, “d”] [any other string][null]</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>squareRoot(String s): int</li>
        <li>Pre-conditions: s represents a positive integer</li>
        <li>Returns the square root of s if the square root is an integer; returns 0 otherwise.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>[s is not a valid number] [s is a negative integer] [s has an integer square root] [s does not have an integer square root]</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>isPrimeNumber(int i): boolean</li>
        <li>Returns true if i is a prime number</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>[prime numbers] [non-prime numbers]</li>
        <li>* there are too many prime numbers to consider each one as a separate equivalence partition</li>
      </ul>
    </td>
  </tr>
</table>

Note that the EP technique is merely a heuristic and not an exact science, especially when applied manually (as opposed to using an automated program analysis tool to derive EPs). The partitions derived depend on how one ‘speculates’ the SUT to behave internally. Applying EP under a glass-box or gray-box approach can yield more precise partitions.

</div>

<div id="extras">
<div>

</div>
