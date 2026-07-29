{% from "common/macros.njk" import show_term with context %}
<span id="title">What</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain libraries</span>

<div id="body">

A {{ show_term("library") }} is a collection of modular code that is general and can be used by other programs.

<div class="alt-java">

{{ label_example }} %%Java classes you get with the JDK (such as `String`, `ArrayList`, `HashMap`, etc.) are library classes that are provided in the default Java distribution.%%<br>
{{ label_example }} %%[Natty](https://github.com/joestelmach/natty) is a Java library that can be used for parsing strings that represent dates, e.g., `The 31st of April in the year 2008`%%
</div>
<div class="alt-python">

{{ label_example }} %%Built-in modules you get with Python (such as `csv`, `random`, `sys`, etc.) are libraries that are provided in the default Python distribution. Classes such as `list`, `str`, and `dict` are built-in library classes that you get with Python.%%<br>
{{ label_example }} %%[Colorama](https://pypi.python.org/pypi/colorama) is a Python library that can be used for colorizing text in a CLI.%%

</div>

</div>

<div id="extras">
</div>