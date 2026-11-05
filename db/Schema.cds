namespace my.bookshop;

using {
    cuid,
    managed,
    sap.common.CodeList
} from '@sap/cds/common';


entity Books {
    key ID     : Integer                 @mandatory;
        title  : localized String        @mandatory;
        author : Association to Authors  @mandatory  @assert.integrity;
        stock  : Integer;
}

entity Authors {
    key ID   : Integer;
        name : String;
        dob  : Date;
        // book : Association to many Books
        //            on book.author = $self;

        book : Composition of many Books
                   on book.author = $self;
// book : Association to many Books
//            on book.author = $self;
}

entity Orders {
    key order : Integer;
        desc  : String;
        item  : Composition of many OrderItem
                    on item.order = $self;
}

entity OrderItem {
    key pos   : Integer;
    key order : Association to Orders;
        qty   : Integer;
}

entity Epose : CodeList {
    key ID : Integer;
}
