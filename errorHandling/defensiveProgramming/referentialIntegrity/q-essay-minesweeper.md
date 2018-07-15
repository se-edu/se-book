<panel header="{{ icon_Q_A }} Implement `Player` and `Region`">
<question has-input="true">

Imagine that we now support the following feature in our Minesweeper game.

<tip-box>

Feature ID: multiplayer<br>
Description: A minefield is divided into mine regions. Each region is assigned to a single player. Players can swap regions. To win the game, all regions must be cleared.

</tip-box>

Given below is an extract from our class diagram.

<img src="{{baseUrl}}/errorHandling/defensiveProgramming/referentialIntegrity/images/playerRegion.png" height="100" />
<p/>

Minimally, this can be implemented like this.

```java
class Player{
    Region region;
    void setRegion(Region r) {
        region = r;
    }
    Region getRegion() {
        return region;
    }
} 

// Region class is similar
```

However, this is not very defensive. For example, a user of this class can pass a `null` to either of the methods, thus violating the multiplicity of the relationship.

Implement the two classes using a more defensive approach. Take note of the bidirectional link which requires us to preserve referential integrity at all times.

<div slot="answer">

In this solution, we assume `Regions` can be created without `Players` (note that we cannot be 100% defensive all the time). The usage will be something like this:

```java
Region r1 = new Region();
Player p1 = new Player(r1);
Region r2 = new Region();
Player p2 = new Player(r2);
p1.setRegion(r2);
r1.setPlayer(p2);
```

Here are the two classes.  Get methods are omitted as they are simple.  Note how much extra effort we need to be defensive.

```java
public class Region {
    private Player myPlayer;

    public Region() {
        // initialise region
    }

    public void setPlayer(Player newPlayer) {
        if (newPlayer == null) {
            stopSystemWithErrorMessage("Multiplicity violation");
        }
        if (myPlayer == newPlayer) {
            return; // same player
        }
        if (myPlayer != null) {
            // I already have a Player!
            myPlayer.removeRegion(this);
        }
        myPlayer = newPlayer;
        // set the reverse link
        myPlayer.setRegion(this);
    }

    public void removePlayer(Player disconnectingPlayer) {
        if (myPlayer == disconnectingPlayer){
            myPlayer = null;
        } else {
            stopSystemWithErrorMessage("Unknown Player trying to disconnect");
        }
    }

    private void stopSystemWithErrorMessage(String msg) {
        ...
    }
}
```

```java
public class Player {
    private Region myRegion;

    public Player(Region region) {
        setRegion(region);
    }

    public void setRegion(Region newRegion) {
        if (newRegion == null) {
            stopSystemWithErrorMessage("Multiplicity violation");
        }
        if (myRegion == newRegion) {
            return; // no change in Region!
        }
        if (myRegion != null) {
            // previous region exists
            myRegion.removePlayer(this);
        }
        myRegion = newRegion;
        
        // set the reverse link
        myRegion.setPlayer(this);
    }

    public void removeRegion(Region disconnectingRegion) {
        if (myRegion == disconnectingRegion) {
            myRegion = null;
        }
    }

    private void stopSystemWithErrorMessage(String msg) {
        ...
    }
}
```

Note that the above code stops the system when the multiplicity is violated. Alternatively, we can throw an exception and let the caller handle the situation.

</div>
</question>
</panel>
