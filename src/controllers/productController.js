import productService from '../services/productService';

let handleGetAllProducts = async (req, res) => {
	let id = req.query.id;

	if (!id) {
		return res.status(200).json({
			errCode: 1,
			errMessage: 'Missing required parameters',
			users: []
		});
	}

	let product = await productService.getAllProducts(id);
	return res.status(200).json({
		errCode: 0,
		errMessage: 'Ok',
		product
	});
};

let handleCreateNewProduct = async (req, res) => {
	let message = await productService.createNewProduct(req.body);
	return res.status(200).json(message);
};
let handleDeleteProduct = async (req, res) => {
	if (!req.body.id) {
		return res.status(200).json({
			errCode: 1,
			errMessage: 'Missing required parameters'
		});
	}

	let message = await productService.deleteProduct(req.body.id);
	return res.status(200).json(message);
};
let handleEditProduct = async (req, res) => {
	let data = req.body;
	let message = await productService.updateProductData(data);
	return res.status(200).json(message);
};

let getTopProduct = async (req, res) => {
	let limit = req.query.limit;
	if (!limit) limit = 10;
	try {
		let response = await productService.getTopProductServices(+limit);
		return res.status(200).json(response);
	} catch (e) {
		console.log(e);
		res.status(200).json({
			errCode: -1,
			errMessage: 'Error from server'
		});
	}
};
let getDetailProductById = async (req, res) => {
	try {
		let infor = await productService.getDetailProductById(req.query.id);
		return res.status(200).json(infor);
	} catch (e) {
		console.log(e);
		res.status(200).json({
			errCode: -1,
			errMessage: 'Error from server'
		});
	}
};

module.exports = {
	handleGetAllProducts: handleGetAllProducts,
	handleCreateNewProduct: handleCreateNewProduct,
	handleEditProduct: handleEditProduct,
	handleDeleteProduct: handleDeleteProduct,
	getTopProduct: getTopProduct,
	getDetailProductById: getDetailProductById
};
