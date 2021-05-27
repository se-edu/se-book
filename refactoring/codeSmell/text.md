<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can recognize some common code smells</span>

<span id="title">Code Smell</span>

<div id="body">

>“Smells,” you say, “and that is supposed to be better than vague aesthetics?”
>Well, yes. We have looked at lots of code, written for projects that span the gamut
>from wildly successful to nearly dead. In doing so, we have learned to look for
>certain structures in the code that suggest—sometimes, scream for—the possibility
>of refactoring.
> - Kent Beck and Martin Fowler, Refactoring

Code smell is a term used to describe the tell-tail signs of bad software and therefore an indication that refactoring is overdue. Similar to design patterns that we learn to recognize and apply in our software, naming and identifying different code smells can help us triage the existing code base and proceed to apply fixes in the form of refactoring.

Given below is a catalog of code smells identified by Martin Fowler. A more comprehensive list is available at <trigger trigger="click" for="modal:refactoring-catalog-codeSmell">code-smell-catalog</trigger>.

<modal header="**Code Smell Catalog**" id="modal:refactoring-catalog-codeSmell">
  <include src="../../common/references.md#code-smell-catalog"/>
</modal>

- Alternative Classes with Different Interfaces
- Comments
- Data Class
- Data Clumps
- Divergent Change
- Duplicated Code
- Feature Envy
- Global Data
- Insider Trading
- Large Class
- Lazy Element
- Long Function
- Long Parameter List
- Loops
- Message Chains
- Middle Man
- Mutable Data
- Mysterious Name
- Primitive Obsession
- Refused Bequest
- Repeated Switches
- Shotgun Surgery
- Speculative Generality
- Temporary Field

### A Practical Example: Comments
Comments are helpful when used to make clarifications and explain the purpose of the code. However, comments are also tricky to write because when done poorly, they can be a source of noise and potentially become code smells. Let's take a look at how we can identify smelly comments that prompt us to refactor.


<box>

#### Comments that describe what a function does

```java
// add expenditure to record
void processInput(int data) {
	//...
}
```
Possible course of action: Rename function
```java
void recordExpenditure(int amount) {
	//...
}
```
</box>

<box>

#### Comments that describe what a block of code does
```java
static Command parseInput(String input) throws InvalidInputException {
	String task = Parser.tokenize(input)[0];
	// check if the user input contains recognized keywords
	boolean hasKeyword = Arrays
        .stream(TaskType.values())
        .map(TaskType::getRep)
        .anyMatch(x -> x.equals(task));
	if (!hasKeyword) {
		return false;
	}
	return Parser.interpret(input);
}
```
Possible course of action: Extract function
```java
private static boolean hasTaskKeyword(String input) {
	String task = Parser.tokenize(input)[0];
	return Arrays
			.stream(TaskType.values())
			.map(TaskType::getRep)
			.anyMatch(x -> x.equals(task));
}

static Command parseInput(String input) throws InvalidInputException {
	if (!hasTaskKeyword(input)) {
		throw new InvalidInputException(input);
	}
	return Parser.interpret(input);
}
```

</box>

<box>

#### Comments that describe assumptions
```java
public ShowCommand(Index index) {
	// note that index must not be null!
	// and index must be larger or equal to zero!
	this.index = index;
}
```
Possible course of action: Use assertions
```java
public ShowCommand(Index index) {
	requireNonNull(index);
	assert index.getZeroBased() >= 0;
	this.index = index;
}
```

</box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>