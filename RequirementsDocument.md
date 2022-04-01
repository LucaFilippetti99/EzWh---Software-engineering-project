
 #Requirements Document 

Date: 22 march 2022

Version: 0.0

 
| Version number | Change |
| ----------------- |:-----------|
| | | 


# Contents

- [Informal description](#informal-description)
- [Stakeholders](#stakeholders)
- [Context Diagram and interfaces](#context-diagram-and-interfaces)
	+ [Context Diagram](#context-diagram)
	+ [Interfaces](#interfaces) 
	
- [Stories and personas](#stories-and-personas)
- [Functional and non functional requirements](#functional-and-non-functional-requirements)
	+ [Functional Requirements](#functional-requirements)
	+ [Non functional requirements](#non-functional-requirements)
- [Use case diagram and use cases](#use-case-diagram-and-use-cases)
	+ [Use case diagram](#use-case-diagram)
	+ [Use cases](#use-cases)
    	+ [Relevant scenarios](#relevant-scenarios)
- [Glossary](#glossary)
- [System design](#system-design)
- [Deployment diagram](#deployment-diagram)

# Informal description
Medium companies and retailers need a simple application to manage the relationship with suppliers and the inventory of physical items stocked in a physical warehouse. 
The warehouse is supervised by a manager, who supervises the availability of items. When a certain item is in short supply, the manager issues an order to a supplier. In general the same item can be purchased by many suppliers. The warehouse keeps a list of possible suppliers per item. 

After some time the items ordered to a supplier are received. The items must be quality checked and stored in specific positions in the warehouse. The quality check is performed by specific roles (quality office), who apply specific tests for item (different items are tested differently). Possibly the tests are not made at all, or made randomly on some of the items received. If an item does not pass a quality test it may be rejected and sent back to the supplier. 

Storage of items in the warehouse must take into account the availability of physical space in the warehouse. Further the position of items must be traced to guide later recollection of them.

The warehouse is part of a company. Other organizational units (OU) of the company may ask for items in the warehouse. This is implemented via internal orders, received by the warehouse. Upon reception of an internal order the warehouse must collect the requested item(s), prepare them and deliver them to a pick up area. When the item is collected by the other OU the internal order is completed. 

EZWH (EaSy WareHouse) is a software application to support the management of a warehouse.



# Stakeholders

| Stakeholder name  | Description | 
| ----------------- |:-----------:|
| Easy Warehouse administrator | Manages the software and is external to the company |
| Warehouse manager | Manages the warehouse, he manages availability of items and keeps a list of possible suppliers per item. Keeps trace of physical position of items in the warehouse and the available space. | 
| Warehouse Worker | Person who physically moves the items in the warehouse and loads them on the system providing info about the location in the warehouse |
| Suppliers | Companies that supply items to the warehouse |
| Quality office | Workers that perform quality control on items |
| Organizational Unit Salesman | Salesmen belonging to different areas of company that can perform orders to the warehouse |
| Competitors | Other companies that offer the same service |
| Delivery Service | Company department that handles deliveries | 
| Company Intranet | Company network that allows communication between departments |
| Web Hosting | Hosting service for the web application |
| Payment service | Manages payments to the suppliers |


# Context Diagram and interfaces

## Context Diagram
\<Define here Context diagram using UML use case diagram>

\<actors are a subset of stakeholders>

## Interfaces
\<describe here each interface in the context diagram>

\<GUIs will be described graphically in a separate document>

| Actor | Logical Interface | Physical Interface  |
| ------------- |:-------------:| -----:|
|   Software Administrator  | Web GUI (Administration and Configuration Panel) | Screen, Keyboard, Mouse |
| Warehouse Manager | Web GUI (Warehouse administration and overview) | Screen, Keyboard, Mouse |
| Warehouse Worker | Web GUI (Warehouse items store) | Screen, Keyboard, Mouse, Bar code reader |
| Suppliers | Email System | Screen, Keyboard, Mouse |
| Quality Officer | Web GUI | Screen, Keyboard, Mouse, Bar code reader| 
| Organizational Unit Salesman | Web GUI | Screen, Keyboard, Mouse| 
| Item | Bar code | Laser Beam |

# Stories and personas
\<A Persona is a realistic impersonation of an actor. Define here a few personas and describe in plain text how a persona interacts with the system>

|	Actor	|Story|
| :-: | :-: |
|Warehouse Manager| Steven is 42 and work as a manager for a medium company. He is bordened of work and every day he has to face different problems. Because of his huge responsibilities he sometimes can’t sleep at night. But after his company started using the Easy Warehouse software Steven had time back for himself.	|
|Warehouse Worker |	Michael is 40 years old and works as the move-that-heavy-box-over-there guy at a warehouse. He hates this job. His back aches more and more each day and it pays little to nothing, but he has to put food on the table for his two kids and that's the only thing that keeps him going. Recently his boss, that a-hole Steven, introduced some sort of software to manage the warehouse, which is nice. Now Michael bippity-boppities his boxes with that laser-pistol thingy and the system automatically keeps track of them. He's happier now as he doesn't need to report and see Steven's ugly face that often, and if he screws something up, he can always blame it on the software.|
|Supplier | Dwight is 43 years old and is a salesman at Dunder Mifflin Inc., a paper and packaging supply company. He is a hard worker but he could do much more if only the sales process wasn't so slow and time consuming. He wastes hours and hours on the phone to agree on orders with his customers and for any changes he is forced to call customers again to communicate the changes. But since his customers started using the EZWH software, he conveniently receives supply orders by email and with just one click sends the order directly to the warehouse.  |
|Quality Officer	| Peter is 48 and works in the quality office of a warehouse. He loves this work and he is really involved in this. He is responsible in verifying that items received by the warehouse achieve strict quality parameter. Peter is really accurate and careful in this job and spends almost all of his attention to check each single item with different instruments. For this reason he is not interested in waste a lot of time in directly update on the pc specific test failures and acceptance of each item. When he has the result of quality tests, he wants to quickly report these in order to make warehouse workers able to physically manage items just checked.	|
|Organizational Unit Salesman	| TODO |

# Functional and non functional requirements

## Functional Requirements

| ID        | Description  |
| ------------- |:-------------:| 
|  FR1     |  Manage users|
| FR1.1    | Define a new user, or modify an existing user |
| FR1.2     | Delete a user |
|FR1.3     |    List all users   |
|FR1.4    |    Search a user   |
|  FR2     |  Manage roles. Authorize access to functions to specific actors according to their roles |
|	FR3 	| User Login |
| FR3.1	|	Password Recovery |
|  FR4     | Manage orders to suppliers  |
 |  FR4.1     | List all suppliers  |
 |  FR4.2     | Submit a new payment to a supplier|
 |  FR4.3     | List previous payment |
 | 	FR4.4	  | Insert a new supplier |
 |  FR4.5     | Delete a supplier|
 |  FR4.6     | Change supplier information|
 |  FR4.7     | Create a new order |
 |  FR4.8     | List all orders|
 |  FR4.9     | List all orders to a specific supplier |
 |  FR4.10    | List pending orders |
|  FR5    | Manage items catalogue |
 |  FR5.1   | Define new item |
 |  FR5.2   | Remove item |
 |  FR5.3    | Show item details  |
 |	FR5.4	|	Edit item details |
|  FR6  | Manage physical items information  |
|	FR6.1  | Load new items into warehouse |
 |  FR6.2  | Show item position in the warehouse  |
 |  FR6.3  | Show item available quantity |
 |  FR6.4  | Report damaged items |
 |  FR6.5  | Update actual items position |
 |  FR6.6    | Show availability of physical space in the warehouse |
|  FR7     | Manage internal order requests  |
 |  FR7.1   | Submit new internal order |
 |	FR7.2	| Create shipping label for new order and submit to delivery service |
 |  FR7.3   | List pending internal order  |
 |  FR7.4   | List all internal order  |
|  FR8   | Manage quality tests  |
 |  FR8.1     | Add new specific quality tests  |
 |  FR8.2     | Insert quality tests result  |
 |  FR8.3     | Select items to be tested after order creation  |
 |  FR8.4     | List tests needed for each item |
 |  FR8.5     | Show quality tests result |

## Non Functional Requirements

| ID        | Type (efficiency, reliability, ..)           | Description  | Refers to |
| ------------- |:-------------:| :-----:| -----:|
|  NFR1     | Usability | Application should be used with no specific training for the users | All FR |
|  NFR2     | Performance | All functions should complete in < 0.5 sec  | All FR |
|  NFR3		| Reliability | Functions that change availability of items should implement mechanisms for multiple access from different users that don't cause warehouse inconsistency | FR5, FR6, FR7 |
|  NFR4     | Portability | The application should be accessed by Chrome (version 81 and more recent), and Safari (version 13 and more recent) (this covers around 80% of installed browsers); and from the operating systems where these browsers are available (Android, IoS, Windows, MacOS, Unix). As for devices, the application should be usable on smartphones (portrait) and PCs (landscape). | All FR |
|  NFR5     | Localisation | Decimal numbers use . (dot) as decimal separator |All FR|
| NFR6 | Reliability | Warehouse Database needs a periodic backup | All FR |

# Use case diagram and use cases

Administrator: //Michele
#Create User
#Modify User
#Delete User
#Manage user's role

User (Manager/Worker/Quality officer/OU Salesman):
#Login //Maciej
Password Recovery

Manager --> Supplier: //Luca
#Create new order (payment) + scenario
#Insert a new supplier
#Delete a supplier
-Edit a supplier

Manager: //Alessandro
#Define new item
-Remove item
#Edit item

Worker: //Maciej
#Load new items in warehouse -> Define the position for the new item
-Search an item in the warehouse
#Update item position in the warehouse
?Report damaged items
#Submit new internal order -> Shipping label to delivery service //Alessandro

Quality officer
#Insert quality test result + scenario //Michele

## Use case diagram
\<define here UML Use case diagram UCD summarizing all use cases, and their relationships>


\<next describe here each use case in the UCD>

### Use case 1, UC1
|				|				|
| ------------- |:-------------:|
| Actors Involved        |  Warehouse manager,Supplier |
|  Precondition     | Requested item is in short supply. Manager has already a list of all possible supplier for this item. Suitable physical space is available |
|  Post condition     | Order is executed and sent to supplier (email??) |
|  Nominal Scenario     | The manager of the system create a new order request. He choose a specific supplier from a provided list and enters the fields  |
|  Variants     | Manager orders an item despite is not in short supply.   |
|  Exceptions     | Unavailability of physical space in the warehouse. |

### Use case 1, UC1
| Actors Involved        |  |
| ------------- |:-------------:| 
|  Precondition     | \<Boolean expression, must evaluate to true before the UC can start> |
|  Post condition     | \<Boolean expression, must evaluate to true after UC is finished> |
|  Nominal Scenario     | \<Textual description of actions executed by the UC> |
|  Variants     | \<other normal executions> |
|  Exceptions     | \<exceptions, errors > |

##### Scenario 1.1 

\<describe here scenarios instances of UC1>

\<a scenario is a sequence of steps that corresponds to a particular execution of one use case>

\<a scenario is a more formal description of a story>

\<only relevant scenarios should be described>



| Scenario 1.1 | |
| ------------- |:-------------:| 


##### Scenario 1.2

##### Scenario 1.x

### Use case 2, UC2
..

### Use case x, UCx
..



# Glossary

\<use UML class diagram to define important terms, or concepts in the domain of the system, and their relationships> 

\<concepts are used consistently all over the document, ex in use cases, requirements etc>

# System Design
\<describe here system design>

\<must be consistent with Context diagram>

# Deployment Diagram 

\<describe here deployment diagram >




