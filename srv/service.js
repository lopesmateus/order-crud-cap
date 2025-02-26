const cds = require('@sap/cds');

module.exports = cds.service.impl(srv => {
  srv.before('CREATE', 'Order', async req => {
    let totalValue = 0
    if (req.data.items && req.data.items.length > 0) {
        console.log(req.data.items)
        for (const item of req.data.items) {
            const itemValue = item.valueUnit * item.quantity;
            totalValue += itemValue
        }
        console.log(totalValue); 
    } else {
        req.error({
            code: 'MISSING_ITEMS',
            message: 'A lista de itens (items) é obrigatória para criar uma ordem.',
            target: 'items', // Indica que o erro está relacionado ao campo 'items'
            status: 400 // Bad Request
        });
    }
    req.data.totalValue = totalValue;
});

});