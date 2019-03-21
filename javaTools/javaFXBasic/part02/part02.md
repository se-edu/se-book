# JavaFx 9 tutorial - Part 2: Model and TableView

## Introduction

In this tutorial, we will create the other parts of the application (mainly the model and the controller). We will also use `ObservableList` and `*Property` to bind our list of new model's `Person`s, and their individual details, to the view, with the controller as the "middleman".

<img src="{{baseUrl}}/javaTools/javaFXBasic/part02/images/address-app-final-screenshot.png" height="350" />
<p/>

## Create the Model class

We need a model class in order to hold information about the people in our address book. Add a new class to the `model` package (`seedu.address.model`) called `Person`. The `Person` class will encapsulate the details of an individual person such as name, address and birthday. Add the following code to the class. The JavaFX specifics will be explained after the code snippet.

**Person.java**
```java
package seedu.address.model;

import java.time.LocalDate;

import javafx.beans.property.IntegerProperty;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleIntegerProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

/**
 * Model class for a Person.
 */
public class Person {

    private final StringProperty firstName;
    private final StringProperty lastName;
    private final StringProperty street;
    private final IntegerProperty postalCode;
    private final StringProperty city;
    private final ObjectProperty< LocalDate > birthday;

    /**
     * Default constructor.
     */
    public Person() {
        this(null, null);
    }

    /**
     * Constructor with some initial data.
     */
    public Person(String firstName, String lastName) {
        this.firstName = new SimpleStringProperty(firstName);
        this.lastName = new SimpleStringProperty(lastName);

        // Some initial dummy data, just for convenient testing.
        this.street = new SimpleStringProperty("some street");
        this.postalCode = new SimpleIntegerProperty(1234);
        this.city = new SimpleStringProperty("some city");
        this.birthday = new SimpleObjectProperty< LocalDate >(LocalDate.of(1999, 2, 21));
    }

    public String getFirstName() {
        return firstName.get();
    }

    public void setFirstName(String firstName) {
        this.firstName.set(firstName);
    }

    public StringProperty firstNameProperty() {
        return firstName;
    }

    public String getLastName() {
        return lastName.get();
    }

    public void setLastName(String lastName) {
        this.lastName.set(lastName);
    }

    public StringProperty lastNameProperty() {
        return lastName;
    }

    public String getStreet() {
        return street.get();
    }

    public void setStreet(String street) {
        this.street.set(street);
    }

    public StringProperty streetProperty() {
        return street;
    }

    public int getPostalCode() {
        return postalCode.get();
    }

    public void setPostalCode(int postalCode) {
        this.postalCode.set(postalCode);
    }

    public IntegerProperty postalCodeProperty() {
        return postalCode;
    }

    public String getCity() {
        return city.get();
    }

    public void setCity(String city) {
        this.city.set(city);
    }

    public StringProperty cityProperty() {
        return city;
    }

    public LocalDate getBirthday() {
        return birthday.get();
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday.set(birthday);
    }

    public ObjectProperty< LocalDate > birthdayProperty() {
        return birthday;
    }
}
```

### Explanations

* With JavaFX, it is common to use `*Property` for all fields of a model class. A `Property` allows us, for example, to automatically be notified when the `lastName` or any other variable is changed. This helps us keep the view in sync with the data.
* To learn more about `*Property`, refer to [Using JavaFX Properties and Binding](http://docs.oracle.com/javase/8/javafx/properties-binding-tutorial/binding.htm)
* `LocalDate`, the type that we are using for `birthday`, is part of the [new Date and Time API since JDK 8](http://docs.oracle.com/javase/tutorial/datetime/iso/)

## A List of Persons

The main data that our application manages is simply a bunch of persons. Let's create a list of `Person` objects inside the `MainApp` class. All other controller classes will later get access to that central list inside the `MainApp`.

### ObservableList

We are working with JavaFX view classes that need to be informed about any changes made to the list of persons. This is important, since otherwise the view would not be in sync with the data. For this purpose, JavaFX introduces some new [Collection classes](http://docs.oracle.com/javase/8/javafx/collections-tutorial/collections.htm).

Among all these collections, we need the `ObservableList`. To create a new `ObservableList`, add the following code at the beginning of the `MainApp` class. We'll also add a constructor that creates some sample data and a public getter method:

**MainApp.java**
```java
// ... AFTER THE OTHER VARIABLES ...

/**
* The data as an observable list of {@link Person}.
*/
private ObservableList< Person > personData = FXCollections.observableArrayList();

    /**
     * Constructor
     */
    public MainApp() {
        // Add some sample data
        personData.add(new Person("Hans", "Muster"));
        personData.add(new Person("Ruth", "Mueller"));
        personData.add(new Person("Heinz", "Kurz"));
        personData.add(new Person("Cornelia", "Meier"));
        personData.add(new Person("Werner", "Meyer"));
        personData.add(new Person("Lydia", "Kunz"));
        personData.add(new Person("Anna", "Best"));
        personData.add(new Person("Stefan", "Meier"));
        personData.add(new Person("Martin", "Mueller"));
    }

    /**
     * Returns the data as an observable list of {@link Person}.
     */
    public ObservableList< Person > getPersonData() {
        return personData;
    }

    // ... THE REST OF THE CLASS ...
```

## The PersonOverviewController

We have our model and view. Let's get our data into our table. We'll need a controller for our `PersonOverview.fxml` to act as a "middleman" for the model and view.

Create a normal Java class inside the `view` package called `PersonOverviewController`.

<tip-box type="tip">

Note: We must put the class inside the same package as `PersonOverview.fxml`, otherwise the SceneBuilder won't be able to find it.

</tip-box>

We will add some instance variables that give us access to the table and the labels inside the view. The fields and some methods have a special `@FXML` annotation. This is necessary in order for the `.fxml` file to have access to private fields and private methods. After we have everything set up in the `.fxml` file, the application will automatically fill the variables when the `.fxml` file is loaded.

So let's add the following code:

<tip-box type="tip">

Note: Remember to always use the `javafx` imports, NOT `awt` or `swing`.

</tip-box>

**PersonOverviewController.java**
```java
package seedu.address.view;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import seedu.address.MainApp;
import seedu.address.model.Person;

public class PersonOverviewController {
    @FXML
    private TableView< Person> personTable;
    @FXML
    private TableColumn< Person, String> firstNameColumn;
    @FXML
    private TableColumn< Person, String> lastNameColumn;

    @FXML
    private Label firstNameLabel;
    @FXML
    private Label lastNameLabel;
    @FXML
    private Label streetLabel;
    @FXML
    private Label postalCodeLabel;
    @FXML
    private Label cityLabel;
    @FXML
    private Label birthdayLabel;

    // Reference to the main application.
    private MainApp mainApp;

    /**
     * The constructor. It is called before the initialize() method.
     */
    public PersonOverviewController() {
    }

    /**
     * Initializes the controller class. This method is automatically called
     * after the fxml file has been loaded.
     */
    @FXML
    private void initialize() {
        // Initialize the person table with the two columns.
        firstNameColumn.setCellValueFactory(cellData -> cellData.getValue().firstNameProperty());
        lastNameColumn.setCellValueFactory(cellData -> cellData.getValue().lastNameProperty());
    }

    /**
     * Is called by the main application to give a reference back to itself.
     */
    public void setMainApp(MainApp mainApp) {
        this.mainApp = mainApp;

        // Add observable list data to the table
        personTable.setItems(mainApp.getPersonData());
    }
}
```

### Explanations

* All fields and methods where the `.fxml` file needs access must be annotated with `@FXML`.
  * Actually, only if they are private, but it's better to have them private and mark them with the annotation!
* The `initialize()` method is automatically called after the `.fxml` file has been loaded. At this time, all the FXML fields should have been initialized already.
* The `setCellValueFactory(...)` that we set on the table colums are used to determine which field inside the `Person` objects should be used for the particular column. The arrow `->` indicates that we're using a Java 8 feature called Lambdas. (Another option would be to use a [`PropertyValueFactory`]({{ java_api }}/javafx/scene/control/cell/PropertyValueFactory.html), but this is not type-safe).

<tip-box type="tip">

Note:

We're only using `StringProperty` values for our table columns in this example. When you want to use `IntegerProperty` or `DoubleProperty`, the `setCellValueFactory(...)` must have an additional `asObject()`:

```java
myIntegerColumn.setCellValueFactory(cellData ->
    cellData.getValue().myIntegerProperty().asObject());
```

This is necessary because of a bad design decision of JavaFX (see [this discussion](https://community.oracle.com/thread/2575601) for more details).

</tip-box>

### Connecting MainApp with the PersonOverviewController

The `setMainApp(...)` method must be called by the `MainApp` class. This gives us a way to access the `MainApp` object and get the list of `Persons` and other things. Add the following three lines to `showPersonOverview()` the method:

**MainApp.java - additional lines to add to showPersonOverview() method**

```java
// (.... root layout statement goes here ....)

// Give the controller access to the main app.
    PersonOverviewController controller = loader.getController();
    controller.setMainApp(this);

// (.... catch statement goes here ....)
```

Your `showPersonOverview()` method in `MainApp` should now look like this:

**MainApp.java - new showPersonOverview() method**

```java
/**
* Shows the person overview inside the root layout.
*/
public void showPersonOverview() {
    try {
        // Load person overview.
        FXMLLoader loader = new FXMLLoader();
        loader.setLocation(MainApp.class.getResource("view/PersonOverview.fxml"));
        AnchorPane personOverview = loader.load();

        // Set person overview into the center of root layout.
        rootLayout.setCenter(personOverview);

        // Give the controller access to the main app.
        PersonOverviewController controller = loader.getController();
        controller.setMainApp(this);
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

## Hook the View to the controller

We're almost there! But one thing is missing: We haven't told our `PersonOverview.fxml` file which controller to use, and which element should match to which field inside the controller.

1. Open `PersonOverview.fxml` with the SceneBuilder.
2. Open the Controller group on the left side (just below Hierarchy), and select the `seedu.address.view.PersonOverviewController` as the controller class.

<img src="{{baseUrl}}/javaTools/javaFXBasic/part02/images/hook-view-controller.png" height="350" />
<p/>

3. Select the `TableView` in the Hierarchy group.
4. In the Inspector view, under the Code group, set 'fx:id' to `personTable`.

<img src="{{baseUrl}}/javaTools/javaFXBasic/part02/images/hook-view-person-table.png" height="250" />
<p/>

5. Do the same for the table columns. Select `firstNameColumn` and `lastNameColumn` for the 'fx:id' respectively.
6. For each label in the second column of the grid pane, choose the corresponding 'fx:id'.

<img src="{{baseUrl}}/javaTools/javaFXBasic/part02/images/hook-view-labels.png" width="650" />
<p/>

7. Save the `.fxml` file.

## Opening up the `PersonOverviewController` to JavaFx

If you try and run the application now, you will encounter the following error:

```
javafx.fxml.LoadException: ...

...

Caused by: java.lang.IllegalAccessException: class javafx.fxml.FXMLLoader$ValueElement (in module javafx.fxml) cannot access class seedu.address.view.PersonOverviewController (in module AddressApp) because module AddressApp does not export seedu.address.view to module javafx.fxml
```

This is because JavaFx is unable to access our `PersonOverviewController` class.

To fix this, add this line of code to `src/module-info.java`:

```java
module AddressApp {
    ... 

    opens seedu.address.view;
}
```

The file should now look something like this:

**module-info.java**

```java
module AddressApp {
    requires javafx.graphics;
    requires javafx.fxml;
    requires javafx.controls;

    exports seedu.address;
    opens seedu.address.view;
}
```

## Start the Application

When you start your application now, you should see something like this:

<img src="{{baseUrl}}/javaTools/javaFXBasic/part02/images/address-app-final-screenshot.png" height="350" />
<p/>

Congratulations! The application now shows the list of `Person`s in the view!

You may notice that selecting a person in the `TableView` does nothing to the labels at the right side. That is because the user interaction portion has not been programmed yet, which we will cover in the next part of the tutorial.
