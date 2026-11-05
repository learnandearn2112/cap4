using {my.bookshop as db} from '../db/Schema';

@impl:'srv/AdminService.js'
service AdminService @(path:'MyService') {

    entity Books as select from db.Books;
    // {
    //     ID,
    //     title,
    //     author,
    //     stock,
    // };
    entity Authors as projection on db.Authors;

    entity Order as projection on db.Orders;
    entity OrderItem as projection on db.OrderItem;


   // entity BookCopy   as select from db.Books;

    action submitOrder(book: db.Books:ID, quantity:Integer) returns {
        stock:db.Books:stock
    }

}
