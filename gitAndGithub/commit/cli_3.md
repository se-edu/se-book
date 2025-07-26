{% from "common/macros.njk" import hp_number, show_output with context %}

Here is an example list of bash commands to add two commits while observing the list of commits

```bash
$ echo "figs" >> fruits.txt  # add another line to fruits.txt
$ git add fruits.txt  # stage the updated file
$ git commit -m "Insert figs into fruits.txt"  # commit the changes
$ git log  # check commits list

$ echo "a file for colours" >> colours.txt  # add a colours.txt file
$ echo "a file for shapes" >> shapes.txt  # add a shapes.txt file
$ git add colours.txt shapes.txt  # stage both files in one go
$ git commit -m "Add colours.txt, shapes.txt"  # commit the changes
$ git log  # check commits list
```

The output of the final `git log` should be something like this:
```bash{highlight-lines="5,11,17"}
commit 18300... (HEAD -> master)
Author: ... <...@...>
Date:   ...

    Add colours.txt, shapes.txt

commit 2beda...
Author: ... <...@...>
Date:   ...

    Insert figs into fruits.txt

commit d5f91...
Author: ... <...@...>
Date:   ...

    Add colours.txt, shapes.txt
```