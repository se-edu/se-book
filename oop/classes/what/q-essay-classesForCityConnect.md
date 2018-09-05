<panel header="{{ icon_Q }} Classes for CityConnect app">
<question has-input="true">

Assume you are writing a CLI program called **`CityConnect`** for storing and querying distances between cities. The behavior is as follows:

```
Welcome to CityConnect!

Enter command: addroute Clementi BuonaVista 12
Route from Clementi to BuonaVista with distance 12km added

Enter command: getdistance Clementi BuonaVista
Distance from Clementi to BuonaVista is 12

Enter command: getdistance Clementi JurongWest
No route exists from Clementi to JurongWest!

Enter command: addroute Clementi JurongWest 24
Route from Clementi to JurongWest with distance 24km added

Enter command: getdistance Clementi JurongWest
Distance from Clementi to JurongWest is 24

Enter command: exit

```
What classes would you have in your code if you write your program based on the OOP paradigm?

<div slot="hint">

One class you can have is `Route`

</div>

</question>

</panel>
