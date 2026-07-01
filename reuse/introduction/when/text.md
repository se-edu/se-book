<span id="title">When</span>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the costs and benefits of reuse</span>

<div id="body">

While you may be tempted to use many libraries/frameworks/platforms that appear regularly and promise to bring great benefits, note that **there are costs associated with reuse**. Here are some:
* The reused code **may be overkill** (think _using a sledgehammer to crack a nut_), increasing the size of, and/or degrading the performance of, your software.
* The reused software **may not be mature/stable enough** to be used in an important product. That means the software can change drastically and rapidly, possibly in ways that break your software.
* Non-mature software has the **risk of dying off** as fast as it emerged, leaving you with a dependency that is no longer maintained.
* The license of the reused software (or its dependencies) **restricts how you can use/develop your software**.
* The reused software **might have bugs, missing features, or security vulnerabilities** that are important to your product, but not so important to the maintainers of that software, which means those flaws will not get fixed as fast as you need them to.
* **Malicious code can sneak into your product** via compromised dependencies.


</div>

<div id="extras">
<include src="exercisesPanel.md" boilerplate/>
</div>
