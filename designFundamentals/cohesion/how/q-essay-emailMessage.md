<panel header="{{ icon_Q_A }} Which class is more cohesive?">
<question has-input="true">

Compare the cohesion of the following two versions of the `EmailMessage` class. Which one is more cohesive and why?

```java
// version-1
class EmailMessage {
    private String sendTo;
 	  private String subject;
    private String message;

    public EmailMessage(String sendTo, String subject, String message) {
        this.sendTo = sendTo;
        this.subject = subject;
        this.message = message;
    }

    public void sendMessage() {
        // sends message using sendTo, subject and message
    }
}

// version-2
class EmailMessage {
    private String sendTo;
    private String subject;
    private String message;
    private String username;

    public EmailMessage(String sendTo, String subject, String message) {
        this.sendTo = sendTo;
        this.subject = subject;
        this.message = message;
    }

    public void sendMessage() {
        // sends message using sendTo, subject and message
    }

    public void login(String username, String password) {
        this.username = username;
        // code to login
    }
}
```

<div slot="answer">

Version 2 is less cohesive.

Explanation: Version 2 is handling functionality related to login, which is not directly related to the concept of ‘email message’ that the class is supposed to represent. On a related note, we can improve the cohesion of both versions by removing the sendMessage functionality. Although sending message is related to emails, this class is supposed to represent an email message, not an email server.

</div>
</question>
</panel>
