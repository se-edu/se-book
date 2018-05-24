<tip-box>

:package: Example: 

![][Bad]
```java
return ((length < MAX_LENGTH) || (previousSize != length)) && (typeCode == URGENT);
```

![][Good]
```java

boolean isWithinSizeLimit = length < MAX_LENGTH;
boolean isSameSize = previousSize != length;
boolean isValidCode = isWithinSizeLimit || isSameSize;

boolean isUrgent = typeCode == URGENT;

return isValidCode && isUrgent;
```

</tip-box>