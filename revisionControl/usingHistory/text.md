<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain using history</span>

<span id="title">Using history</span>

<div id="body">

**<trigger for="pop:rcs">RCS</trigger> tools store the history of the working directory as a series of commits.** This means you should commit after each change that you want the RCS to 'remember'.

**Each commit in a repo is a recorded point in the history of the project that is uniquely identified by an auto-generated ==hash==** e.g. `a16043703f28e5b3dab95915f5c5e5bf4fdc5fc1`.

**You can ==tag== a specific commit with a more easily identifiable name** e.g. `v1.0.2`.
 
**To see what changed between two points of the history, you can ask the RCS tool to  ==_diff_== the two commits in concern.**

**To restore the state of the working directory at a point in the past, you can ==_checkout_== the commit in concern.** i.e., you can traverse the history of the working directory simply by checking out the commits you are interested in.

<include src="../../common/popOvers.md#rcs" />

</div>

<div id="extras">
</div>
