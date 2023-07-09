<span id="title">JUnit: Intermediate</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can use intermediate features of JUnit</span>

<div id="body">

{% set junit_ug = "https://junit.org/junit5/docs/current/user-guide/" %}

Given below are some noteworthy JUnit concepts, as per the [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/).

* **Annotations:** In addition to the `@Test` annotation you've seen already, there are many other annotations in JUnit. For example, the `@Disabled` annotation can be used to disable a test temporarily. [[more ...]({{ junit_ug }}#writing-tests-annotations)]

* **Pre/post-test tasks:** In order to allow individual test methods to be executed in isolation and to avoid unexpected side effects due to mutable test instance state, JUnit creates a new instance of each test class before executing each test method. It is possible to supply code that should be run before/after every test method/class (e.g., for setting up the environment required by the tests, or cleaning up things after a test is completed) by using _test instance lifecycle annotations_ such as `@BeforeEach` `@AfterAll`. [[more ...]({{ junit_ug }}#writing-tests-test-instance-lifecycle)]

* **Conditional test execution:** It is possible to configure tests to run only under certain conditions. For example, `@TestOnMac` annotation can be used to specify tests that should run on Mac OS only. [[more ...]({{ junit_ug }}#writing-tests-conditional-execution)]

* **Assumptions:** It is possible to specify assumptions that must hold for a test to be executed (i.e., the test will be skipped if the assumption does not hold). [[more ...]({{ junit_ug }}#writing-tests-assumptions)]

* **Tagging tests:** It is possible to tag tests (e.g., `@Tag("slow")` so that tests can be selected based on tags. [[more ...]({{ junit_ug }}#writing-tests-tagging-and-filtering)]

* **Test execution order:** By default, JUnit executes test classes and methods in a _deterministic but intentionally nonobvious_ order. This ensures that subsequent runs of a test suite execute tests in the same order, thereby allowing for repeatable builds. But it is possible to specify a specific testing order. [[more ...]({{ junit_ug }}#writing-tests-test-execution-order)]

* **Test hierarchies**: Normally, we organize tests into separate test classes. If a more hierarchical structure is needed, the `@Nested` annotation can be used to express the relationship among groups of tests. [[more ...]({{ junit_ug }}#writing-tests-nested)]

* **Repeated tests:** JUnit provides the ability to repeat a test a specified number of times by annotating a method with `@RepeatedTest` and specifying the total number of repetitions desired. [[more ...]({{ junit_ug }}#writing-tests-repeated-tests)]

* **Parameterized tests** make it possible to run a test multiple times with different arguments. The parameter values can be supplied using a variety of ways e.g., an array of values, enums, a csv file, etc. [[more ...]({{ junit_ug }}#writing-tests-parameterized-tests)]

* **Dynamic tests**: The `@TestFactory` annotation can be used to specify factory methods that generate tests dynamically. [[more ...]({{ junit_ug }}#writing-tests-dynamic-tests)]

* **Timeouts:** The `@Timeout` annotation allows one to declare that a test should fail if its execution time exceeds a given duration. [[more ...]({{ junit_ug }}#writing-tests-timeouts)]

* **Parallel execution:** By default, JUnit tests are run sequentially in a single thread. Running tests in parallel — for example, to speed up execution — is available as an opt-in feature. [[more ...]({{ junit_ug }}#writing-tests-parallel-execution)]

* **Extensions:** JUnit supports third-party extensions. The built-in `TempDirectory` extension is used to create and clean up a temporary directory for an individual test or all tests in a test class. [[more ...]({{ junit_ug }}#writing-tests-built-in-extensions)]

</div>

<div id="extras">
</div>
