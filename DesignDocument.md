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

<TODO discuss architectural styles used, if any>

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

<for each package, report class diagram>

LowLevelDesign.md

# Verification traceability matrix

\<for each functional requirement from the requirement document, list which classes concur to implement it>

| FR | InternalOrder | RestockOrder | ReturnOrder | ProductOrder |ProductRestockOrder| ProductInternalOrder| TestDescriptor | TestResult |Item  | SkuItem| Sku | Position |User| Manager | Clerk| Customer| Supplier |  
| -------- | ----- | ------------ | ------- | ----- | ------------ | ------- | ------- | ------- |   ------- |   ------- |------- | ------- | ------- | ------- | ------- | ------- |    
| FR1 | X | X | X | X | X | ND | X | X | ND | ND | ND |
| FR2 | X | X | X | X | X | ND | X | X | ND | ND | ND |
| FR3 | X | X | X | X | X | ND | Y | X | ND | ND | ND |
| FR4 | X | X | X | X | X | ND | X | X | ND | ND | ND |
| FR5 | X | Y | Y | X | Y | ND | Y | X | ND | ND | ND |
| FR6 | Y | X | X | Y | X | ND | X | X | ND | ND | ND |
| FR7 | X | X | X | X | X | ND | X | Y | ND | ND | ND |


# Verification sequence diagrams 
\<select key scenarios from the requirement document. For each of them define a sequence diagram showing that the scenario can be implemented by the classes and methods in the design>

Scenario 1-1 Create SKU S 
Scenario 3-1 Restock Order of SKU S issued by quantity
Scenario 5-2-3 Record negative and positive test results of all SKU items of a RestockOrder
Scenario 5-3-1 Stock all SKU items of a RO
Scenario 6-1 Return order of SKU items that failed quality test
Scenario 10-1 Internal Order IO Completed

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
Manager -> EzWH : SKUs (id) of products to restock, Quantities

activate EzWH
EzWH -> DataLayer : HashMap<SkuId: Integer, Quantity: Integer>
activate DataLayer

loop foreach SkuId
  DataLayer -> SKU : getSkuById(id)
  activate SKU
  return SKU

  DataLayer -> SKU : getId()
  activate SKU
  return id

  DataLayer -> SKU : getPrice()
  activate SKU
  return price

  DataLayer -> SKU : getDescription()
  activate SKU
  return description

  DataLayer -> ProductRestockOrder : newProductRestockOrder(skuId, price, description, quantity)
  activate ProductRestockOrder
  return ProductRestockOrder

  DataLayer -> DataLayer : productList.push(ProductRestockOrder)

  end

Manager -> EzWH : Supplier

EzWH -> DataLayer : supplier
DataLayer -> Supplier : getId(supplier)
activate Supplier
return supplierId: Integer

DataLayer -> RestockOrder : newRestockOrder(issueDate, productList, supplierId )
activate RestockOrder
return RestockOrder

DataLayer -> RestockOrder : setState("ISSUED")
activate RestockOrder
return

return
```

## Scenario 5-2-3 
### Record negative and positive test results of all SKU items of a RestockOrder

```plantuml

actor QualityEmployee
note over EzWH : EzWH includes GUI and DataLayer
QualityEmployee -> EzWH : RestockOrder
activate EzWH

EzWH -> RestockOrder : getSkuItemList()
activate RestockOrder
return List<rfid>

loop foreach rfid

EzWH -> DataLayer : getSkuItemByRFID(rfid)
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
return idTestDescriptor: Integer


EzWH -> DataLayer : newTestResult(rfid, idTestDescriptor, date, result )
activate DataLayer
return TestResult

end

end

EzWH -> RestockOrder : getId()
activate RestockOrder
return restockOrderId : Integer

EzWH -> DataLayer : modifyStateRestockOrder(restockOrderId, TESTED)
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
DataLayer -> Sku : getSku()
activate Sku
return  Sku

DataLayer -> Sku : setPosition()
activate Sku
return
deactivate Sku

end

DataLayer -> Sku : setAvailableQuantity(AvailableQuantity)
activate Sku
deactivate Sku



DataLayer -> Position : setOccupiedWeight(Weight W)
activate Position
return
deactivate Position

DataLayer -> Position : setOccupiedVolume(Volume V)
activate Position
return
deactivate Position
  
EzWH -> RestockOrder : getId()
activate RestockOrder
return restockOrderId : Integer

EzWH -> DataLayer :  modifyStateRestockOrder(restockOrderId I, Completed)
return 
deactivate DataLayer



```

## Scenario 6-1 
### Return order of SKU items that failed quality test

```plantuml



```

## Scenario 10-1 
### Internal Order IO Completed

```plantuml

actor DeliveryEmployee

DeliveryEmployee -> EzWH : InternalOrder
activate EzWH

EzWH -> InternalOrder : getProductList()
activate InternalOrder
return List<ProductInternalOrder>

loop foreach ProductInternalOrder

EzWH -> ProductInternalOrder : getRFID()
activate ProductInternalOrder
return rfid: String

EzWH -> DataLayer : getSkuItemByRFID(rfid)
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

EzWH -> DataLayer : modifyStateInternalOrder(internalOrderId, COMPLETED)
activate DataLayer
return

```