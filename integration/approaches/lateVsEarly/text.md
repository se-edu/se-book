<link rel="stylesheet" href="{{baseUrl}}/css/textbook.css">

<div class="website-content">

<div id="path">Integration &rarr; Approaches &rarr;</div>

<div id="title">

#### 'Late and One Time' vs 'Early and Frequent' :two:

</div>

<div id="body">

In terms of timing and frequency, there are two general approaches to integration:

1. _Late and one-time_: In an extreme case of this approach, developers wait till all components are completed and integrate all finished components just before the release. This approach is not recommended because integration often causes many component incompatibilities (due to previous miscommunications and misunderstandings) to surface which can lead to delivery delays: Late integration &rarr; incompatibilities found &rarr; major rework required &rarr; cannot meet the delivery date.
2. _Early and frequent_: The other approach is to integrate early and evolve in parallel in small steps, re-integrating frequently. For example, a working skeleton  can be written first (i.e. it compiles and runs but does not produce any useful output). This can be done by one developer, possibly the one in charge of integration. After that, all developers can flesh out the skeleton in parallel, adding one feature at a time. After each feature is done, simply integrate the new code to the main system.

Whether using frequent integration or one-time late integration, there is still a need to decide the order in which components are to be integrated. There are several approaches to doing this, as explained next.

</div>

<div id="extras">
<div>

</div>
