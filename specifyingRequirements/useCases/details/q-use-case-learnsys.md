<link rel="stylesheet" href="{{baseUrl}}/css/common.css">

<panel header="{{ icon_Q_A }} LearnSys – reply to post use case">
<question has-input="true">

Complete the following use case (MSS, extensions, etc.).

<tip-box>

* System: LearnSys (an online Learning Management System)
* Use case: UC01 reply to post in the forum
* Actor: Student

</tip-box>

<div slot="answer">

<tip-box>
  <div>
    <ul>
      <li>System: LearnSys</li>
      <li>Use case: UC01 reply to post in the forum</li>
      <li>Actor: Student</li>
      <li>Preconditions: Student is logged in and has permission to post in the forum. The post to which the Student replies already exists.</li>
      <li>MSS:
        <ol>
          <li>Student chooses to reply to an existing post.</li>
          <li>LearnSys requests the user to enter post details.</li>
          <li>Student enters post details.</li>
          <li>Student submits the post.</li>
          <li>LearnSys displays the post.</li>
          <li class="custom-bullet-point">Use case ends.</li>
        </ol>
      </li>
      <li> Extensions:
        <ol class="custom-bullet-list">
          <li>*a. Internet connection goes down.
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>*b. LearnSys times out
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>3a. Student chooses to ‘preview’ the post.
            <ol class="custom-bullet-list">
              <li>3a1. LearnSys shows a preview.</li>
              <li>3a2. User chooses to go back to editing.</li>
              <li>Use case resumes at step 3.</li>
            </ol>
          </li>
          <li>3b. Student chooses to attach picture/file
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>3c. Student chooses to save the post as a draft.
            <ol class="custom-bullet-list">
              <li>3c1. LearnSys confirms draft has been saved.</li>
              <li>Use case ends.</li>
            </ol>
          </li>
          <li>3d. Student chooses to abort the operation.
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>4a. The post being replied to is deleted by the owner while the reply is being entered.
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
          <li>4b. Unacceptable data entered.
            <ol class="custom-bullet-list">
              <li>...</li>
            </ol>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</tip-box>

</div>
</question>
</panel>
