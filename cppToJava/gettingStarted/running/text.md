<div id="title">

#### Running a Program

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can run a simple Java program</span>

<div id="body">

To run the HelloWorld program, in a command console, run the following command from the folder containing `HelloWorld.class` file.

{{ icon_terminal }} `java HelloWorld`

Notes:
* `java` in the command above refers to the Java interpreter installed in your computer.
* Similar to `javac`, your console should be able to find the java executable.


When you run a Java program, you can encounter a <tooltip content="so-called because it does not appear until after the program has started running">run-time error</tooltip>. These errors are also called "exceptions" because they usually indicate that something exceptional (and bad) has happened. When a run-time error occurs, the interpreter displays an error message that explains what happened and where.

<tip-box>

{{ icon_example }} For example, modify the HelloWorld code to include the following line, compile it again, and run it.

```java
System.out.println(5/0);
```

You should get a message like this:
```sh
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Hello.main(Hello.java:5)
```

</tip-box>


**Integrated Development Environments (IDEs)** can automate the intermediate step of compiling. They usually have a <span style="color:green">{{ fas_play_circle }}</span> _Run_ button which compiles the code first and then runs it.

Example IDEs:
* Intellij IDEA
* Eclipse
* NetBeans

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>