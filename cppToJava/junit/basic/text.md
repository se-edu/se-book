<span id="title">JUnit: Basic</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use simple JUnit tests</span>

<div id="body">

When writing JUnit tests for a class `Foo`, the common practice is to create a `FooTest` class, which will contain various test methods for testing methods of the `Foo` class.

<box>

{{ icon_example }} Suppose we want to write tests for the `IntPair` class below.

```java{highlight-lines="1['IntPair']}
public class IntPair {
    int first;
    int second;

    public IntPair(int first, int second) {
        this.first = first;
        this.second = second;
    }

    /**
     * Returns the result of applying integer division first/second.
     * @throws Exception if second is 0
     */
    public int intDivision() throws Exception {
        if (second == 0){
            throw new Exception("Divisor is zero");
        }
        return first/second;
    }

    @Override
    public String toString() {
        return first + "," + second;
    }
}
```
Here's a `IntPairTest` class to match (using JUnit 5).
```java{highlight-lines="6['IntPairTest']}
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

public class IntPairTest {

    @Test
    public void intDivision_nonZeroDivisor_success() throws Exception {
        // normal division results in an integer answer 2
        assertEquals(2, new IntPair(4, 2).intDivision());

        // normal division results in a decimal answer 1.9
        assertEquals(1, new IntPair(19, 10).intDivision());

        // dividend is zero but devisor is not
        assertEquals(0, new IntPair(0, 5).intDivision());
    }

    @Test
    public void intDivision_zeroDivisor_exceptionThrown() {
        try {
            assertEquals(0, new IntPair(1, 0).intDivision());
            fail(); // the test should not reach this line
        } catch (Exception e) {
            assertEquals("Divisor is zero", e.getMessage());
        }
    }

    @Test
    public void testStringConversion() {
        assertEquals("4,7", new IntPair(4, 7).toString());
    }
}
```
</box>

* Note how each test method is marked with a `@Test` annotation.
* Tests use `assertEquals(expected, actual)` methods (provided by JUnit) to compare the expected output with the actual output. If they do not match, the test will fail.<br>
  JUnit comes with other similar methods such as `assertNull`, `assertNotNull`, `assertTrue`, `assertFalse` etc. [[more ...](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html)]
* Java code normally use camelCase for method names e.g., `testStringConversion` but when writing test methods, sometimes another convention is used:<br>
  `unitBeingTested_descriptionOfTestInputs_expectedOutcome`<br>
  e.g., `intDivision_zeroDivisor_exceptionThrown`
* There are [several ways to verify the code throws the correct exception](https://howtodoinjava.com/junit5/expected-exception-example/). The second test method in the example above shows one of the simpler methods. If the exception is thrown, it will be caught and further verified inside the `catch` block. But if it is not thrown as expected, the test will reach `fail()` line and will fail as a result.


**What to test for when writing tests?** While _test case design techniques_ is a separate topic altogether, it should be noted that the goal of these tests is to catch bugs in the code. Therefore, test using inputs that can trigger a potentially buggy path in the code. Another way to approach this is, to write tests such that if a future developer modified the method to unintentionally introduce a bug into it, at least one of the test should fail (thus alerting that developer to the mistake immediately).

<box>

{{ icon_example }} In the example above, the `IntPairTest` class tests the `IntPair#intDivision(int, int)` method using several inputs, some even seemingly attempting to 'trick' the method into producing a wrong result. If the method still produces the correct output for such 'tricky' inputs (as well as 'normal' outputs), we can have a higher confidence on the method being correctly implemented.<br>
 However, also note that the current test cases do not (but probably should) test for the inputs (`0, 0`), to confirm that it throws the expected exception.

</box>
</div>


</div>

<div id="extras">
  <include src="resources.md" />
</div>
