<div id="title">

#### What :one:

</div>

<div id="body">

**_Unit testing_ : testing individual units (methods, classes, subsystems, ...) to ensure each piece works correctly.** 

**A proper unit test requires the _unit_ being tested ==in isolation==.** Doing so prevents bugs within the <tooltip content="code the unit depends on">dependencies</tooltip> from influencing with the test %%&nbsp;i.e. bugs outside of the unit should not affect the unit tests%%.

<tip-box> 

:package: If a `Person` class depends on a `Tag` class and an `Address` class, unit testing the `Person` class requires isolating the `Person` class from the `Tag` class and the `Address` class.

</tip-box>

**_Stubs_ can isolate the <popover content="Software Under Test (in this case, the _unit_ being tested)">SUT</popover> from its dependencies**. A stub has the same interface as the collaborator it replaces, but its implementation is meant to be so simple that it cannot have any bugs. It mimics the responses of the collaborating object, but only for the inputs used for testing. That is, it does not know how to respond to any other inputs. Typically, these mimicked responses are hard-coded in the stub rather than computed or retrieved from elsewhere, e.g. from a database.

In addition to Stubs, there are other type of replacements you can use during testing. E.g. _Mocks_, _Fakes_, _Dummies_, _Spies_.

</div>

<div id="extras">
  <include src="resources.md" />
</div>

</div>
