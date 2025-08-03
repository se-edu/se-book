{% from "common/macros.njk" import hp_number, show_output with context %}
You can use the `git log` command to see the commit history.

```bash{.no-line-numbers}
git log
```
{% call show_output() %}
```bash{.no-line-numbers}
commit ... (HEAD -> master)
Author: ... <...@...>
Date:   ...

Add fruits.txt
```
{% endcall %}

<box type="tip" seamless>

Use the <kbd>Q</kbd> key to exit the output screen of the `git log` command.
</box>

{{ icon_info }} Note how the output has some details about the commit you just created. You can ignore most of it for now, but notice it also shows the commit message you provided.
