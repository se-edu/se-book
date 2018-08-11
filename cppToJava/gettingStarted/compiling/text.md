<div id="title">

#### Compliling a Program

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can compile a simple Java program</span>

<div id="body">

To compile the HelloWorld program, open a command console, navigate to the folder containing the file, and run the following command.

{{ icon_terminal }} `javac HelloWorld.java`

If the compilation is successful, you should see a file `HelloWorld.class`. That file contains the byte code for your program. If the compilation is unsuccessful, you will be notified of the <trigger for="pop:compiling-errors">compile-time errors</trigger>.

<popover id="pop:compiling-errors" title="Compile-time errors" placement="top">
  <div slot="content">

_Compile-time errors_ %%(aka _compile errors_)%% occur when you violate the syntax rules of the Java language. For example, parentheses and braces have to come in matching pairs.

Error messages from the compiler usually indicate where in the program the error occurred, and sometimes they can tell you exactly what the error is.

  </div>
</popover>

Notes:
* `javac` is the java compiler that you get when you install the JDK.
* For the above command to work, your console program should be able to find the javac executable (e.g., {{ icon_windows }} the location of the `javac.exe` should be in the `PATH` system variable).

</div>

<div id="extras">
</div>