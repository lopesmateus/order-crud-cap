using OrderCrud as my from './db/schema';

service entity {
    entity Item as projection on my.Item;
    entity Order as projection on my.Order;
    // entity OrderItem as projection on my.OrderItem;
}