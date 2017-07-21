<div id="path">Testing :arrow_right: Testing Types :arrow_right:</div>

<div id="title">

#### Stubs :two:

</div>

<div id="body">

During unit testing, stubs are used in place of collaborating objects in order to isolate the SUT from those objects. Doing so prevents bugs within the collaborating objects from interfering with the test.

**A stub has the same interface as the collaborator it replaces, but its implementation is meant to be so simple that it cannot have any bugs. It mimics the responses of the collaborating object, but only for the inputs used for testing.** That is, it does not know how to respond to any other inputs. These mimicked responses are hard-coded in the stub rather than computed or retrieved from elsewhere, e.g. from a database.

</div>

<div id="extras">
</div>

</div>
