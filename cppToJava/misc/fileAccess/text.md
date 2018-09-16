<div id="title">

#### File Access

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can read/write text files using Java</span>

<div id="body">

**You can use the [`java.io.File`]({{ java_api }}/java/io/File.html) class to represent a file object**. It can be used to access properties of the file object.

<box>

{{ icon_example }} This code creates a `File` object to represent a file `fruits.txt` that exists in the `data` directory ==relative to the current working directory== and uses that object to print some properties of the file.

```java
import java.io.File;

public class FileClassDemo {

    public static void main(String[] args) {
        File f = new File("data/fruits.txt");
        System.out.println("full path: " + f.getAbsolutePath());
        System.out.println("file exists?: " + f.exists());
        System.out.println("is Directory?: " + f.isDirectory());
    }

}
```
{{ icon_output }}
```
full path: C:\sample-code\data\fruits.txt
file exists?: true
is Directory?: false
```
</box>

{{ icon_info }} If you use backslash to specify the file path in a Windows Computer, you need to use an additional backslash as an escape character because the backslash by itself has a special meaning. e.g., use {{ icon_tick_green }}`"data\\fruits.txt"`, not {{ icon_x_red }} `"data\fruits.txt"`. Alternatively, you can use forward slash {{ icon_tick_green }} `"data/fruits.txt"` (even on Windows).

**You can read from a file using a `Scanner` object that uses a `File` object as the _source_ of data.**

<box>

{{ icon_example }} This code uses a `Scanner` object to read (and print) contents of a text file line-by-line:

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileReadingDemo {

    private static void printFileContents(String filePath) throws FileNotFoundException {
        File f = new File(filePath); // create a File for the given file path
        Scanner s = new Scanner(f); // create a Scanner using the File as the source
        while (s.hasNext()) {
            System.out.println(s.nextLine());
        }
    }

    public static void main(String[] args) {
        try {
            printFileContents("data/fruits.txt");
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
    }

}
```
{{ icon_output }} i.e., contents of the `data/fruits.txt`
```
5 Apples
3 Bananas
6 Cherries
```
</box>

**You can use a [`java.io.FileWriter`]({{ java_api }}/java/io/FileWriter.html) object to write to a file.**

<box>

{{ icon_example }} The `writeToFile` method below uses a `FileWrite` object to write to a file. The method is being used to write two lines to the file `temp/lines.txt`.

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileWritingDemo {

    private static void writeToFile(String filePath, String textToAdd) throws IOException {
        FileWriter fw = new FileWriter(filePath);
        fw.write(textToAdd);
        fw.close();
    }

    public static void main(String[] args) {
        String file2 = "temp/lines.txt";
        try {
            writeToFile(file2, "first line" + System.lineSeparator() + "second line");
        } catch (IOException e) {
            System.out.println("Something went wrong: " + e.getMessage());
        }
    }

}
```
{{ icon_output }} Contents of the `temp/lines.txt`:
```
first line
second line
```
</box>

Note that you ==need to call the `close()` method== of the `FileWriter` object for the writing operation to be completed.

**You can create a `FileWriter` object that appends to the file** (instead of overwriting the current content) by specifying an additional boolean parameter to the constructor.

<box>

{{ icon_example }} The method below appends to the file rather than overwrites.

```java
private static void appendToFile(String filePath, String textToAppend) throws IOException {
    FileWriter fw = new FileWriter(filePath, true); // create a FileWriter in append mode
    fw.write(textToAppend);
    fw.close();
}
```

</box>

**The [`java.nio.file.Files`]({{ java_api }}/java/nio/file/Files.html) is a utility class provides several useful file operations.** It relies on the [`java.nio.file.Paths`]({{ java_api }}/java/nio/file/Paths.html) file to generate `Path` objects that represent file paths.

<box>

{{ icon_example }} This example uses the `Files` class to copy a file and delete a file.

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class FilesClassDemo {

    public static void main(String[] args) throws IOException{
        Files.copy(Paths.get("data/fruits.txt"), Paths.get("temp/fruits2.txt"));
        Files.delete(Paths.get("temp/fruits2.txt"));
    }

}
```
</box>

The techniques above are good enough to manipulate simple text files. Note that **it is also possible to [perform file I/O operations using other classes](https://www.tutorialspoint.com/java/java_files_io.htm)**.

</div>

<div id="extras">
  <include src="exercisesPanel.md" boilerplate />
</div>
