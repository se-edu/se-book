### Case Study
Next, let us look at a case study that shows how design patterns are used in the design of a class structure for a Stock Inventory System (SIS) for a shop. The shop sells appliances, and accessories for the appliances. SIS simply stores information about each item in the store.

> Use cases: create a new item, view information about an item, modify information about an item, view all available accessories for a given appliance, list all items in the store.

SIS can be accessed using multiple terminals. Shop assistants use their own terminals to access SIS, while the shop manager’s terminal continuously displays a list of all items in store. In the future, it is expected that suppliers of items use their own applications to connect to SIS to get real-time information about current stock status. User authentication is not required for the current version, but may be required in the future.

A step by step explanation of the design is given below. Note that this is one out of many possible designs. Design patterns are also applied where appropriate.

Here is a step-through of the design:

A `StockItem` can be an `Appliance` or an `Accessory`.

<img src="case-study/1.png" class="center-block">

To track that each Accessory is associated with the correct `Appliance`, consider the following alternative class structures.

<img src="case-study/2.png" class="center-block">

The third one seems more appropriate (the second one is suitable if accessories can have
accessories). Next, consider between keeping a list of `Appliances`, and a list of `StockItems`. Which is more appropriate?

<img src="case-study/3.png" class="center-block">

The latter seems more suitable because it can handle both appliances and accessories the same
way. Next, an abstraction occurrence pattern is applied to keep track of `StockItems`.

<img src="case-study/4.png" class="center-block">

Note the inclusion of navigabilities. Here’s a sample object diagram based on the class model created thus far.

<img src="case-study/5.png" class="center-block">

Next, apply the *façade pattern* to shield the SIS internals from the UI.

<img src="case-study/6.png" class="center-block">

As UI consists of multiple views, the MVC pattern is applied here.

<img src="case-study/7.png" class="center-block">

Some views need to be updated when the data change; apply the Observer pattern here.

<img src="case-study/8.png" class="center-block">

In addition, the Singleton pattern can be applied to the façade class.