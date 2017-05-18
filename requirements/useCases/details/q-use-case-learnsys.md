<panel header="Q: LearnSys – reply to post use case :two:">
<question has-input="true">

Complete the following use case (MSS, extensions, etc.).
```
System: LearnSys
Use case: UC01 reply to post in the forum
Actor: Student
```

<div slot="answer">

```
System: LearnSys
Use case: UC01 reply to post in the forum
Actor: Student
Preconditions: Student is logged in and has permission to post in the forum. The post to which the Student replies already exists.
Guarantees: * MSS -> post will be added to the forum.
MSS:
	1. Student chooses to reply to an existing post.
	2. LearnSys requests the user to enter post details.
	3. Student enters post details.
	4. Student submits the post.
	5. LearnSys displays the post.
         Use case ends.

Extensions:
	*a. Internet connection goes down.
         …
	*b. LearnSys times out.
         …
	3a. Student chooses to ‘preview’ the post.
  	  	3a1. LearnSys shows a preview.
  	  	3a2. User chooses to go back to editing.
  	  	Use case resumes at step 3.
	3b. Student chooses to attach picture/file
         …
	3c. Student chooses to save the post as a draft.
      	       3c1. LearnSys confirms draft has been saved.
      	       Use case ends.
	3d. Student chooses to abort the operation.
         …
	4a. The post being replied to is deleted by the owner while the reply is being entered.
         …
	4b. Unacceptable data entered.
         …
```

</div>
</question>
</panel>
