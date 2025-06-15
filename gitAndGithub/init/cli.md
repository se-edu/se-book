{% from "common/macros.njk" import show_output with context %}

Use the command `git init` which should initialise the repo.

```bash {.no-line-numbers}
git init
```
{% call show_output() %}
```{.no-line-numbers highlight-lines="1['.git']"}
Initialized empty Git repository in things/.git/
```
{% endcall %}
{{ icon_info }} The output might also contain a hint about a name for an initial branch (e.g., `hint: Using 'master' as the name for the initial branch ...`). You can ignore that for now.

{{ icon_info }} Note how the output mentions the repo being created in `things/.git/` (not `things/`). More on that later.

