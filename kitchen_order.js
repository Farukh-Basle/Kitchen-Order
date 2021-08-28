// Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Kitchen Order', {
	onload: function(frm) {
        frappe.call({
            method:"erpnext.kitchen.doctype.kitchen_order.kitchen_order.get_item",      //calling whitelist method
            args:{        // args need to be passed or else we'll get error here passing as empty 
                
            }
            ,
            
            callback: function(r){    //calling callback func r--> lst array i.e all items 
                
                var cpd = frm.add_child("item");      //cpd is var here we're defining empty child row

                if(r.message){
                    frm.set_value("item","");
                    refresh_field("item");
                    for (var i = 0; i < r.message.length; i++) {    //giving loop to see all item row by row in child table
                        var cpd = frm.add_child("item");
                        
                            cpd.item = r.message[i][0];             //item refers indexes so we're giving indexing 
                            cpd.rate =  r.message[i][1];
                           
                    }
                }
        }
    });
		
	},

});
frappe.ui.form.on('Kitchen Order Detail', {
    quantity: function(frm, cdt,cdn){
	
	
    var row = locals[cdt][cdn]
        
        row.total = row.quantity * row.rate

        refresh_field("item");
        
        var gnd_total = 0;

        var total_amt = 0;
    
        for(var i = 0; i<frm.doc.item.length; i++){
            gnd_total += +frm.doc.item[i].quantity;
            total_amt += +frm.doc.item[i].total;
        }
    
    
        frm.set_value('total_quantity', gnd_total);    
        refresh_field("total_quantity");
        

        frm.set_value('total_amount', total_amt);    
        refresh_field("total_amount");
    },
    
    });
  
