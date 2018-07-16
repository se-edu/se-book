<panel header="{{ icon_Q_A }} Suggest an integration strategy">
<question has-input="true">

Suggest an integration strategy for the system represented by following diagram. You need not follow a strict top-down, bottom-up, sandwich, or big bang approach. Dashed arrows represent dependencies between classes.

Also take into account the following facts in your test strategy.

* `HospitalUI` will be developed early, so as to get customer feedback early.
* `HospitalFacade` shields the UI from complexities of the application layer. It simply redirects the method calls received to the appropriate classes below
* `IO_Helper` is to be reused from an earlier project, with minor modifications
* Development of `OutPatient` component has been outsourced, and the delivery is not expected until the 2nd half of the project.

<img src="{{baseUrl}}/integration/approaches/topDownVsBottomUp/images/hospital.png" height="250" />
<p/>

<div slot="answer">

There can be many acceptable answers to this question. But any good strategy should consider at least some of the below.

* Because `HospitalUI` will be developed early, it’s OK to integrate it early, using stubs, rather than wait for the rest of the system to finish. (i.e. a top-down integration is suitable for `HospitalUI`)
* Because `HospitalFacade` is unlikely to have a lot of business logic, it may not be worth to write stubs to test it (i.e. a bottom-up integration is better for `HospitalFacade`).
* Because `IO_Helper` is to be reused from an earlier project, we can finish it early. This is especially suitable since there are many classes that use it. Therefore `IO_Helper` can be integrated with the dependent classes in bottom-up fashion.
* Because `OutPatient` class may be delayed, we may have to integrate `PatientMgr` using a stub.
* `TypeA`, `TypeB`, and `TypeC` seem to be tightly coupled. It may be a good idea to test them together.

Given below is one possible integration test strategy. Relative positioning also indicates a rough timeline.

<img src="{{baseUrl}}/integration/approaches/topDownVsBottomUp/images/hospitalIntegration.png" height="250" />
<p/>

</div>
</question>
</panel>
