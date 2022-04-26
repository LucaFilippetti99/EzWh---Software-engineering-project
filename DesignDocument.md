# Design Document 


Authors: 

Date:

Version:


# Contents

- [Design Document](#design-document)
- [Contents](#contents)
- [Instructions](#instructions)
- [High level design](#high-level-design)
- [Low level design](#low-level-design)
- [Verification traceability matrix](#verification-traceability-matrix)
- [Verification sequence diagrams](#verification-sequence-diagrams)

# Instructions

The design must satisfy the Official Requirements document 

# High level design 

<discuss architectural styles used, if any>

```plantuml
    package "EzWarehouse"{
        package  "gui"  {
    }
    
    package "data"{
    }
  
    gui ..> data
    }
```






# Low level design

<for each package, report class diagram>









# Verification traceability matrix

\<for each functional requirement from the requirement document, list which classes concur to implement it>

| FR | InternalOrder | RestockOrder | ReturnOrder | ProductOrder |ProductRestockOrder| TestDescriptor | TestResult |Item  | SkuItem| Sku | 
| -------- | ----- | ------------ | ------- | ----- | ------------ | ------- | ------- | ------- |   ------- |   ------- |   
| FR1 | X | X | X | X | X | Y | Y | ND | ND | ND |
| FR2 | X | X | X | X | X | Y | Y | ND | ND | ND |
| FR3 | X | X | X | X | X | X | Y | ND | ND | ND |
| FR4 | X | X | X | X | X | Y | Y | ND | ND | ND |
| FR5 | X | Y | Y | X | Y | X | Y | ND | ND | ND |
| FR6 | Y | X | X | Y | X | Y | Y | ND | ND | ND |
| FR7 | X | X | X | X | X | Y | X | ND | ND | ND |









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

  

```

## Scenario 5-2-3 
### Record negative and positive test results of all SKU items of a RestockOrder

```plantuml

  

```

## Scenario 5-3-1 
### Stock all SKU items of a RO

```plantuml



```

## Scenario 6-1 
### Return order of SKU items that failed quality test

```plantuml



```

## Scenario 10-1 
### Internal Order IO Completed

```plantuml



```