<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Error Handling :arrow_right: Assertions :arrow_right:</div>

<div id="title">

#### How :two:

</div>

<div id="body">

It is recommended that assertions be used liberally in the code. If required, assertions can be disabled without modifying the code. For example, ‘`java -enableassertions HelloWorld`’ will run `HelloWorld` with assertions enabled while ‘`java -disableassertions HelloWorld`’ will run it without verifying assertions.

<tip-box type="info">

Notes:

1. The assertions mentioned above have a different purpose from the Assertions used in unit testing frameworks such as JUnit. Unit testing assertions are located outside the functional program and used for explicit testing of the program before the system is put into use. The assertions discussed here are located inside the functional program and they verify assumptions while the system is running.
2. Some runtime environments disable assertions by default. This could create a situation where the developer thinks all assertions are being verified as true while in fact they are not being verified at all. Therefore, remember to enable assertions when you run the program if you want them to be in effect.

</tip-box>

</div>

<div id="extras">
<div>

</div>
