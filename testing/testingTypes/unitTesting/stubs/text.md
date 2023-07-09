<span id="title">Stubs</span>

<span id="outcomes">{{ icon_outcome }} Can use stubs to isolate an SUT from its dependencies</span>

<div id="body">

**A proper unit test requires the _unit_ to be tested ==in isolation==** so that bugs in the <tooltip content="other code the unit depends on">dependencies</tooltip> cannot influence the test %%i.e. bugs outside of the unit should not affect the unit tests%%.

<box>

{{ icon_example }} If a `Logic` class depends on a `Storage` class, unit testing the `Logic` class requires isolating the `Logic` class from the `Storage` class.

</box>

**_Stubs_ can isolate the <popover content="Software Under Test (in this case, the _unit_ being tested)">SUT</popover> from its dependencies**.

<box type="definition" seamless>
<include src="../../../../common/definitions.md#def-stub" trim />
</box>


<box>

{{ icon_example }} Consider the code below:
```java
class Logic {
    Storage s;

    Logic(Storage s) {
        this.s = s;
    }

    String getName(int index) {
        return "Name: " + s.getName(index);
    }
}
```
```java
interface Storage {
    String getName(int index);
}
```
```java
class DatabaseStorage implements Storage {

    @Override
    public String getName(int index) {
        return readValueFromDatabase(index);
    }

    private String readValueFromDatabase(int index) {
        // retrieve name from the database
    }
}
```
Normally, you would use the `Logic` class as follows (note how the `Logic` object depends on a `DatabaseStorage` object to perform the `getName()` operation):
```java
Logic logic = new Logic(new DatabaseStorage());
String name = logic.getName(23);
```

You can test it like this:
```java
@Test
void getName() {
    Logic logic = new Logic(new DatabaseStorage());
    assertEquals("Name: John", logic.getName(5));
}
```

However, this `logic` object being tested is making use of a `DataBaseStorage` object which means a bug in the `DatabaseStorage` class can affect the test. Therefore, this test is not testing `Logic` _in isolation from its dependencies_ and hence it is not a pure unit test.

Here is a stub class you can use in place of `DatabaseStorage`:
```java
class StorageStub implements Storage {

    @Override
    public String getName(int index) {
        if (index == 5) {
            return "Adam";
        } else {
            throw new UnsupportedOperationException();
        }
    }
}
```
Note how the `StorageStub` has the same interface as `DatabaseStorage`, but is so simple that it is unlikely to contain bugs, and is pre-configured to respond with a hard-coded response, presumably, the correct response `DatabaseStorage` is expected to return for the given test input.

Here is how you can use the stub to write a unit test. This test is not affected by any bugs in the `DatabaseStorage` class and hence is a pure unit test.
```java
@Test
void getName() {
    Logic logic = new Logic(new StorageStub());
    assertEquals("Name: Adam", logic.getName(5));
}
```

</box>

In addition to Stubs, there are other type of replacements you can use during testing, e.g. _Mocks_, _Fakes_, _Dummies_, _Spies_.

</div>

<div id="extras">
  <include src="resources.md" />
  <include src="exercises.md" />
</div>
