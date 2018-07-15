<div id="title">

#### What

</div>

<span id="prereqs"></span>

<span id="outcomes">{{ icon_outcome }} Can explain defensive programming</span>

<div id="body">

**A defensive programmer codes under the assumption "if we leave room for things to go wrong, they _will_ go wrong".** Therefore, a defensive programmer proactively tries to eliminate any room for things to go wrong.

<tip-box> 

{{ icon_example }} Consider a `MainApp#getConfig()` a method that returns a `Config` object containing configuration data. A typical implementation is given below:
```java
class MainApp{
    Config config;
    
    /** Returns the config object */
    Config getConfig(){
        return config;
    }
}
```
If the returned Config object is not meant to be modified, a defensive programmer might use a more _defensive_ implementation given below. %%&nbsp; This is more defensive because even if the returned `Config` object is modified (although it is not meant to be) it will not affect the `config` object inside the `MainApp` object.%%
```java
    /** Returns a copy of the config object */
    Config getConfig(){
        return config.copy(); //return a defensive copy
    }
``` 

</tip-box>

</div>

<div id="extras">
</div>