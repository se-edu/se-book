<div id="title">

#### HelloWorld

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Java HelloWorld program</span>

<div id="body">

In Java, the HelloWorld program looks like this:

```java
public class HelloWorld {

    public static void main(String[] args) {
        // generate some simple output
        System.out.println("Hello, World!");
    }
}
```

For reference, the equivalent C++ code is given below:

```cpp
#include <iostream>
using namespace std;

int main() {
    // generate some simple output
    cout << "Hello, World!";
    return 0;
}
```
This HelloWorld Java program defines one method named main: `public static void main(String[] args)`

`System.out.println` displays results on the screen.


{{ similar }} Some similarities:

* Java programs are made up of class and method definitions, and <tooltip content="A _method_ is a named sequence of statements">methods</tooltip> are made up of <trigger for="pop:helloWorld-statement">statements</trigger>.
* Java is “case-sensitive”, which means `SYSTEM` is different from `System`.
* `public` is an _access modifier_ that indicates the method is accessible from outside this class. Similarly, `private` access modifier indicates that a method/attribute is not accessible outside the class.
* `static` indicates this method is defined as a class-level member. Do not worry if you don’t know what that means. It will be explained later.
* `void` indicates that the method does not return anything.
* The name and format of the `main` method is special as it is the method that Java executes when you run a Java program.
* A class is a collection of methods. This program defines a class named `HelloWorld`.
* Java uses squiggly braces (`{` and `}`) to group things together.
* The line starting with `//` is a comment. You can use `//` for single line comments and `/* ... */` for multi-line comments in Java code.

<popover id="pop:helloWorld-statement" title="Statements" placement="top">
  <div slot="content">

A statement is a line of code that performs a basic operation. In the HelloWorld program, this line is a print statement that displays a message on the screen:

`System.out.println("Hello, World!");`
  </div>
</popover>

{{ different }} Some differences:

* Java use the term _method_ instead of _function_. In particular, Java doesn’t have  stand-alone functions. Every method should belong to a class. The `main` method will not work unless it is inside the `HelloWorld` class.
* A Java class definition does not end with a semicolon, but most Java statements do.
* In _most_ cases (i.e., there are exceptions), the name of the class has to match the name of the file it is in, so this class has to be in a file named `HelloWorld.java`.
* There is no need for the HelloWorld code to have something like `#include <iostream>`. The library files needed by the HelloWorld code is available by default without having to "include" them explicitly.
* There is no need to `return 0` at the end of the main method to indicate the execution was successful. It is considered as a successful execution unless an error is signalled specifically.

</div>

<div id="extras">
</div>