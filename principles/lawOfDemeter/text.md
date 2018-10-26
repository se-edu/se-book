<div id="title">

#### Law of Demeter

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain the Law of Demeter</span>

<div id="body">

<tip-box type="definition">

<include src="../../common/definitions.md#def-law-of-demeter" />

</tip-box>

More concretely, a method `m` of an object `O` should invoke only the methods of the following kinds of objects:

* The object `O` itself
* Objects passed as parameters of `m`
* Objects created/instantiated in `m` (directly or indirectly)
* Objects from the <tooltip content="objects that are held by instance variables of">direct association of</tooltip> `O`

<tip-box>

{{ icon_example }} The following code fragment violates LoD due to the reason: while `b` is a ‘friend’ of `foo` (because it receives it as a parameter), `g` is a ‘friend of a friend’ (which should be considered a ‘stranger’), and `g.doSomething()` is analogous to ‘talking to a stranger’.

```java
void foo(Bar b) {
    Goo g = b.getGoo();
    g.doSomething();
}
```

</tip-box>

**LoD aims to prevent objects navigating internal structures of other objects.**
 
<tip-box> 

{{ icon_example }} An analogy for LoD can be drawn from Facebook. If Facebook followed LoD, you would not be allowed to see posts of friends of friends, unless they are your friends as well. If Jake is your friend and Adam is Jake’s friend, you should not be allowed to see Adam’s posts unless Adam is a friend of yours as well.

</tip-box>

</div>

<div id="extras">
  <include src="exercises.md" />
</div>