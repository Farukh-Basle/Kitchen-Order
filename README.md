# Kitchen-Order
ERPNEXT - Kitchen Order


Kitchen Order - Doctype
1. Employee ID 
2. Employee name - fetch from employee
3. Department - fetch from employee
4. Date - Today date
5. Purpose
6. Total Quantity - float

Kitchen Order Detail - Child table
1. Food Item - Fetch the items from Food Item doctype in each row.
2. Qty - float

Food Item - Doctype
1. Item

- Create one field in Kitchen Order where you can create Status Field and given options(Blank, Ordered, Submitted).
- Create Kanban (name Kitchen Board Item) which will be linked to Kitchen Order where it will fetch status field auto.
- Give permissions like : Emp can only give order and upon ordering status field should changed to ordered. 
- Only canteen user can accept the order and upon accepting status need to be changed as Delivered.


30/08/2021
===========

Changes Need to be done
------------------------

- Remove the link between Item and Food Item. Instead
- Create a button --> On click --> Dialogue box should display --> 
    Inside Dia box you should have the food item from there you've to select food items
      --> upon selecting they'ld have to appen inside child table.
