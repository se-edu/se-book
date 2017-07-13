<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Testing :arrow_right: Test Automation :arrow_right:</div>

<div id="title">

#### Automated Testing of Text UIs :one:

</div>

<div id="body">

A simple way to test a text UI is using input/output re-direction.  Let us assume we are testing a program ‘RouteStore’ which has a text UI. First, we store the test input in the text file ‘input.txt’. Similarly, we store the output we expect from the SUT to another text file ‘expected.txt’. Now, we run the program as:

```
java RouteStore < input.txt > output.txt
// or
RouteStore.exe < input.txt > output.txt
```

The above redirects the text in ‘input.txt’ as the input to ‘RouteStore’ and similarly, redirects the output of RouteStore to a text file ‘output.txt’. Note that this does not require any code changes to RouteStore.

<panel header="**The ‘>’ operator and the ‘<’ operator. :zero:**" alt="Alternative Header">

A command line program written in the usual way (i.e., the way you are used to writing them during the first year programming modules) takes input from keyboard and outputs to the console. That is because those two are default input and output streams, respectively. But you can change that behavior using ‘` < `’ and ‘` > `’ operators. For example, if you run `TextBuddy` in the DOS prompt, the output will be shown in the console. But if you run it like this

```
TextBuddy > output.txt (or java TextBuddy > output.txt)
```

the Operating System then creates a file ‘output.txt’ and stores the output in that file instead of displaying it in the console. Program output using `System.out.println` (in Java) and `cout` (in C++) is directed to the console by default. When you add ‘` > output.txt `’, the OS redirects the output to ‘output.txt’ instead. No file I/O coding is required. Similarly, adding ‘` < input.txt `’ (or any other filename) makes the OS redirect the contents of the file as input to the program.

The link below explains how Windows does it:
http://technet.microsoft.com/en-us/library/bb490982.aspx

</panel>

<p/>

All we have to do now is to compare ‘output.txt’ with ‘expected.txt’. This can be done using a utility such as Windows FC (i.e. File Compare) command or a GUI tool such as Winmerge. For example, we can run the following two commands.

```
java RouteStore < input.txt > output.txt
FC output.txt expected.txt
```

Note that the above technique is only suitable when testing text UIs, and only if the exact output is known.

</div>

</div>
