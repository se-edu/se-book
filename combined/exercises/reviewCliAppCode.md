<panel header="{{ icon_Q }} Review `CliApp` code for quality">

<panel header="%%{{ icon_prereq }}%% Prerequisites" minimized>

See the chapter on _Code Quality_.
</panel>
<p/>


<question has-input="true">

Suggest ways to improve the quality of the code below.

```java
import java.io.FileNotFoundException;
import java.util.*;

public class CliApp {

    //...
    private static final String MESSAGE_COMMAND_HELP_PARAMETERS = "Parameters: %1$s";
    private static final String MESSAGE_COMMAND_HELP_EXAMPLE = "Example: %1$s";
    private static final String MESSAGE_DISPLAY_PERSON_DATA = "%1$s  Phone Number: %2$s  Email: %3$s";
    private static final String GOODBYE_MESSAGE = "Exiting Address Book... Good bye!";
    private static final String MESSAGE_INVALID_COMMAND_FORMAT = "Invalid command format: %1$s";
    //...

    /**
     * List of all persons in the address book.
     */
    private static final ArrayList<String> person = new ArrayList<>();


    //...

    public static void main(String[] args) {
        String userCommand = "nothing"; boolean exit = false;
        if (args.length > 0) {
            showWelcomeMessage();
            processProgramArgs(args);
            loadDataFromStorage();
            while (!exit) {
                System.out.print("Enter command: ");
                userCommand = SCANNER.nextLine();
                userCommand = userCommand.trim();
                showToUser(userCommand);
                String feedback = executeCommand(userCommand);
                showResultToUser(feedback);
            }
        } else {
            showToUser("Incorrect usage!");
        }
    }

    private static void showResultToUser(String feedback) {
        switch (feedback) {
            case "0":
                feedback = "Good (0)";
                break;
            case "1":
                feedback = "Better (1)";
                break;
        }
        try {
            writeToFile(feedback);
        } catch (FileNotFoundException e) {
            //e.printStackTrace();
        }
    }

    private static void matcher(String s1, String s2) {
        // ...
    }

    /**
     * Show the {@code message} to the user
     */
    private static void showToUser(String message) {
        System.out.println(LINE_PREFIX + message.trim()); // add LINE_PREFIX in front
    }

// ...

}
```

</question>
</panel>
