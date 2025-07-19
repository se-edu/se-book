{% from "common/macros.njk" import trail, bold_number, callout, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_head, show_lesson_intro, show_output, show_ref, show_tag, show_transformation_columns, show_under_the_hood with context %}


Suppose you moved back the current branch ref by two commits, as follows:
```bash{.no-line-numbers}
git reset --hard HEAD~2
```
{% set a %}
{{ show_commit('C4', desc=show_ref('master') + show_head() + show_ref('origin/master')) }}
{{ show_commit('C3') }}
{{ show_commit('C2') }}
{{ show_commit('C1', edge='') }}
{% endset %}
{% set b %}{% endset %}
{% set c %}
{{ show_commit('C4', desc=show_ref('origin/master')) }}
{{ show_commit('C3') }}
{{ show_commit('C2', desc=show_ref('master') + show_head()) }}
{{ show_commit('C1', edge='') }}
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<p/>

If you now wish to move back the remote-tracking branch ref by two commits, so that the local repo 'forgets' that it previously pushed two more commits to the remote, you can do:

```bash{.no-line-numbers}
git update-ref refs/remotes/origin/master HEAD
```

{% set a %}
{{ show_commit('C4', desc=show_ref('origin/master')) }}
{{ show_commit('C3') }}
{{ show_commit('C2', desc=show_ref('master') + show_head()) }}
{{ show_commit('C1', edge='') }}
{% endset %}
{% set b %}{% endset %}
{% set c %}
{{ show_commit('  ', style='light') }}
{{ show_commit('  ', style='light') }}
{{ show_commit('C2', desc=show_ref('master') + show_head() + show_ref('origin/master')) }}
{{ show_commit('C1', edge='') }}
{% endset %}
{{ show_transformation_columns(a, b, c) }}
<p/>

The `git update-ref refs/remotes/origin/master HEAD` commands resets the remote-tracking branch ref `origin/master` to follow the current `HEAD`.

**`update-ref` is an example of what are known as Git {{ show_git_term("plumbing commands") }} -- lower-level commands** used by Git internally. In contrast, day-to-day Git commands (such as `commit`, `log`, `push` etc.) are known as {{ show_git_term("porcelain commands") }} (as in, in bathrooms we see the porcelain parts but not the plumbing parts that works below the surface to make everything work).

