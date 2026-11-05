const cds = require('@sap/cds');

class AdminService extends cds.ApplicationService {
    init() {
        const { Authors, Books } = this.entities;

        this.before(['CREATE', 'UPDATE'], Authors, this.validateLifeData);

        this.before('READ', Books, this.printLog);


        //this.on('submitOrder', this.reduceStock);

        return super.init();
    }

    validateLifeData(req) {

    }

    printLog(req) {
        cds.log().info('Hello this log from Books enttity Service.js- ', req.data);
        cds.log().info(req.Books);

    }

    reduceStock(req) {
        const { Books } = this.entities;
        const { book, quantity } = req.data;
        if (quantity < 1) {
            return req.error(500, 'Quantity must be at least 1');
        }

        let stock = 10;
        return stock;
    }
    submitOrder(req, book, quantity) {
        const { Books } = this.entities;
        //const {book, quantity} = req.data;
        if (quantity < 1) {
            return req.error(500, '>>> Quantity must be at least 1');
        }

        let stock = 10;
        return stock;
    }

}

module.exports = AdminService;