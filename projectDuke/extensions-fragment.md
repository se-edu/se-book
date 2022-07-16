## <div class="text-white bg-primary p-1">Extensions: Category A</div>

<div id="A-Classes">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Classes"
         var-extHeading="Use a class to represent tasks"/>

While it is possible to represent a task list as a multi-dimensional array containing <tooltip content="`String`, `int`, `boolean` etc.">primitive values</tooltip>, the more natural approach is to use a `Task` class to represent tasks.

<panel type="seamless" header="Partial solution" minimized>

```java
public class Task {
    protected String description;
    protected boolean isDone;

    public Task(String description) {
        this.description = description;
        this.isDone = false;
    }

    public String getStatusIcon() {
        return (isDone ? "X" : " "); // mark done task with X
    }

    //...
}
```

```java
Task t = new Task("read book");
t.markAsDone();
```
</panel>

</div><hr>
<div id="A-Inheritance">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Inheritance"
         var-extHeading="Use Inheritance to support multiple task types"/>

As there are multiple types of tasks that have some similarity between them, you can implement classes `Todo`, `Deadline` and `Event` classes to inherit from a `Task` class.

Furthermore, use polymorphism to store all tasks in a data structure containing `Task` objects e.g., `Task[100]`.

<panel type="seamless" header="Partial solution" minimized>

```java
public class Deadline extends Task {

    protected String by;

    public Deadline(String description, String by) {
        super(description);
        this.by = by;
    }

    @Override
    public String toString() {
        return "[D]" + super.toString() + " (by: " + by + ")";
    }
}
```

```java
Task[] tasks = new Task[100];
task[0] = new Deadline("return book", "Monday");
```

</panel>

</div><hr>

<div id="A-AbstractClasses">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-AbstractClasses"
         var-extHeading="Use abstract classes"/>

Make the `Task` class an abstract class. If applicable, use abstract methods as well.

</div><hr>

<div id="A-Exceptions">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Exceptions"
         var-extHeading="Use Exceptions to handle errors"/>

Use exceptions to handle errors. For example, define a class `DukeException` to represent exceptions specific to Duke.

</div><hr>

<div id="A-TextUiTesting">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-TextUiTesting"
         var-extHeading="Test using the I/O redirection technique"/>

Use the input/output redirection technique to semi-automate the testing of Duke.

Notes:
* A tutorial of this technique is [here](https://se-education.org/guides/tutorials/textUiTesting.html).
* The required scripts are provided in the Duke repo (see the `text-ui-test` folder).
</div><hr>
<div id="A-Collections">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Collections"
         var-extHeading="Use Java Collections classes"/>

Use Java Collections classes for storing data. For example, you can use an `ArrayList<Task>` to store the tasks.
</div><hr>
<div id="A-MoreOOP">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-MoreOOP"
         var-extHeading="Make the code more OOP"/>

Refactor the code to extract out closely related code as classes.
* **Minimal**: Extract the following classes:
  * `Ui`: deals with interactions with the user
  * `Storage`: deals with loading tasks from the file and saving tasks in the file
  * `Parser`: deals with making sense of the user command
  * `TaskList`: contains the task list %%e.g., it has operations to add/delete tasks in the list%%
<div class="indented-level2">

For example, the code of the main class could look like this:
```java
public class Duke {

    private Storage storage;
    private TaskList tasks;
    private Ui ui;

    public Duke(String filePath) {
        ui = new Ui();
        storage = new Storage(filePath);
        try {
            tasks = new TaskList(storage.load());
        } catch (DukeException e) {
            ui.showLoadingError();
            tasks = new TaskList();
        }
    }

    public void run() {
        //...
    }

    public static void main(String[] args) {
        new Duke("data/tasks.txt").run();
    }
}
```
</div>

* **Stretch Goal**: Consider extracting more classes. e.g., `*Command` classes (i.e., `AddCommand`, `DeleteCommand`, `ExitCommand` etc.) that inherit from an abstract `Command` class, so that you can write the main logic of the App as follows:
  ```java
  public void run() {
      ui.showWelcome();
      boolean isExit = false;
      while (!isExit) {
          try {
              String fullCommand = ui.readCommand();
              ui.showLine(); // show the divider line ("_______")
              Command c = Parser.parse(fullCommand);
              c.execute(tasks, ui, storage);
              isExit = c.isExit();
          } catch (DukeException e) {
              ui.showError(e.getMessage());
          } finally {
              ui.showLine();
          }
      }
  }
  ```
  {{ icon_tip }} You can get some inspiration from how the code of the [addressbook-level2](https://github.com/se-edu/addressbook-level2) is organized.
</div><hr>
<div id="A-JUnit">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-JUnit"
         var-extHeading="Add JUnit tests"/>

Add JUnit tests to test the behavior of the code.


**Requirements**:
* Minimum: More than two test methods, preferably targeting more than one class (if you have multiple classes)
* Stretch goal: test methods to target all public methods of all classes

{{ icon_tip }} Refer to the [_JUnit tutorial_ @se-edu/guides](https://se-education.org/guides/tutorials/junit.html) to find how to use JUnit.


</tab>
</tabs>


</div><hr>
<div id="A-Packages">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Packages"
         var-extHeading="Divide classes into packages"/>

Organize the classes into suitable java packages.
* **Minimal**: put all classes in one package e.g., `duke`
* **Stretch goal**: divide into multiple packages as the number of classes increase e.g., `duke.task`, `duke.command`
</div><hr>
<div id="A-JavaDoc">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-JavaDoc"
         var-extHeading="Add JavaDoc comments"/>

Add JavaDoc comments to the code.
* **Minimal**: Add header comments to at least half of the non-private classes/methods.
* **Stretch goal**: Add header comments to all non-private classes/methods, and non-trivial private methods.
</div><hr>
<div id="A-CodingStandard">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-CodingStandard"
         var-extHeading="Tweak the code to comply with a coding standard"/>

Tweak the code to comply with a given coding standard. From this point onward, ensure any new code added are compliant with the given coding standard.
</div><hr>
<div id="A-CheckStyle">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-CheckStyle"
         var-extHeading="Use CheckStyle"/>

Use checkStyle to detect coding style violations.

Refer the tutorial [_Using Checkstyle_ @SE-EDU/guides](https://se-education.org/guides/tutorials/checkstyle.html) to learn how to use Checkstyle.
<p/>



</div><hr>
<div id="A-CodeQuality">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-CodeQuality"
         var-extHeading="Improve code quality"/>

Critically examines the code and refactor to improve the code quality where necessary.

{{ icon_important_big_red }} When adding this increment, follow closely the 'Code Quality' topics you have learned so far, rather than merely follow your own intuition about code quality.
</div><hr>
<div id="A-Assertions">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Assertions"
         var-extHeading="Use Assertions"/>

Use `assert` feature (not JUnit assertions) to document important assumptions that should hold at various points in the code.
</div><hr>
<div id="A-Jar">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Jar"
         var-extHeading="Package the App as a JAR file"/>

Package the app as an executable JAR file so that it can be distributed easily.

You can assume **the user will run the jar file in the following way only**:
* Copy the jar file into an empty folder
* Open a command window in that folder
* Run the command `java -jar {filename}.jar` e.g., `java -jar Duke.jar` (i.e., run the command in the same folder as the jar file)

{{ icon_tip }} Refer to the tutorial [_Working with JAR files_ @SE-EDU/guides](https://se-education.org/guides/tutorials/jar.html) to find how to create JAR files.

{{ icon_important }} If your project is being revision controlled using Git/GitHub, do not commit the JAR file created. Instead, you can make the JAR file available in the following manner.
* Go to your fork on GitHub and [create a new _release_](https://help.github.com/en/articles/creating-releases).
* In the page where you fill the details of the release,
  * give an appropriate version number e.g., `v0.1`
  * attach the JAR file where it says `Attach binaries by dropping them ...`.

</div><hr>
<div id="A-Gradle">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Gradle"
         var-extHeading="Automate project builds using Gradle"/>

Use Gradle to automate some of the build tasks of the project.

Gradle support is provided as a separate branch (named `add-gradle-support`) in the Duke repo. Therefore, you can follow the _scenario 2_ in the guide below.

Refer to the [_Gradle tutorial_ @SE-EDU](https://se-education.org/guides/tutorials/gradle.html) to learn how to use Gradle.

* **Minimal**: Set up gradle so that you can build and run Duke using gradle.
* **Recommended**: Set up gradle to run unit tests.
* **Stretch Goal**: Use gradle to automate more things in your project.

</div><hr>
<div id="A-CI">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-CI"
         var-extHeading="Set up CI"/>

Use GitHub Actions to set up Continuous Integration (CI).

The workflow specified by [this `.yml` file](https://github.com/se-edu/duke/blob/full-template/.github/workflows/gradle.yml) is a good candidate for this project. The last three segments are related to I/O redirection tests; can be deleted if not applicable to your project.

Refer to the [_Using GitHub Actions_ @SE-EDU/guides](https://se-education.org/guides/tutorials/githubActions.html) to learn how to use that `.yml` file to set up GitHub actions.

</div><hr>
<div id="A-Enums">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Enums"
         var-extHeading="Use Enumerations"/>

Use Java `enum`s, if applicable.
</div><hr>
<div id="A-Varargs">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Varargs"
         var-extHeading="Use var-args"/>

Use Java varargs feature, if applicable.
</div><hr>
<div id="A-Lambdas">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Lambdas"
         var-extHeading="Use Lambdas"/>

Use the Lambdas feature of Java in your code, if applicable.
</div><hr>
<div id="A-Streams">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Streams"
         var-extHeading="Use Streams"/>

Use the Streams feature of Java in your code, if applicable.
</div><hr>
<div id="A-Libraries">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Libraries"
         var-extHeading="Use external libraries"/>

Use third-party libraries in your project. For example, you can use the Natty library to parse strings into meaningful dates.
</div><hr>
<div id="A-UserGuide">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-UserGuide"
         var-extHeading="Add a User Guide"/>

Add a User Guide to the project in the following way:
* Update the given `docs\README.md`. See [this guide](https://guides.github.com/features/mastering-markdown/) to GitHub flavored Markdown (GFMD).
* Enable the _GitHub Pages_ feature for your fork:
  1. Go to your repo's <span class="border border-secondary border-bottom-0 pr-1 pl-1 mr-1 ml-1 rounded-top"><small>:fas-cog: settings</small></span> tab.
  1. Click `Pages` on the menu on the left edge of page.
  1. Set the `Source` as: [**%%:octicon-git-branch: Branch:%%** master :octicon-triangle-down:] branch and [:octicon-file-directory: /docs :octicon-triangle-down:] folder and click `Save`.<br>
     You can select a theme too.
* Go to `http://{your username}.github.io/{repo name}/` to view the user guide of your product. %%Note: it could take 5-10 minutes for GitHub to update the page.%%<br>
  {{ icon_important_big_red }} It is important that you carefully check the content of the UG available at the above URL to ensure the HTML version of the page (auto-converted from MarkDown by GitHub Pages) has the right content. In some rare cases, the page might look alright on GitHub file preview but will not render correctly on GitHub pages.

{{ icon_tip }} **How detailed should the user guide be?** It should be fit-for-purpose. i.e., think from the user's point of view and include as much information as necessary for the user (while trying to keep it as short as possible -- users don't have the patience to read lengthy user guides either), in a format as friendly to the user as possible.

</div><hr>
<div id="A-DevGuide">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-DevGuide"
         var-extHeading="Add a Developer Guide"/>

Add a Developer Guide to the project, explaining the design and implementation to future developers.
</div><hr>
<div id="A-Release">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-Release"
         var-extHeading="Release the product"/>

Release the product to be used by potential users. %%e.g., you can make it available on GitHub%%
</div><hr>
<div id="A-BetterGui">
<include boilerplate src="dukeExtensionTitle.md" var-extId="A-BetterGui"
         var-extHeading="Improve the GUI"/>

Improve the GUI to make it more _polished_. Some examples:
* Tweak the GUI to match the asymmetric nature of the conversation: As the conversation is between the user and the app (not between two humans), it is asymmetric in nature. Accordingly, it makes sense not to display both sides of the conversion in the same visual format.
* Highlight errors e.g., when the user types a wrong command, the error should be shown in a different format to catch ther user's attention.
* Tweak padding, fonts, colors, alignments to make the GUI more pleasing to look at.<br>
  Given the app is likely to take only a small portion of the screen, and the bot replies can contain lot of text, try to optimize for space (e.g., avoid wasting display space that simply shows the background graphics).
* Allow resizing of the Window, and ensure the content resize appropriately as the Window changes size.
* Profile pictures: If your GUI shows profile pictures, you can tweak the way the picture is shown (e.g., crop as a circle or a square with rounded corners). In fact, an easy tweak is to use a picture with a transparent background so that it blends nicely with the background.<br>
  Given that the participants of the conversion are fixed (i.e., you and the chatbot), do you even need big profile pictures?
* Focus more on tweaks that actually _improves_ the user experience (UX). Some changes %%(e.g., profile pictures, background graphics)%% can be eye catching but can even degrade the UX if not done right %%(e.g., it can make the text harder to read)%%

{{ icon_tip }} You can take inspiration from [these past projects](https://nus-cs2103-ay2021s1.github.io/website/admin/ip-showcase.html). If you adopt any ideas from them, don't forget to give credit to the original author.

</div>

<!-- ======================================================================================================= -->

## <div class="text-white bg-info p-1">Extensions: Category B</div>

<div id="B-TentativeScheduling">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-TentativeScheduling" var-extStyle="info"
         var-extHeading="Tentative scheduling"/>

Provide a way for an event to be tentatively scheduled in multiple slots, and later to be confirmed to one the slots.
</div><hr>
<div id="B-Snooze">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-Snooze" var-extStyle="info"
         var-extHeading="Snoozing/postponing tasks"/>

Provide a way to easily snooze/postpone/reschedule tasks.
</div><hr>
<div id="B-RecurringTasks">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-RecurringTasks" var-extStyle="info"
         var-extHeading="Recurring tasks"/>

Provide support for managing _recurring_ tasks %%e.g., a weekly project meeting%%.
</div><hr>
<div id="B-DoAfterTasks">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-DoAfterTasks" var-extStyle="info"
         var-extHeading="'Do after' tasks"/>

Support the managing of tasks that need to be _done_ after a specific time/task %%e.g., return book after the exam is over%%.
</div><hr>
<div id="B-DoWithinPeriodTasks">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-DoWithinPeriodTasks" var-extStyle="info"
         var-extHeading="'Do within a period' task"/>

Provide support for managing tasks that need to be done within a certain period %%e.g., collect certificate between Jan 15 and 25th%%.
</div><hr>
<div id="B-FixedDurationTasks">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-FixedDurationTasks" var-extStyle="info"
         var-extHeading="Unscheduled tasks with a fixed duration"/>

Provide support for managing tasks that takes a fixed amount of time but does not have a fixed start/end time %%e.g., reading the sales report (needs 2 hours)%%.
</div><hr>
<div id="B-Reminders">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-Reminders" var-extStyle="info"
         var-extHeading="Reminders for tasks"/>

Provide a way to get reminders about tasks %%e.g., remind the user about upcoming deadlines%%.
</div><hr>
<div id="B-FindFreeTimes">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-FindFreeTimes" var-extStyle="info"
         var-extHeading="Find free times"/>

Provide a way for the user to find free times %%e.g., when is the nearest day in which I have a 4 hour free slot?%%.
</div><hr>
<div id="B-ViewSchedules">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-ViewSchedules" var-extStyle="info"
         var-extHeading="View schedules"/>

Provide a way to view tasks in the form of a schedule %%e.g., view the schedule for a specific date%%.
</div><hr>
<div id="B-DetectAnomalies">
<include boilerplate src="dukeExtensionTitle.md" var-extId="B-DetectAnomalies" var-extStyle="info"
         var-extHeading="Detect scheduling anomalies"/>

Deal with schedule anomalies %%e.g., detect if a task being added clashes with another task in the list%%.
</div>

<!-- ======================================================================================================= -->

## <div class="text-white bg-success p-1">Extensions: Category C</div>

<div id="C-DetectDuplicates">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-DetectDuplicates" var-extStyle="success"
         var-extHeading="Deal duplicate items"/>

Add the ability to recognize and deal with duplicate items. %%e.g., the same task added multiple times%%.
</div><hr>
<div id="C-FlexibleDataSource">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-FlexibleDataSource" var-extStyle="success"
         var-extHeading="Flexible data source"/>

Provide more flexibility with the data source %%e.g., the ability for the user to specify which file to use as the data source%%.
</div><hr>

<div id="C-Sort">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Sort" var-extStyle="success"
         var-extHeading="Sorting items managed by the App"/>

The ability to sort items %%e.g., sort deadlines chronologically%%.
</div>
<div id="C-NaturalDates">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-NaturalDates" var-extStyle="success"
         var-extHeading="More natural date formats"/>

Support more natural date formats %%e.g., `Mon` in a user command can be interpreted as the date of the next Monday in the calendar%%.
</div>
<div id="C-BetterSearch">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-BetterSearch" var-extStyle="success"
         var-extHeading="More flexibility in searching for items"/>

All more flexibility in search %%e.g., find items even if the keyword matches the item only partially%%.
</div>
<div id="C-Update">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Update" var-extStyle="success"
         var-extHeading="Easily edit items"/>

Support a way to easily edit details of items %%e.g., change the end time of an event without changing anything else%%.

Minimal: the ability to update an existing item without having to delete it first

Other ideas:
* the ability to _clone_ items (to easily create new items based on existing items)
</div>
<div id="C-Tagging">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Tagging" var-extStyle="success"
         var-extHeading="Tagging items"/>

Provide a way to tag items %%e.g., tag a task as `#fun`%%.
</div>
<div id="C-Priority">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Priority" var-extStyle="success"
         var-extHeading="Prioritizing items"/>

Provide a way to attach priorities to items %%e.g., mark an item as a `high` priority (or priority level `1`)%%.
</div>
<div id="C-Archive">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Archive" var-extStyle="success"
         var-extHeading="Archiving items"/>

Provide a way to _archive_ items so that the user can remove items from the app but still keep a record of them somewhere %%e.g., archive all tasks in the list into a file so that the user can start over with a clean slate%%.
</div>
<div id="C-MassOps">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-MassOps" var-extStyle="success"
         var-extHeading="Mass operations"/>

Provide a way to perform tasks on multiple items %%e.g., delete some specific items in one go%%.
</div>
<div id="C-Statistics">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Statistics" var-extStyle="success"
         var-extHeading="Statistics and insights"/>

Provide a way to leverage statistics about the items managed by the App %%e.g., show the number of tasks that have been completed in the past week%%. 
</div>
<div id="C-UndoRedo">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Undo" var-extStyle="success"
         var-extHeading="Undo"/>

Provide a way to undo a command.

Minimal: the ability to undo the most recent command.
</div>
<div id="C-Help">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-Help" var-extStyle="success"
         var-extHeading="Give help to users"/>

Provide in-App guidance to users. 

Minimal: add a command to access a help page.

Other ideas:
* Load the App with some sample data at the first run.

</div>
<div id="C-FriendlierSyntax">
<include boilerplate src="dukeExtensionTitle.md" var-extId="C-FriendlierSyntax" var-extStyle="success"
         var-extHeading="Friendlier syntax for commands"/>

Make the command syntax more flexible.

Minimal: provide shorter aliases for keywords %%e.g., `t` can be shorter alias for `todo`%%.

Other ideas:
* Allow users to define their own aliases
* Remove the need for the parts of a command to be in a specific order
</div>

<!-- ======================================================================================================= -->

## <div class="text-white bg-danger p-1">Extensions: Category D</div>

<div id="D-Contacts">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Contacts" var-extStyle="danger"
         var-extHeading="Support managing contacts"/>

Support managing info about contacts %%e.g., details of friends%%
</div>
<div id="D-Notes">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Notes" var-extStyle="danger"
         var-extHeading="Support managing notes"/>

Support managing info about small snippets of textual information the user wants to record %%e.g., one's own waist size, a name of a movie that the user wants to remember%%
</div>
<div id="D-Expenses">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Expenses" var-extStyle="danger"
         var-extHeading="Support managing expenses"/>

Support managing info about expenses %%e.g., the amounts spent on food, books, transport, etc.%%
</div>
<div id="D-Loans">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Loans" var-extStyle="danger"
         var-extHeading="Support managing loan records"/>

Support keeping records of loans given/taken %%e.g., money lent/owed to colleagues/friends%%
</div>
<div id="D-Places">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Places" var-extStyle="danger"
         var-extHeading="Support managing info about places"/>

Support recording info about places %%e.g., info about restaurants visited, for future reference%%
</div>
<div id="D-Trivia">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Trivia" var-extStyle="danger"
         var-extHeading="Support managing trivia"/>

Provide the ability to learn/memorize things%%e.g., learn vocabulary, answers to questions%%
</div>
<div id="D-Clients">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Clients" var-extStyle="danger"
         var-extHeading="Support managing client info"/>

Support managing info about clients %%e.g., for an insurance agent to keep track of clients%%
</div>
<div id="D-Merchandise">
<include boilerplate src="dukeExtensionTitle.md" var-extId="D-Merchandise" var-extStyle="danger"
         var-extHeading="Support managing merchandise info"/>

Support managing info about merchandise %%e.g., a property agent to keep track of properties, a collector of stamps keep track of items in the collection%%
</div>
