
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
 | 	FR7.2	| Process internal order |
 |	FR7.3	| Create shipping label for new order and submit to delivery service |
 |  FR7.4   | List pending internal order  |
 |  FR7.5   | List all internal orders  |
 |  FR7.6   | List all orders of a specific item |
 |  FR7.7   | Edit shipping information of an order|
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

## Use case 1, UC1 - Manage users and rights

| Actors Involved        | Administrator |
| ------------- |:-------------:|
|  Precondition | EZWH administrator A logged in |
|  Post condition |  |
|  Nominal Scenario |  A defines a new user and specifies its role and access rights  |
|  Variants     | A modifies fields, role or access rights of an existing user |

##### Scenario 1.1

| Scenario |  Create user and define role and rights |
| ------------- |:-------------:| 
|  Precondition     | EZWH admin A exists and is logged in |
|  Post condition     | User X is created |
| Step#        | Description  |
|  1    |  A defines the credentials of the new User X |  
|  2    |  A selects the role and defines the access rights for the new user X |
|  3    |  A confirms the inserted data |


##### Scenario 1.2

| Scenario |  Delete user |
| ------------- |:-------------:| 
|  Precondition     | EZWH admin A exists and is logged in |
|  | User X exists |
|  Post condition     | User X deleted |
| Step#        | Description  |
|  1    |  A selects user X  |
|  2    |  X deleted from the system |

##### Scenario 1.3

| Scenario |  Modify user data, role and rights |
| ------------- |:-------------:| 
|  Precondition     | EZWH admin A exists and is logged in |
|  | User X exists |
|  Post condition     | X's data, role and rights updated |
| Step#        | Description  |
|  1    |  A selects user X  |
|  2    |  A modifies user's data and selects a new role and new access rights for X |
|  3    |  A confirms the inserted data |

## Use case 2, UC2 - Define position of new item
| Actors involved | Worker |
| ------------- |:-------------:|
| Precondition | Worker has items to store |
| | Worker W is logged into the system | 
| | The warehouse has sufficient storage space | 
| Post condition | The system records item's storage space |
| Nominal scenario | Worker assigns a storage space to an item |
| Variants | Update position of item in the warehouse | 

##### Scenario 2.1
| Scenario | Worker stores item successfully |
| ------------- |:-------------:|
| Precondition | Worker has items to store | 
| | Worker W is logged into the system | 
| | The warehouse has sufficient storage space |
| Post condition | The system records item's storage space |
| Step | Description |
| 1 | The Worker provides to the system the id of the item being managed |
| 2 | The Worker provides to the system the id of the storage space to be assigned |
| 3 | The system informs the worker that the item can be stored and that the position has been recorded |
| 4 | The worker stores the item in the storage space |

##### Scenario 2.2
| Scenario | Worker can't store item |
| ------------- |:-------------:|
| Precondition | Worker has items to store |
| | Worker W is logged into the system |  
| | The warehouse has sufficient storage space |
| Post condition | The system records item's storage space |
| Step | Description |
| 1 | The Worker provides to the system the id of the item being managed |
| 2 | The Worker provides to the system the id of the storage space to be assigned |
| 3 | The system informs the worker that the item can't be stored in that space |
| 4 | The system informs the worker why the item can't be stored in that space |

## Use case 3, UC3 - Search an item in the warehouse
| Actors involved | Worker |
| ------------- |:-------------:|
| Precondition | An item is stored in the warehouse |
| | Worker W is logged into the system | 
| Post condition | The worker knows the position of the item | 
| Nominal scenario | Worker queries the EzWh system with item's identifying data and receives its position in return |

##### Scenario 3.1
| Scenario | Worker finds item in the warehouse |
| ------------- |:-------------:|
| Precondition | The item is stored in the warehouse |
| | Worker W is logged into the system | 
| Post condition | Worker knows the exact storage space of an item |
| Step | Description |
| 1 | The Worker provides to the system identifying information of an item |
| 2 | The EzWh system serches in the database for the item |
| 3 | The EzWh system provides information about the location of the searched item |


##### Scenario 3.2
| Scenario | Worker doesn't find item in the warehouse |
| ------------- |:-------------:|
| Precondition | Worker W is logged into the system | 	|
| Post condition | Worker knows that there's no item in the warehouse that matches the query |
| Step | Description |
| 1 | The Worker provides to the system identifying information of an item |
| 2 | The EzWh system serches in the database for the item |
| 3 | The EzWh system doesn't find the item and informs the worker that there's no such item in the warehouse. |

## Use case 4 - Login
| Actors Involved   | User |
| ------------- |:-------------:|
|  Precondition | User's account exists |
|  Post condition | User has access to his account |
|  Nominal Scenario | User identifies to the system |
|  Variants     | Identification data don't match an existing account |

##### Scenario 4.1
|   Scenario    |   Login is performed correctly    |
| ------------- |:-------------:|
|   Precondition | User account exists |
|   Postcondition | User is logged in |
| Step | Description |
| 1 | User enters the login interface |
| 2 | User provides the requested identification data |
| 3 | The system checks the provided identification data |
| 4 | The user has access to his account |

##### Scenario 4.2
| Scenario | Login is performed incorrectly |
| ------------- |:-------------:|
| Precondition | User doesn't have correct login data |
| Postcondition| User can't access the system |
| Step | Description |
| 1 | User enters the login interface |
| 2 | User provides the requested login data |
| 3 | The system checks the provided login |
| 4 | The system informs the user that the data provided don't match any existing account |

## Use case 5, UC5 - Process a new internal order
| Actors Involved  | Warehouse manager, Worker |
| ------------- |:-------------:| 
|  Precondition     | Warehouse has already received the internal order request |
|    | Manager M is logged in |
|    | Items are available|
|    | Items position is defined |
|    | Items destination is defined |
|  Post condition     | Requested items are packaged and ready to be delivered in the pick up area |
|  Nominal Scenario     | Internal orders are processed verifying items availability and setting up the instruction for workers, in order to submit the delivery |
|  Exceptions  | Items are unavailable |
|      | Delivery service is unavailable or does not satisfy items requests|

##### Scenario 5.1 
| Scenario |  Create a shipping label for delivery service |
| ------------- |:-------------:| 
|  Precondition     | Manager account exists and is logged in |
|  Precondition     | Warehouse has already received the internal order request |
|    | Items position is defined  |
|    | Items destination is defined  |
|  Post condition     | A shipping label is generated with the information about the destination of the internal order |
| Step#        | Description  |
|  1  |  Manager enters shipping address of the order |
|  2    |  Manager confirms the entered data |

##### Scenario 5.2  
| Scenario |  Reject the order |
| ------------- |:-------------:| 
|  Precondition     | Manager account exists and is logged in |
|      | Warehouse has already received the internal order request |
|  Post condition     | Manager notifies to the OU salesman that requested items are unavailable|
| Step#        | Description  |
|  1  |  Manager checks the requests |
|  2  | One or more of the requested items are unavailable
|  3  |  Manager sends a notification to the salesman about the unavailability of items |

## Use case 6, UC6 - Manage orders
| Actors Involved        | Warehouse Manager, Supplier |
| ------------- |:-------------:| 
|  Precondition  | One or more items in the warehouse are in short supply |
|  Post condition | Order is executed and the warehouse manager pays the supplier |
|  Nominal Scenario | The warehouse manager creates a new order request. He compiles the different fields and sends the request to supplier |
|  Exceptions    | Unavailability of physical space in the warehouse |

##### Scenario 6.1
| Scenario 6.1 | Create a new order |
| ------------- |:-------------:| 
|Precondition | Manager M is logged in | 
| | One or more items in the warehouse are in short supply |
|Postcondition | The supplier receives the order |
|Step#   |Description|
|1    | Manager selects the items for a new order request |
|2    | Manager selects one of the possible supplier from the list |
|3	  | Supplier receives the order and accepts it	 
|4 	  | Manager processes the payment of the order
|5    | Status of the order changes to "Processing" ?

## Use case 7, Manage suppliers
| Actors Involved | Warehouse manager |
| ------------- |:-------------:| 
|  Precondition  | Manager is logged in |
|  Post condition | The list of suppliers is updated |
|  Nominal Scenario | The warehouse manager inserts a new supplier (if not existing) in the software system. The manager also inserts some specific information about the supplier |
|  Variants     | Manager deletes supplier X from the list of suppliers|
|        | Manager edits some information about supplier X|

##### Scenario 7.1
| Scenario 7.1 |Insert a new supplier |
| ------------- |:-------------:| 
|Precondition | Supplier X is not on the list of suppliers | 
|  | Manager is logged in |
|Postcondition | Supplier X is added to the list of suppliers|
|Step#   |Description|
|1    | A supplier is chosen by the manager and added to the list of suppliers, along with additional information |
|2    | The changes are saved by the software |

##### Scenario 7.2
| Scenario 7.2 | Delete a supplier |
| ------------- |:-------------:| 
|Precondition | Supplier X is on the list of suppliers | 
|  | Manager is logged in |
|Postcondition | Supplier X is removed from the list of suppliers |
|Step#   |Description|
|1	    | Manager selects the supplier that he wants to delete |
|2    | The software checks that there are no incoming deliveries from that supplier |
|3    | The changes are saved by the software |

## Use case 8, UC8 - Manage Quality Tests of Items received by Suppliers

| Actors Involved        | Quality Officer, Supplier |
| ------------- |:-------------:|
|  Precondition | Quality Officer Q is logged in |
| | Item X belongs to a received order by Supplier S |
|  Post condition |  |
|  Nominal Scenario |  Q performs a quality test on X and sends it to the warehouse  |
|  Variants     | The quality test is negative and X is rejected and sent back to S |

##### Scenario 8.1

| Scenario |  Quality Test is positive and the Item is accepted |
| -------------- |:-------------:| 
|  Precondition     | Quality Officer Q is logged in |
| | Item X belongs to a received order by Supplier S |
|  Post condition     | Item X is stocked in the warehouse
| Step#        | Description  |
|  1    |  Q randomly (or following a specified algorithm) selects one or more items X among the items received in the order by S |
|  2    |  Q performs the quality tests associated to the item X |
|  3    |  Q reports tests results |
|  4    |  All tests are passed so X is sent to the warehouse |

##### Scenario 8.2

| Scenario |  Quality Test is negative and the Item is rejected |
| -------------- |:-------------:| 
|  Precondition     | Quality Officer Q is logged in |
| | Item X belongs to a received order by Supplier S |
|  Post condition     | Item X is returned to the Supplier
| Step#        | Description  |
|  1    |  Q randomly (or following a specified algorithm) selects one or more items X among the items received in the order by S |
|  2    |  Q performs the quality tests associated to the item X |
|  3    |  Q reports tests results |
|  4    |  One or more tests are negative |
| 5		| X is sent back to S with the test result containing the reason of the failure |

## Use case 9, UC9 - Submit an internal order to the warehouse
| Actors Involved  | Organizational unit salesman, Warehouse manager |
| ------------- |:-------------:| 
|  Precondition     | Salesman account already exists and is logged in |
|  Post condition     | Internal order is sent to the warehouse manager |
|  Nominal Scenario     | Internal orders are created by the salesman of an organizational unit of the company. He defines items needed and specify the delivery information |
|  Variants     | Order has already been created, salesman needs to change delivery information |
|  Exceptions  | Requested items are not available |
|    | Warehouse manager rejects the order|


# Glossary

\<use UML class diagram to define important terms, or concepts in the domain of the system, and their relationships> 

\<concepts are used consistently all over the document, ex in use cases, requirements etc>

# System Design
\<describe here system design>

\<must be consistent with Context diagram>

# Deployment Diagram 

\<describe here deployment diagram >




