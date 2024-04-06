const paytabs = require('paytabs_pt2');

let
    profileID = "142609",
    serverKey = "SKJ9RHMBWT-JJBWNMWTGN-H96299TB6K",
    region = "ARE";

paytabs.setConfig( profileID, serverKey, region);

exports.initiatePayement = async (req,res)=> {
    const data = req.body;
    console.log(data);
    let transaction = {
        type: "sale",
        class:"ecom"
    };
    let cart = {
        id: "100001",
        currency: "AED",
        amount: data.amount,
        description: "Wheel Prizes"
    };
    let customer = {
        name:data.name,
        email:data.email,
        phone:data.phone,
        street1:"dummy street, dummy building, dummy apt",
        city:data.city,
        state:"CAI",
        country:data.country,
        zip:"52121",
        // IP:"10.0.0.1"

    };
    let url = {
        callback:"http://localhost:8000/api/callback",
        response:"http://localhost:3000/live"
    };
    let language= "ar"
    let paymentMethods = ["all"];
    let transaction_details = [
        transaction.type,
        transaction.class
    ];
    
    let cart_details = [
        cart.id,
        cart.currency,
        cart.amount,
        cart.description
    ];

    let customer_details = [
        customer.name,
        customer.email,
        customer.phone,
        customer.street1,
        customer.city,
        customer.state,
        customer.country,
        customer.zip,
        // customer.IP

    ];

     let response_URLs = [
         url.callback,
         url.response,
     ];

     let shipping_address = customer_details;

    paymentPageCreated = function(results) {
        console.log(results);
        res.json(results)
       // res.redirect(results.redirect_url)
    }
    
    let frameMode = true;

    paytabs.createPaymentPage(
        paymentMethods,
        transaction_details,
        cart_details,
        customer_details,
        shipping_address,            
         response_URLs,
        language,
        paymentPageCreated,
        frameMode
    );
}
