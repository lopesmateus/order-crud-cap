// const cds = require('@sap/cds'); ------------- js
import * as cds from '@sap/cds'

interface Item {
    valueUnit: number;
    quantity: number;
}

module.exports = cds.service.impl(srv => {
  srv.before('CREATE', 'Order', async req => {
    let totalValue: number = 0
     // Tipando os itens da requisição
    const items: Item[] = req.data.items;
    console.log(items)

    if (items && items.length > 0) {
        for (const item of items) {
            const itemValue: number = item.valueUnit * item.quantity;
            totalValue += itemValue
        }
        console.log(totalValue)
    } else {
        req.error({
            code: 'MISSING_ITEMS',
            message: 'A lista de itens (items) é obrigatória para criar uma ordem.',
            target: 'items', // Indica que o erro está relacionado ao campo 'items'
            status: 400 // Bad Request
        });
    }
    // Atribui o valor total à propriedade totalValue da ordem
    req.data.totalValue = totalValue;
});

});