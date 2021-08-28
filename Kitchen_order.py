# Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class KitchenOrder(Document):
	
	def validate(self):         
		# item = 
		# self.set("item",[])

		x = []                  #defining empty array
		for i in self.get("item"):  #item is a field name , looping field to get item
			if i.item in x:
				frappe.throw("You can select same item only once")
			else:
				x.append(i.item)
		for i in self.get('item'):
			doc = frappe.get_doc('Food Item',{'name':i.item})   #food item is doctype....getting doctype
			if i.quantity > 10:
				frappe.throw('Quantity limit exceeded !!')
				doc.save()
			
			if i.quantity <= 0:
				frappe.throw("Quantity should not be zero or negative")

@frappe.whitelist()     #calling whitelist method from js
def get_item():         #get_item method we are calling
	lst = []              #creating empty list for appending all items with their rate
	# return frappe.db.get_value('Food Item',
	# 	item['item','rate'],as_dict=True)
	item = frappe.db.sql(""" select item, rate from `tabFood Item` """)   #writing sql query to get item and rate inside item varible
	for i in item:
		lst.append(i)     #appending all items in list and returning the list 
	return lst
	#lst.set('item',[])
	# for i in item:
	# 	a = lst.append('item',{})
	# 	a.item = i['item']
	# 	a.rate = i['rate']
