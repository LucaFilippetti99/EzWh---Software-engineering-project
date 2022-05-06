class DataLayer
{
    constructor ()
    {
        //attributes
    }
    
    // Methods

    // SKU
    newSKU(description, weight, volume, price, notes)
    {
        
    }

    updateSKU(id, description, weight, volume, price, notes)
    {
        
    }

    deleteSKU(id)
    {
        
    }

    getAllSKU()
    {
        
    }

    getSkuById(id)
    {
        
    }

    //SKU ITEM
    newSkuItem(RFID, available, dateOfStock)
    {
        
    }

    updateSkuItem(RFID, available, dateOfStock)
    {
        
    }

    deleteSkuItem(RFID)
    {
        
    }

    getAllSkuItems()
    {
        
    }

    getSkuItemsById(id)
    {
        
    }

    getSkuItemByRFID(RFID)
    {
        
    }

    // POSITION
    newPosition(PositionId, aisle, row, col, maxWeight, maxVolume, occupiedWeight, occupiedVolume)
    {
        
    }

    updatePosition(PositionId, aisle, row, col, maxWeight, maxVolume, occupiedWeight, occupiedVolume)
    {
        
    }

    deletePosition(PositionId)
    {
        
    }

    getAllPositions()
    {
        
    }

    // USER
    newUser(name, surname, email, type, password)
    {
        
    }

    updateUser(id, name, surname, email, type, password)
    {
        
    }

    deleteUser(id)
    {
        
    }

    // TEST DESCRIPTOR
    newTestDescriptor(name, procedureDescription, SKUId)
    {
        
    }

    updateTestDescriptor(id, name, procedureDescription, SKUId)
    {
        
    }

    deleteTestDescriptor(id)
    {
        
    }

    getTestDescriptors()
    {
        
    }

    getSpecificTD(id)
    {
        
    }

    // TEST RESULT
    newTestResult(RFID, TestDescriptorId, date, result)
    {
        
    }

    updateTestResult(id, TestDescriptorId, date, result)
    {
        
    }

    deleteTestResult(id)
    {
        
    }

    getTestResults()
    {
        
    }

    getTestResult(RFID)
    {
        
    }

    getTestResult(RFID, result)
    {
        
    }

    getSpecificTR(RFID)
    {
        
    }

    // ITEM
    newItem(description, price, SKUId, SupplierId)
    {
        
    }

    updateItem(id, description, price, SKUId, SupplierId)
    {
        
    }

    deleteItem(id)
    {
        
    }

    getItems()
    {
        
    }

    getSpecificItem(id)
    {
        
    }

    // RESTOCK ORDER
    newRestockOrder(issueDate, productList, supplierId, supplier)
    {
        
    }

    deleteRestockOrder(restockOrderId)
    {
        
    }

    getAllRestockOrders()
    {
        
    }

    getRestockOrder(RestockOrderId)
    {
        
    }

    getIssuedRestockOrders()
    {
        
    }

    modifyStateRestockOrder(RestockOrderId , state)
    {
        
    }

    addSkuItemToRestockOrder(RestockOrderId, skuItemList)
    {
        
    }

    deleteSkuFromOrder(RestockOrderId, productToDelete)
    {
        
    }

    addTrasportNote(RestockOrderId, note)
    {
        
    }

    listSkuRestockOrder(restockOrderId)
    {
        
    }

    issueRestockOrder(RestockOrderID)
    {
        
    }

    newProductRestockOrder(SKUId, price, description , quantity)
    {
        
    }

    newProductInternalOrder(SKUId, RFID , description , quantity)
    {
        
    }

    // RETRUN ORDER
    newReturnOrder(returnDate , restockOrderId)
    {
        
    }

    deleteReturnOrder(returnOrderId)
    {
        
    }

    addSkuToReturnOrder(skuItemList)
    {
        
    }

    startReturnOrder(returnOrder, SupplierId)
    {
        
    }

    getAllReturnOrders()
    {
        
    }

    getReturnOrder(returnOrderId)
    {
        
    }

    // CUSTOMER
    newCustomer(CustomerId, customerName , customerSurname)
    {
        
    }

    deleteCustomer (CustomerId)
    {
        
    }

    getCustomerById(CustomerId)
    {
        
    }

    getAllCustomer()
    {
        
    }

    // SUPPLIER
    newSupplier(SupplierId, supplierName , supplierSurname)
    {
        
    }

    deleteSupplier (SupplierId)
    {
        
    }

    getIdBySupplierName(supplierName)
    {
        
    }

    // INTERNAL ORDER
    newInternalOrder(issueDate , CustomerId, productOrderList)
    {
        
    }

    deleteInternalOrder(internalOrderId)
    {
        
    }

    deleteSkuInternalOrder(internalOrderId, SkuProduct)
    {
        
    }

    getAllInternalOrders()
    {
        
    }

    getIssuedInternalOrders()
    {
        
    }

    getAcceptedInternalOrders()
    {
        
    }

    getInternalOrder(internalOrderId)
    {
        
    }

    modifyStateInternalOrder(InternalOrderId , state)
    {
        
    }

    replyToInternalOrder(internalOrderId, reply)
    {
        
    }

    addSkuToInternalOrder(productToOrder)
    {
        
    }
}
