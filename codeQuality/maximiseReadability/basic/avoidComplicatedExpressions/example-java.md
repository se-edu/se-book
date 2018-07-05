<tip-box>

{{ icon_example }} Example: 

{{bad}}
```java
return ((length < MAX_LENGTH) || (previousSize != length)) && (typeCode == URGENT);
```

{{good}}
```java

boolean isWithinSizeLimit = length < MAX_LENGTH;
boolean isSameSize = previousSize != length;
boolean isValidCode = isWithinSizeLimit || isSameSize;

boolean isUrgent = typeCode == URGENT;

return isValidCode && isUrgent;
```

</tip-box>