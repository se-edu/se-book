```java
void printOwing() {
    printBanner();

    //print details
    System.out.println("name:	" + name);
    System.out.println("amount	" + getOutstanding());
}
```
{{ icon_output }}
```java
void printOwing() {
    printBanner();
    printDetails(getOutstanding());
}

void printDetails (double outstanding) {
    System.out.println("name:	" + name);
    System.out.println("amount	" + outstanding);
}
```