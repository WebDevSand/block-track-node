var mysql = require('mysql');
var prompt = require('prompt');

// settings for mysql DB connection
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'bootcamp',
  database : 'bamazon'
});

function showOptions() {
	var menuOptions = ['1. View Products for Sale', '2. View Low Inventory', '3. Add to Inventory', '4. Add New Product'];
	console.log('Menu Options:');
	for(var i = 0; i < menuOptions.length; i++) {
		console.log(menuOptions[i]);
	}
	menuPrompt();
};

function menuPrompt() {

	// settings for prompt
	var schema = {
	  properties: {
	    number: {
	      message: 'Please select a menu option by number',
	      required: true
	    }
	  }
	};

	prompt.start();
	prompt.get(schema, function (err, result) {
		var num = result.number;
		checkSelected(num);
	});
};

function checkSelected(option) {
	switch(option) {
		case '1':
			console.log(1);
			listProducts();
			break;
		case '2':
			console.log(2);
			showLowInventory();
			break;
		case '3':
			console.log(3);
			addStock();
			break;
		case '4':
			console.log(4);
			addProduct();
			break;
		default:
			console.log('You did not enter a number for a menu option, please try again');
	};
};

// displays available products with their stats, runs if option 1 is selected
function listProducts() {
	connection.query('SELECT ItemID, ProductName, Price, StockQuantity FROM products', function(err, rows, fields) {
		if(err) throw err;
		console.log('Available products for sale:');
		showSelectedProducts(rows);
	});
	connection.end();
};

function showLowInventory() {
	connection.query('SELECT ItemID, ProductName, Price, StockQuantity FROM products WHERE StockQuantity < 5', function(err, rows, fields) {
		if(err) throw err;
		console.log('Items with low inventory:');
		showSelectedProducts(rows);
	});
	connection.end();
};

function showSelectedProducts(rows) {
	for(var i = 0; i < rows.length; i++) {
	  console.log('Item ID: ' + rows[i].ItemID + '   Product Name: ' + rows[i].ProductName + '   Price: $' + rows[i].Price + '   Stock: ' + rows[i].StockQuantity);
	}
};

function addStock() {
	var schema = {
	  properties: {
	    ItemID: {
	      message: 'Enter the Item ID of the product to add stock to',
	      required: true
	    },
	    quantity: {
	      message: 'Enter the quantity of stock you wish to add',
	      required: true
	    }
	  }
	};

	prompt.start()
	prompt.get(schema, function(err, result) {
		var id = result.ItemID;
		var qty = result.quantity;
		connection.query('UPDATE products SET StockQuantity = StockQuantity + ? WHERE ItemID = ?', [qty, id], function(err, rows, fields){
			if(err) throw err;
			console.log('The stock has been updated');
		});
		connection.end();
	});
};

function addProduct() {
	var schema = {
	  properties: {
	    ProductName: {
	      message: 'Enter the name of the new product',
	      required: true
	    },
	    DepartmentName: {
	      message: 'Enter the department name for the product',
	      required: true
	    },
	    Price: {
	      message: 'Enter the price of the product',
	      required: true
	    },
	    StockQuantity: {
	      message: 'Enter the quantity of stock to add',
	      required: true
	    }
	  }
	};

	prompt.start()
	prompt.get(schema, function(err, result) {
		var product = result.ProductName;
		var department = result.DepartmentName;
		var price = result.Price;
		var quantity = result.StockQuantity;
		connection.query('INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES (?, ?, ?, ?)', [product, department, price, quantity], function(err, rows, fields) {
			if(err) throw err;
			console.log('Product added successfully');
		});
		connection.end();
	});
};

showOptions();
