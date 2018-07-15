<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can semi-automate testing of CLIs</span>

<div id="title">

#### Automated Testing of CLI Apps

</div>

<div id="body">

**A simple way to semi-automate testing of a CLI(Command Line Interface) app is by using input/output re-direction.**

* First, we feed the app with a sequence of test inputs that is stored in a file while redirecting the output to another file.
* Next, we compare the actual output file with another file containing the expected output.

Let us assume we are testing a CLI app called `AddressBook`. Here are the detailed steps:

1. Store the test input in the text file `input.txt`. 
 
   <panel header="%%{{ icon_example }} Example `input.txt`%%" type="seamless">
   
   ```
   add Valid Name p/12345 valid@email.butNoPrefix
   add Valid Name 12345 e/valid@email.butPhonePrefixMissing
   ```
   
   </panel>

1. Store the output we expect from the SUT in another text file `expected.txt`. 
   
   <panel header="%%{{ icon_example }} Example `expected.txt`%%" type="seamless">
   
   ```
   Command: || [add Valid Name p/12345 valid@email.butNoPrefix]
   Invalid command format: add 
   
   Command: || [add Valid Name 12345 e/valid@email.butPhonePrefixMissing]
   Invalid command format: add 
   ```
   </panel>
   
1. Run the program as given below, which will redirect the text in `input.txt` as the input to `AddressBook` and similarly, will redirect the output of AddressBook to a text file `output.txt`. %%Note that this does not require any code changes to `AddressBook`.%%

   ```sh
   java AddressBook < input.txt > output.txt
   ```
   
   * :bulb: The way to run a CLI program differs based on the language.<br>
     e.g., In Python, assuming the code is in `AddressBook.py` file, use the command<br>
      `python AddressBook.py < input.txt > output.txt`
   
   * :bulb: If you are using Windows, use a normal command window to run the app, not a Power Shell window.
   
   <panel header="" minimized >
   <span slot="header" class="card-title"><md>More on the `>` operator and the `<` operator. {{ icon_tangential }}</md></span>
   
   A CLI program takes input from the keyboard and outputs to the console. That is because those two are default input and output streams, respectively. But you can change that behavior using ` < ` and ` > ` operators. For example, if you run `AddressBook` in a command window, the output will be shown in the console, but if you run it like this,
   
   ```sh
   java AddressBook > output.txt 
   ```
   
   the Operating System then creates a file `output.txt` and stores the output in that file instead of displaying it in the console. No file I/O coding is required. Similarly, adding ` < input.txt ` (or any other filename) makes the OS redirect the contents of the file as input to the program, as if the user typed the content of the file one line at a time.
   
   <tip-box>
   
   {{ icon_resource }} Resources:
   * [Using command redirection operators in Windows](http://technet.microsoft.com/en-us/library/bb490982.aspx)
   
   </tip-box>
   
   </panel><p/>

1. Next, we compare `output.txt` with the `expected.txt`. This can be done using a utility such as Windows `FC` (i.e. File Compare) command, Unix `diff` command, or a GUI tool such as _WinMerge_. 

   ```
   FC output.txt expected.txt
   ```

Note that the above technique is only suitable when testing CLI apps, and only if the exact output can be predetermined. %%If the output varies from one run to the other (e.g. it contains a time stamp), this technique will not work. In those cases we need more sophisticated ways of automating tests.%%

<include src="../../../common/popOvers.md#cli" />

</div>

<div id="extras">
</div>