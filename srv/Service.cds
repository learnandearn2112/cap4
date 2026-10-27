using {my.bookshop as db} from '../db/Schema';

service AdminService @(path:'AdminService') {

    entity Books   as select from db.Books;
    entity Authors as projection on db.Authors;

}
