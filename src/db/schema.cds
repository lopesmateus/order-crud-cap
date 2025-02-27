namespace OrderCrud;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Item: cuid, managed {
    materialCode: Integer not null;
    description: String;
    valueUnit: Decimal not null;
    quantity: Integer not null;
    order: Association to Order
}

entity Order: cuid, managed {
    customer: Integer;
    customerName: String;
    address: String;
    city: String;
    totalValue: Decimal;
    items: Composition of many Item on items.order = $self
}

// entity OrderItem {
//     key order: Association to Order;
//     key item: Association to Item;
//     quantity: Integer;
// }