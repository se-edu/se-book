<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Integration &rarr; Approaches &rarr;</div>

<div id="title">

#### Top-Down vs Bottom-Up Integration :three:

</div>

<div id="body">

For incremental integration efforts, the following three incremental integration approaches are more suitable.

<img src="{{baseUrl}}/integration/approaches/topDownVsBottomUp/images/approaches.png" height="100" />
<p/>

*	_Top-down_ integration: In top-down integration, higher-level components are integrated before bringing in the lower-level components. One advantage of this approach is that higher-level problems can be discovered early. One disadvantage is that this requires the use of dummy or skeletal components (i.e. stubs) in place of lower level components until the real lower-level components are integrated to the system. Otherwise, higher-level components cannot function as they depend on lower level ones.
*	_Bottom-up_ integration: This is the reverse of top-down integration. Advantages and disadvantages are simply the reverse of those of the top-down approach.
*	_Sandwich_ integration: This is a mix of the top-down and the bottom-up approaches. The idea is to do both top-down and bottom-up so as to “meet up” in the middle.

</div>

<div id="extras">

<include src="exercises.md" />

</div>

</div>
