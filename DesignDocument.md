# Design Document

Authors: Alessandro Gelsi, Luca Filippetti, Maciej Lampart, Michele Morgigno

Date: 26/04/2022

Version: 1.4

# Contents

- [Design Document](#design-document)
- [Contents](#contents)
- [Instructions](#instructions)
- [High level design](#high-level-design)
- [Low level design](#low-level-design)
- [Verification traceability matrix](#verification-traceability-matrix)
- [Verification sequence diagrams](#verification-sequence-diagrams)
  - [Scenario 1-1](#scenario-1-1)
    - [Create SKU S](#create-sku-s)
  - [Scenario 3-1](#scenario-3-1)
    - [Restock Order of SKU S issued by quantity](#restock-order-of-sku-s-issued-by-quantity)
  - [Scenario 5-2-3](#scenario-5-2-3)
    - [Record negative and positive test results of all SKU items of a RestockOrder](#record-negative-and-positive-test-results-of-all-sku-items-of-a-restockorder)
  - [Scenario 5-3-1](#scenario-5-3-1)
    - [Stock all SKU items of a RO](#stock-all-sku-items-of-a-ro)
  - [Scenario 6-1](#scenario-6-1)
    - [Return order of SKU items that failed quality test](#return-order-of-sku-items-that-failed-quality-test)
  - [Scenario 10-1](#scenario-10-1)
    - [Internal Order IO Completed](#internal-order-io-completed)

# Instructions

The design must satisfy the Official Requirements document

# High level design

EzWarehouse is based on a layered architecture with one single thread. It is composed by two main packages, relative to Gui and Data. Gui is linked to Data with a link from the one to the second. Data contains classes regarding information and model needed to be shown in the Gui. Gui package is used to draw the graphic element and interact with it.

```plantuml
    package "it.polito.ezwh"{
        package  it.polito.ezwh.gui{
    }

    package it.polito.ezwh.data{
    }

    it.polito.ezwh.gui ..> it.polito.ezwh.data
    }
```

# Low level design

```plantuml
@startuml

class SKU {
    -id: Integer
    -description: String
    -weight: double
    -volume: double
    -price: double
    -notes: String
    -availableQuantity: Integer

    +getId(): Integer
    +getDescription(): String
    +getWeight(): double
    +getPrice(): double
    +getNotes(): String
    +getTestDescriptors(): List<TestDescriptor>
    +getPosition(): Position
    +getAvailableQuantity(): Integer

    +setId(id: Integer): void
    +setDescription(description: String): void
    +setWeight(weight: double): void
    +setPrice(price: double): void
    +setNotes(notes: String): void
    +setPosition(pos: String): void
    +setAvailableQuantity(availableQuantity: Integer): void
}

class SkuItem {
    -RFID: String
    -available: Boolean
    -dateOfStock: Date

    +getSku(): SKU
    +getAvailable(): Boolean

    +setAvailable(available: Boolean): void
}

class Position {
    -PositionId: String
    -aisle: Integer
    -row: Integer
    -col: Integer
    -maxWeight: double
    -maxVolume: double
    -occupiedWeight: double
    -occupiedVolume: double

    +getPositionId(): String
    +getAisle(): Integer
    +getRow(): Integer
    +getCol(): Integer
    +getMaxWeight(): double
    +getMaxVolume(): double
    +getOccupiedWeight(): double
    +getOccupiedVolume(): double

    +setPositionId(PositionId: String): void
    +setAisle(aisle: Integer): void
    +setRow(row: Integer): void
    +setCol(col: Integer): void
    +setMaxWeight(maxWeight: double): void
    +setMaxVolume(maxVolume: double): void
    +setOccupiedWeight(occupiedWeight: double): void
    +setOccupiedVolume(occupiedVolume: double): void
}

class User
{
    -id: Integer
    -name: String
    -surname: String
    -email: String
    -type: String
    -password: String

    +getId(): Integer
    +getName(): String
    +getSurname(): String
    +getEmail(): String
    +getType(): String

    +setType(type: String)
    +setEmail(email: String)
    +setPassword(oldPassword: String, newPassword: String)
}

class TestDescriptor{
    -id : Integer
    -name : String
    -procedureDescription : String
    -SKUId: Integer

    +getId(): Integer
    +getIdTestDescriptor(): Integer
    +getSKUId(): Integer
    +getProcedure(): String

    +setProcedure(procedureDescription: String): void
}

class TestResult{
    -id : Integer
    -TestDescriptorId : Integer
    -RFID: String
    -date : Date
    -result: Boolean

    +getId(): Integer
    +getRFID(): String
    +getResult(): Boolean
    +getTestDescriptorId(): Integer
    +getDate(): String
}
class Item {
    -id: Integer
    -description: String
    -price: double
    -SKUId: Integer
    -SupplierId: Integer

    +getId(): Integer
    +getDescription(): String
    +getPrice(): double
    +getSKUId(): Integer
    +getSupplierId(): Integer

    +setDescription(description: String): void
    +setPrice(price: double): void
}

class RestockOrder{
    -RestockOrderId : Integer
    -issueDate: Date
    -state : String
    -trasportNote: String
    -productList : List<ProductRestockOrder>
    -skuItemList : Hashmap<SKUId, RFID>
    -SupplierId : Integer

    +getId(): Integer
    +getIssueDate(): Date
    +getTrasportNote(): String
    +getState() : String
    +getProductList() : List<ProductRestockOrder>
    +getSkuItemList(): List<rfid: String>
    +getSupplier():Supplier

}

class ProductRestockOrder{
    -price : double

    +getPrice(): double
    +setPrice(price: double): void
}
class ProductInternalOrder{
    -RFID : String

    +getRFID(): String
    +setRFID(RFID: String): void
}

class ProductOrder{
    -SKUId: Integer
    -description : String
    -quantity : Integer

    +getSKUId(): Integer
    +getQuantity(): Integer
    +getDescription(): String

    +setSKUId(SKUId: Integer)
    +setQuantity(quantity: Integer): void
    +setDescription(description: String): void
}

class ReturnOrder{
    -ReturnOrderId : Integer
    -returnDate : Date
    -productsOrderList : List<ProductOrder>
    -RestockOrderId : Integer

    +getReturnOrderId(): Integer
    +getReturnDate(): Date
    +getProductsOrderList(): List<ProductOrder>
    +getRestockOrderId(): Integer

    +setReturnOrderId(ReturnOrderId : Integer): void
    +setReturnDate(returnDate : Date): void
    +setRestockOrderId(RestockOrderId : Integer): void
}

class InternalOrder{
    -InternalOrderId : Integer
    -issueDate: Date
    -productOrderList: List<ProductOrder>
    -CostumerId : Integer
    -State : String

    +getId(): Integer
    +getState() : String
    +getIssueDate(): Date
    +getProductList() : List<ProductInternalOrder>
    +getCostumerId() : Integer
    +setState(NewState:String): void
}

class Manager{

}

class Clerk{

}

class QualityCheckEmployee{

}

class DeliveryEmployee{

}

class Supplier{
    -SupplierId : Integer
    -SupplierName : String
    -SupplierSurname : String

    +getId(): Integer
}


class Customer{
    -CustomerId : Integer
    -customerName : String
    -customerSurname : String

    +getCustomerId(): Integer

}

interface DataInterface{
    +newSKU(description: String, weight: double, volume: double, price: double, notes: String): SKU
    +updateSKU(id:Integer, description: String, weight: double, volume: double, price: double, notes: String): SKU
    +deleteSKU(id: Integer): void

    +getAllSKU(): List<SKU>
    +getSkuById(id integer): SKU
    --
    +newSkuItem(RFID: String, available: Boolean, dateOfStock: Date): SkuItem
    +updateSkuItem(RFID: String, available: Boolean, dateOfStock: Date): SkuItem
    +deleteSkuItem(RFID: String): void

    +getAllSkuItems(): List<SkuItem>
    +getSkuItemsById(id: Integer): List<SkuItem>
    +getSkuItemByRFID(RFID: String): SkuItem

    --
    +newPosition(PositionId: String, aisle: Integer, row: Integer, col: Integer, maxWeight: double, maxVolume: double, occupiedWeight: double, occupiedVolume: double): Position
    +updatePosition(PositionId: String, aisle: Integer, row: Integer, col: Integer, maxWeight: double, maxVolume: double, occupiedWeight: double, occupiedVolume: double): Position
    +deletePosition(PositionId: String): void

    +getAllPositions(): List<Position>
    --

    +newUser(name: String, surname: String, email: String, type: String, password: String)
    +updateUser(id: Integer, name: String, surname: String, email: String, type: String, password: String)
    +deleteUser(id: Integer): void

    --
    +newTestDescriptor(name: String, procedureDescription: String, SKUId: Integer): TestDescriptor
    +updateTestDescriptor(id: Integer, name: String, procedureDescription: String, SKUId: Integer): TestDescriptor
    +deleteTestDescriptor(id: Integer): void

    +getTestDescriptors(): List<TestDescriptor>
    +getSpecificTD(id: Integer): TestDescriptor
    --
    +newTestResult(RFID: Integer, TestDescriptorId: Integer, date: Date, result: Boolean ): TestResult
    +updateTestResult(id: Integer, TestDescriptorId: Integer, date: Date, result: Boolean): void
    +deleteTestResult(id: Integer): void

    +getTestResults(): List<TestResult>
    +getTestResult(RFID: String): List<TestResult> or Map<Integer,TestResult>
    +getTestResult(RFID: String, result: boolean): List<TestResult> or Map<Integer,TestResult>
    +getSpecificTR(RFID: String): TestResult
    --
    +newItem(description: String, price: double, SKUId: Integer, SupplierId: Integer): Item
    +updateItem(id: Integer, description: String, price: double, SKUId: Integer, SupplierId: Integer): void
    +deleteItem(id: Integer): void


    +getItems(): List<Item>
    +getSpecificItem(id: Integer): Item
    --
    +newRestockOrder(issueDate : Date, productList : List<ProductRestockOrder>, supplierId: supplier): RestockOrder
    +deleteRestockOrder(restockOrderId: Integer): void

    +getAllRestockOrders(): List<RestockOrder>
    +getRestockOrder(RestockOrderId: Integer): RestockOrder
    +getIssuedRestockOrders(): List<RestockOrder>
    +modifyStateRestockOrder(RestockOrderId : Integer, state : String) : RestockOrder
    +addSkuItemToRestockOrder(RestockOrderId: Integer, skuItemList: HashMap<SKUId, RFID >) : RestockOrder
    +deleteSkuFromOrder(RestockOrderId: Integer, productToDelete : ProductRestockOrder ): void
    +addTrasportNote(RestockOrderId: Integer, note: String): RestockOrder
    +listSkuRestockOrder(restockOrderId: Integer): List<SKU>
    +issueRestockOrder(RestockOrderID: Integer): void
    --
    +newProductRestockOrder(SKUId: Integer, price: double, description : String, quantity : Integer): ProductRestockOrder
    --
    +newProductInternalOrder(SKUId: Integer, RFID : String, description : String, quantity : Integer): ProductInternalOrder
    --
    +newReturnOrder(returnDate : Date, restockOrderId: Integer): ReturnOrder
    +deleteReturnOrder(returnOrderId: Integer): void

    +addSkuToReturnOrder(skuItemList: HashMap<SKUId, RFID>) : ReturnOrder
    +startReturnOrder(returnOrder: ReturnOrder, SupplierId: Integer): void
    +getAllReturnOrders(): List<ReturnOrder>
    +getReturnOrder(returnOrderId: Integer): ReturnOrder
    --
    +newCustomer(CustomerId: Integer, customerName : String, customerSurname : String) : Customer
    +deleteCustomer (CustomerId : Integer) : void

    +getCustomerById(CustomerId: Integer) : Customer
    +getAllCustomer(): List<Customer>
    --
        +newSupplier(SupplierId: Integer, supplierName : String, supplierSurname : String) : Supplier
        +deleteSupplier (SupplierId : Integer) : void
        +getIdBySupplierName(supplierName : String) : Integer
    --
    +newInternalOrder(issueDate : Date, CustomerId: Integer, productOrderList : List<ProductOrder>): InternalOrder
    +deleteInternalOrder(internalOrderId: Integer) : void

    +deleteSkuInternalOrder(internalOrderId: Integer, SkuProduct: SKU) : InternalOrder
    +getAllInternalOrders(): List<InternalOrder>
    +getIssuedInternalOrders(): List<InternalOrder>
    +getAcceptedInternalOrders(): List<InternalOrder>
    +getInternalOrder(internalOrderId: Integer): InternalOrder
    +modifyStateInternalOrder(InternalOrderId : Integer, state : String) : InternalOrder
    +replyToInternalOrder(internalOrderId: Integer, reply: String) : InternalOrder
    +addSkuToInternalOrder(productToOrder : ProductOrder): InternalOrder
}

class DataLayer{

}

User <|.. Manager : <<extends>>
User <|.. Clerk    : <<extends>>
User <|.. QualityCheckEmployee: <<extends>>
User <|.. DeliveryEmployee: <<extends>>
User <|.. Administrator: <<extends>>

ProductOrder <|.. ProductInternalOrder : <<extends>>
ProductOrder <|.. ProductRestockOrder : <<extends>>


Supplier -- Item
Customer -- InternalOrder

InternalOrder -- SkuItem
InternalOrder -- SKU
InternalOrder -- ProductInternalOrder

RestockOrder -- Supplier
RestockOrder -- Item
RestockOrder -- ReturnOrder
RestockOrder -- ProductRestockOrder
RestockOrder -- SkuItem

ReturnOrder -- SkuItem

TestResult -- TestDescriptor
TestResult -- SkuItem

TestDescriptor -- SKU

Position -- SKU
Position -- SkuItem

User -- DataLayer

DataLayer ..|> DataInterface : <<implements>>

DataLayer -- InternalOrder
DataLayer -- RestockOrder
DataLayer -- SKU
DataLayer -- SkuItem
DataLayer -- TestDescriptor


@enduml
```

# Verification traceability matrix


| FR  | InternalOrder | RestockOrder | ReturnOrder | ProductOrder | ProductRestockOrder | ProductInternalOrder | TestDescriptor | TestResult | Item | SkuItem | Sku | Position | User | Manager | Clerk | Customer | Supplier | DataLayer |
| --- | ------------- | ------------ | ----------- | ------------ | ------------------- | -------------------- | -------------- | ---------- | ---- | ------- | --- | -------- | ---- | ------- | ----- | -------- | -------- | --------- |
| FR1 |               |              |             |              |                     |                      |                |            |      |         |     |          | X    | X       | X     | X        | X        | X         |
| FR2 |               |              |             |              |                     |                      |                |            |      |         | X   |          |      |         |       |          |          | X         |
| FR3 |               |              |             |              |                     |                      | X              |            |      |         | X   | X        |      |         |       |          |          | X         |
| FR4 |               |              |             |              |                     |                      |                |            |      |         |     |          | X    |         |       | X        |          | X         |
| FR5 |               | X            | X           |              | X                   |                      | X              |            |      | X       | X   | X        | X    |         |       |          | X        | X         |
| FR6 | X             |              |             | X            |                     | X                    |                |            |      | X       | X   |          | X    |         |       | X        |          | X         |
| FR7 |               |              |             |              |                     |                      |                | X          | X    |         |     |          |      |         |       |          |          | X         |

# Verification sequence diagrams

## Scenario 1-1

### Create SKU S

```plantuml

actor Manager
note over EzWH : EzWH includes GUI and DataLayer
Manager -> EzWH : Description, Weight, Volume, Notes, Price, Available Quantity
activate EzWH

EzWH -> DataLayer : newSKU(description, weight, volume, notes, price, availableQuantity)
activate DataLayer

DataLayer -> DataLayer : new SKU

return

```

## Scenario 3-1

### Restock Order of SKU S issued by quantity

```plantuml

actor Manager
note over EzWH : EzWH includes GUI and DataLayer
Manager -> EzWH : HashMap<SKUId: Integer, Quantity: Integer>

loop foreach SkuId
  EzWH -> DataLayer : getSkuById(id)
  activate DataLayer
  return SKU

  EzWH -> SKU : getId()
  activate SKU
  return id

  EzWH -> SKU : getPrice()
  activate SKU
  return price

  EzWH -> SKU : getDescription()
  activate SKU
  return description

  EzWH -> DataLayer : newProductRestockOrder(SKUId, price, description, quantity)
  activate DataLayer
  return ProductRestockOrder

  EzWH -> EzWH : productList.push(ProductRestockOrder)

  end

Manager -> EzWH : supplierName

EzWH -> Supplier : getIdBySupplierName(supplierName)
activate Supplier
return supplierId: Integer

EzWH -> DataLayer : newRestockOrder(issueDate, productList, SupplierId )
activate DataLayer
return RestockOrder

EzWH -> RestockOrder : getId()
activate RestockOrder
return restockOrderId : Integer

EzWH -> DataLayer : modifyStateRestockOrder(RestockOrderId, "ISSUED")
activate DataLayer
return


```

## Scenario 5-2-3

### Record negative and positive test results of all SKU items of a RestockOrder

```plantuml

actor QualityEmployee
note over EzWH : EzWH includes GUI and DataLayer
QualityEmployee -> EzWH : RestockOrderId
activate EzWH

EzWH -> DataLayer : getRestockOrder(RestockOrderId)
activate DataLayer
return RestockOrder

EzWH -> DataLayer : RestockOrder
activate DataLayer

DataLayer -> RestockOrder : getSkuItemList()
activate RestockOrder
return List<RFID>

return List<RFID>

loop foreach RFID

EzWH -> DataLayer : getSkuItemByRFID(RFID)
activate DataLayer
return SkuItem

EzWH -> DataLayer : SkuItem
activate DataLayer

DataLayer -> SkuItem : getSKU()
activate SkuItem
return SKU

DataLayer -> SKU : getTestDescriptors()
activate SKU
return List<TestDescriptor>

return SKU, List<TestDescriptor>

loop foreach TestDescriptor

EzWH -> TestDescriptor : getId()
activate TestDescriptor
return TestDescriptorId: Integer


EzWH -> DataLayer : newTestResult(RFID, TestDescriptorId, date, result )
activate DataLayer
return TestResult

end

end

EzWH -> RestockOrder : getId()
activate RestockOrder
return RestockOrderId : Integer

EzWH -> DataLayer : modifyStateRestockOrder(RestockOrderId, TESTED)
activate DataLayer
return
```

## Scenario 5-3-1

### Stock all SKU items of a RO

```plantuml

actor Clerk
note over EzWH : EzWH includes GUI and DataLayer
Clerk -> EzWH : Select List<RFID>
activate EzWH

loop foreach RFID

EzWH -> DataLayer : getSkuItemByRFID(RFID)
activate DataLayer
return  SkuItem

EzWH -> DataLayer : Skuitem
activate DataLayer
DataLayer -> SKU : getSku()
activate SKU
return  SKU

DataLayer -> SKU : setPosition()
activate SKU
return
deactivate SKU

end

DataLayer -> SKU : setAvailableQuantity(AvailableQuantity)
activate SKU
deactivate SKU



DataLayer -> Position : setOccupiedWeight(weight W)
activate Position
return
deactivate Position

DataLayer -> Position : setOccupiedVolume(volume V)
activate Position
return
deactivate Position

EzWH -> RestockOrder : getId()
activate RestockOrder
return RestockOrderId : Integer

EzWH -> DataLayer :  modifyStateRestockOrder(RestockOrderId I, Completed)
return
deactivate DataLayer



```

## Scenario 6-1

### Return order of SKU items that failed quality test

```plantuml

actor Manager
Manager -> EzWH : RestockOrderId
activate EzWH

EzWH -> DataLayer : getRestockOrder(RestockOrderId)
activate DataLayer
return RestockOrder

EzWH -> DataLayer : RestockOrder
activate DataLayer

DataLayer -> ReturnOrder : newReturnOrder(returnDate, RestockOrderId)
activate ReturnOrder
return ReturnOrder
return ReturnOrder

deactivate ReturnOrder
EzWH -> RestockOrder : getSkuItemList()
activate RestockOrder
return List<RFID: String>

loop foreach RFID

EzWH -> DataLayer : getTestResult(RFID, false)
activate DataLayer
return List<TestResult>

alt List<TestResult> has elements 

EzWH -> SkuItem : getSKU()
activate SkuItem
return SKU

EzWH -> SKU : getId()
activate SKU
return SKUId

EzWH -> EzWH : negativeItems.add(SKUId, RFID)

end

end

EzWH -> Manager : negativeItems: HashMap<SKUId, RFID>
deactivate EzWH

Manager -> EzWH : itemsToReturn: HashMap<SKUId, RFID>
activate EzWH 

EzWH -> DataLayer : addSkuToReturnOrder(itemsToReturn)
activate DataLayer
return ReturnOrder

return ReturnOrder

Manager -> EzWH : Confirmation
activate EzWH

loop foreach SKUId, RFID

EzWH -> DataLayer: getSkuItemByRFID(RFID)
activate DataLayer
return SkuItem

EzWH -> SkuItem: setAvailable(false)
activate SkuItem
return 

end

EzWH -> RestockOrder: getSupplier()
activate RestockOrder
return Supplier

EzWH -> Supplier: getId()
activate Supplier
return SupplierId

EzWH -> DataLayer: startReturnOrder(ReturnOrder, SupplierId)
activate DataLayer

DataLayer -> Supplier: ReturnOrder
activate Supplier
return

return

return ReturnOrder submitted

```

## Scenario 10-1

### Internal Order IO Completed

```plantuml

actor DeliveryEmployee

DeliveryEmployee -> EzWH : internalOrderId
activate EzWH

EzWH -> DataLayer : getInternalOrder(InternalOrderId)
activate DataLayer
return InternalOrder

EzWH -> DataLayer : InternalOrder
activate DataLayer

DataLayer -> InternalOrder : getProductList()
activate InternalOrder
return List<ProductInternalOrder>

return List<ProductInternalOrder>

loop foreach ProductInternalOrder

EzWH -> ProductInternalOrder : getRFID()
activate ProductInternalOrder
return RFID: String

EzWH -> DataLayer : getSkuItemByRFID(RFID)
activate DataLayer
return SkuItem

EzWH -> SkuItem : getSku()
activate SkuItem
return SKU

EzWH -> SkuItem : setAvailable(false)
activate SkuItem
return

EzWH -> SKU : getAvailableQuantity()
activate SKU
return availableQuantity : Integer

EzWH -> SKU : setAvailableQuantity(availableQuantity - 1)
activate SKU
return

end

EzWH -> InternalOrder : getId()
activate InternalOrder
return internalOrderId : Integer

EzWH -> DataLayer : modifyStateInternalOrder(InternalOrderId, COMPLETED)
activate DataLayer
return

```
