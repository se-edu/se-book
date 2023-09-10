<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can identify service-oriented architectural style</span>

<span id="title">What</span>

<div id="body">

**The _service-oriented architecture_ (SOA) style builds applications by combining functionalities packaged as _programmatically accessible services_**. SOA aims to achieve interoperability between distributed services, which may not even be implemented using the same programming language. A common way to implement SOA is through the use of _XML web services_ where the web is used as the medium for the services to interact, and XML is used as the language of communication between service providers and service users.

<box>

{{ icon_example }} Suppose that Amazon.com provides a web service for customers to browse and buy merchandise, while HSBC provides a web service for merchants to charge HSBC credit cards. Using these web services, an ‘eBookShop’ web application can be developed that allows HSBC customers to buy merchandise from Amazon and pay for them using HSBC credit cards. Because both Amazon and HSBC services follow the SOA architecture, their web services can be reused by the web application, even if all three systems use different programming platforms.

<pic eager src="{{baseUrl}}/architecture/architecturalStyles/serviceOriented/what/images/amazonWebServices.png" height="280" />
<p/>

</box>

</div>

<div id="extras">
<include src="resourcesPanel.md" boilerplate/>
</div>
