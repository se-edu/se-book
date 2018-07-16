<panel header="{{ icon_Q_A }} Test cases for `TriangleDetector`">
<question has-input="true">

Given below is the sample output from a text-based program `TriangleDetector` ithat determines whether the three input numbers make up the three sides of a valid triangle. List test cases you would use to test this software. Two sample test cases are given below.

```
C:\> java TriangleDetector
Enter side 1: 34
Enter side 2: 34
Enter side 3: 32
Can this be a triangle?:  Yes
Enter side 1:
```

Sample test cases,

```
34,34,34: Yes
0, any valid, any valid: No
```

<div slot="answer">

In addition to obvious test cases such as

* sum of two sides == third,
* sum of two sides < third ...

We may also devise some interesting test cases such as the ones depicted below.

Note that their applicability depends on the context in which the software is operating.

* Non-integer number, negative numbers, `0`, numbers formatted differently (e.g. `13F`), very large numbers (e.g. `MAX_INT`), numbers with many decimal places, empty string, ...
* Check many triangles one after the other (will the system run out of memory?)
* <kbd>Backspace</kbd>, <kbd>tab</kbd>, <kbd>CTRL+C</kbd> , …
* Introduce a long delay between entering data (will the program be affected by, say the screensaver?), minimize and restore window during the operation, hibernate the system in the middle of a calculation, start with invalid inputs (the system may perform error handling differently for the very first test case), …
* Test on different locale.

The main point to note is how difficult it is to test exhaustively, even on a trivial system.

</div>
</question>
</panel>
