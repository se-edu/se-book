<span id="title">JUnit: Basic</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use simple JUnit tests</span>

<div id="body">

When writing JUnit tests for a class `Foo`, the common practice is to create a `FooTest` class, which will contain various test methods.

<box>

{{ icon_example }} Suppose we want to write tests for the `IntPair` class below.

```java
public class IntPair {
    int first;
    int second;

    public IntPair(int first, int second) {
        this.first = first;
        this.second = second;
    }

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
```java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

public class IntPairTest {


    @Test
    public void testStringConversion() {
        assertEquals("4,7", new IntPair(4, 7).toString());
    }

    @Test
    public void intDivision_nonZeroDivisor_success() throws Exception {
        assertEquals(2, new IntPair(4, 2).intDivision());
        assertEquals(0, new IntPair(1, 2).intDivision());
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
}
```
</box>

Notes:
* Each test method is marked with a `@Test` annotation.
* Tests use `Assert.assertEquals(expected, actual)` methods to compare the expected output with the actual output. If they do not match, the test will fail. JUnit comes with other similar methods such as `Assert.assertNull` and `Assert.assertTrue`.
* Java code normally use camelCase for method names e.g., `testStringConversion` but when writing test methods, sometimes another convention is used: `whatIsBeingTested_descriptionOfTestInputs_expectedOutcome` e.g., `intDivision_zeroDivisor_exceptionThrown`
* There are [several ways to verify the code throws the correct exception](https://howtodoinjava.com/junit5/expected-exception-example/). The third test method in the example above shows one of the simpler methods. If the exception is thrown, it will be caught and further verified inside the `catch` block. But if it is not thrown as expected, the test will reach `Assert.fail()` line and will fail as a result.
* The easiest way to run JUnit tests is to do it via the IDE. For example, in Intellij you can right-click the folder containing test classes and choose 'Run all tests...'

<div v-closeable alt="Junit tutorial video" class="non-printable">

<box>

**{{ icon_video }} Adding JUnit 5 to your IntelliJ Project** <sub>-- by Kevintroko@YouTube</sub>

@[youtube](Z8V7rnvDeB4)

</box>
</div>


</div>

<div id="extras">
  <include src="resources.md" />
</div>