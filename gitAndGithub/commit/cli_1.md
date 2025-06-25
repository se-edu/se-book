{% from "common/macros.njk" import hp_number, show_output with context %}

{{ hp_number('1') }} **First, let us do a sanity check** using the `git status` command.

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers}
On branch master

No commits yet

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
  new file:   fruits.txt
```
{% endcall %}

{{ hp_number('2') }} **Now, create a commit** using the `commit` command. The `-m` switch is used to specify the commit message.

```bash{.no-line-numbers}
git commit -m "Add fruits.txt"
```
{% call show_output() %}
```bash{.no-line-numbers}
[master (root-commit) d5f91de] Add fruits.txt
 1 file changed, 5 insertions(+)
 create mode 100644 fruits.txt
 ```
{% endcall %}

{{ hp_number('3') }} **Verify the staging area is empty** using the `git status` command again.

```bash{.no-line-numbers}
git status
```
{% call show_output() %}
```bash{.no-line-numbers}
On branch master
nothing to commit, working tree clean
```
{% endcall %}
{{ icon_info }} Note how the output says `nothing to commit` which means the staging area is now empty.
