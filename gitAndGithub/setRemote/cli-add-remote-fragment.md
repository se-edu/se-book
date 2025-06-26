{% from "common/macros.njk" import hp_number, show_output with context %}

{{ hp_number ('1') }} In a terminal, navigate to the folder containing the local repo.

{{ hp_number ('2') }} **List the current list of remotes** using the `git remote -v` command, for a sanity check. No output is expected if there are no remotes yet.

{{ hp_number ('3') }} **Add a new remote repo** using the `git remote add` command.<br>
   command: `git remote add {remote_name} {remote_repo_url}`<br>
   e.g., `git remote add origin https://github.com/johndoe/foobar.git`

{{ hp_number ('4') }} **List the remotes again to verify** the new remote was added.

```bash {.no-line-numbers}
git remote -v
```
{% call show_output() %}
```{.no-line-numbers  highlight-lines="1['origin'],1['fetch'],2['origin'],2['push']"}
origin  https://github.com/johndoe/foobar.git (fetch)
origin  https://github.com/johndoe/foobar.git (push)
```
{% endcall %}

{{ icon_info }} The same remote will be listed twice, to show that you can do two operations (`fetch` and `push`) using this remote. You can ignore that for now. The important thing is the remote you added is being listed.
