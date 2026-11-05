const cds = require('@sap/cds');
const log = cds.log('Service')

class AdminService extends cds.ApplicationService {
    init() {
        const { Authors, Books } = this.entities;

        //this.before(['CREATE', 'UPDATE'], [Authors], this.validateLifeData);

        this.after('READ', [Authors], this.printLog);

        //this.after('*', '*', this.printLog);

        this.on('submitOrder', this.reduceStock);

        return super.init();
    }

    validateLifeData(req) {
        const { dob, name } = req.data;
        if (!dob) return;

        const dob1 = new Date(dob);
        const today = new Date();

        console.log("dob is ", dob1);
        console.log("today is ", today);

        log.info("dob is1 ", dob);
        log.info("today is1 ", today);
        log.info("name >>  ", name);


        if (dob1 > today) {
            req.error(400, `${dob1} is greater than today ${today}`);
        }
        else {
            //req.notify(`${dob1} is lesser than today ${today} -- is correct`);

            //req.reply(`${dob1} is lesser than today ${today}-- reply`);
        }
    }

    printLog(req, response) {
        const result1 = response.results;

        result1.forEach(author => {
            if (author.ID === 2) {
                author.name = author.name + '11';
            }
            
            console.log('name >>>>> ',author.name);
        });


        for (let index = 0; index < result1.length; index++) {
            const element = result1[index];
            console.log("Console >>",element.name);
            
        }

        for(let index of result1){
            console.log(">>third >>>>",index.name); 
            console.log('HHHHHHHHHHHHHHHHHHHHHHHHHH');
        }
        cds.log().info('Hello this log from Books enttity - AdminsService', req.data);
        cds.log().info("user is > ", req.user);
        console.log('result >>> ', result1);
        // cds.log().info(req.query.id);
        // cds.log().info(req.error);
        // log.info('hellooooooooooo', this.entities);
        console.log('hELLON console');
    }
    reduceStock(req){
        const {Books} = this.entities;
        const {book, quantity} = req.data;
        if(quantity < 1){
            return req.error(500, 'Quantity must be at least 1' );
        }

        let stock = 10;
        return stock;
    }
    // submitOrder(book, quantity){
    //     const {Books} = this.entities;
    //    //const {book, quantity} = req.data;
    //     if(quantity < 1){
    //         return req.error(500, '>>> Quantity must be at least 1' );
    //     }

    //     let stock = 10;
    //     return stock;
    // }

}

module.exports = AdminService;