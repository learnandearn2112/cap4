namespace my.bookshop;

entity Books {
    key ID     : Integer;
        title  : String; //localized
        author : Association to Authors;
        stock  : Integer;
}

entity Authors {
    key ID   : Integer;
        name : String;
        book : Association to many Books
                   on book.author = $self;

        //  book : Composition of many Books
        //            on book.author = $self;
}

// ### How the Relationship Works
// * **To-One Association (`author : Association to Authors`):** In the **<InlineEntity>Books</InlineEntity>** entity, the `author` field acts as an association pointing to the
//**<InlineEntity>Authors</InlineEntity>** entity. Under the hood, CAP manages the foreign key relationship automatically without requiring manual SQL join scripts.
// * **To-Many Association (`books : Association to many Books on books.author = $self`):** In the **<InlineEntity>Authors</InlineEntity>** entity, the `books` element defines a to-many relationship.
// * **The `$self` Placeholder:** The `on books.author = $self` condition links the `author` field in **<InlineEntity>Books</InlineEntity>** back to the current instance of the
//**<InlineEntity>Authors</InlineEntity>** entity ($self). An author can be associated with none, one, or multiple books.
// * **No Direct Many-to-Many Support:** CAP does not support native many-to-many associations directly in CDS; if a book can have multiple authors and an author can write multiple books,
//you must break it down into two one-to-many associations using a join/link entity.
