<panel header=":one: Able to explain the singleton pattern" expandable>
  <panel header="Question 1" minimized>
  <Question>

  Which of the following is an ideal situation for using Singleton pattern?

  - ( ) Utility methods used by many class in the application.
  - ( ) A database manager shared by different component of the application.
  - ( ) A constant String defined in every controller.  

  <div slot="answer">

  - ( ) Utility methods used by many class in the application.
  - (X) Database manager shared by different component of the application.
  - ( ) A constant String defined in every controller.

  Database is a shared resources here, and by using singleton pattern, we have better control
  over the database operations.

  </div>
  </Question>

  </panel>
</panel>
