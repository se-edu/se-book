<panel type="secondary" header="###  <small><small>{{ icon_important }} [Exercise] Run HelloWorld</small></small>" expanded >

**A. Install Java 11** in your computer, if you haven't done so already. Ensure the installation is correct, as follows.<br>
{{ icon_tip }} If you are using a Mac, the first part of [this video](https://www.youtube.com/watch?v=09NLTY3izM8) explains how to install and verify Java on a Mac.

   1. Open a command prompt.
   1. Run the command `java -version`. Confirm that the output indicates that you have Java 11. Sample output:
      ```{highlight-lines="1[14:27]" .no-line-numbers}
      C:\Users\john>java -version
      java version "11.0.11" 2021-04-20 LTS
      Java(TM) SE Runtime Environment 18.9 (build ...
      Java HotSpot(TM) 64-Bit Server VM 18.9 (build ...
      ```
   1. Run the command `javac` and ensure it results in a help message.
      If it outputs an error message such as `javac is not recognized as internal or external command`, you need to configure the `PATH` variable of your OS so that the OS know where your `javac` executable is.

**B. Write, compile and run a small Java program** %%(e.g., a HelloWorld program)%% in your computer. You can use any code editor to write the program but use the command prompt to compile and run the program. Here are suggested steps:
   1. Open notepad (or any other text editor)
   1. Copy paste this code into the editor.
      ```java
      public class HelloWorld {

          public static void main(String[] args) {
              System.out.println("Hello, World!");
          }
      }
      ```
   1. Save the file in an empty folder as `HelloWorld.java` (ensure there the case match exactly and there is no `.txt` at the end).
   1. Open a command prompt, and navigate to the folder where you saved the file.
      ```{.no-line-numbers}
      c:> cd my-java-code
      c:\my-java-code>
      ```
   1. Run the command `javac HelloWorld.java`. Ensure there are no compile errors.
      Note how a file called `HelloWorld.class` has been created in that folder.
      ```{highlight-lines="1[16:37]" .no-line-numbers}
      c:\my-java-code>javac HelloWorld.java
      ```
   1. Run the command `java HelloWorld` (no `.java` at the end).
      The output should be `Hello, World!`.
      ```{highlight-lines="1[16:31]" .no-line-numbers}
      c:\my-java-code>java HelloWorld
      Hello, World!
      ```

**C. Modify the code** to print something else, save, compile, and run the program again.

</panel>
