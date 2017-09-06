<div id="title">

#### Dependencies :three:

</div>

<div id="body">

In a UML class diagram, a **dependency is a weaker form of an association where there is an interactions between objects that do not result in a long-term relationship** between the said objects.

<tip-box> 

:package: In the code below, `Foo` has a dependency on `Bar` but it is not an association because it is only a <tooltip content="temporary">transient</tooltip> interaction and there is no long term relationship between a `Foo` object and a `Bar` object. %%i.e. the `Foo` object does not keep the `Bar` object it receives as a parameter%%.

```java
class Foo{
    
    int calcualte(Bar bar){
        return bar.getValue();
    }
}

class Bar{
    int value;
    
    int getValue(){
        return value;
    }
}

```

</tip-box>

**UML uses a dashed arrow to show dependencies.**

<img src="{{baseUrl}}/uml/classDiagrams/dependencies/what/images/notation.png" width="350" />
<p/>

<tip-box> 

:package: Two examples of dependencies:

<img src="{{baseUrl}}/uml/classDiagrams/dependencies/what/images/examples.png" width="450" />
<p/>

</tip-box>

</div>

<div id="extras">
</div>

</div>
