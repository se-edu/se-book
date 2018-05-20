```java
void printOwing() {
    printBanner();

    //print details
    System.out.println("name:	" + name);
    System.out.println("amount	" + getOutstanding());
}
```
:arrow_heading_down:
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