<panel header="{{ icon_Q }} TaskManager Level 7 - **Use JUnit**">
<div id="body">

<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel1.md#main" header="{{ icon_prereq }} TM-L1" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel2.md#main" header="{{ icon_prereq }} TM-L2" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel3.md#main" header="{{ icon_prereq }} TM-L3" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel4.md#main" header="{{ icon_prereq }} TM-L4" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel5.md#main" header="{{ icon_prereq }} TM-L5" minimized />
<panel type="seamless" src="../../project/taskManager/q-taskManagerLevel6.md#main" header="{{ icon_prereq }} TM-L6" minimized />

%%This exercise continues from the `TaskManager Level 1-6` exercises quoted above.%%

<div id="main">


**Add JUnit tests** for some of the methods in your code.


<panel type="seamless" header="Partial solution">

```java
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class ParserTest {

    @Test
    public void getCommandWord(){
        assertEquals("todo", Parser.getCommandWord("todo read book"));
        assertEquals("deadline", Parser.getCommandWord("deadline return book /by next Friday"));
        assertEquals("exit", Parser.getCommandWord("exit"));
        assertEquals("xyz", Parser.getCommandWord("   xyz   ")); // leading and trailing spaces
        // ...
    }

    @Test
    public void createTodo() throws TaskManagerException {
        Todo actual = Parser.createTodo("todo read book");
        Todo expected = new Todo("read book");
        assertEquals(expected.toString(), actual.toString());
        //...
    }

    // more test methods
}
```

</panel>
</div>

</div>
</panel>
