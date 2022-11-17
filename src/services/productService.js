import db from '../models/index';

let getAllProducts = (productId) => {
	return new Promise(async (resolve, reject) => {
		try {
			let product = '';
			if (productId === 'ALL') {
				product = await db.Product.findAll({});
				//     {
				// 	attributes: {
				// 		exclude: [ 'password' ]
				// 	}
				// }
			}
			if (productId && productId !== 'ALL') {
				product = await db.Product.findOne({
					where: { id: productId }
					// attributes: {
					// 	exclude: [ 'password' ]
					// }
				});
			}

			resolve(product);
		} catch (e) {
			reject(e);
		}
	});
};

let createNewProduct = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Product.create({
				productId: data.productId,
				productName: data.productName,
				price: data.price,
				size: data.size,
				describe: data.describe,
				category: data.category,

				image: data.image
			});
			resolve({
				errCode: 0,
				message: 'Ok'
			});
		} catch (e) {
			reject(e);
		}
	});
};

let deleteProduct = (productId) => {
	return new Promise(async (resolve, reject) => {
		try {
			let foundProduct = await db.Product.findOne({
				where: { id: productId }
			});

			if (!foundProduct) {
				resolve({
					errCode: 2,
					message: `The product isn't exist`
				});
			}

			console.log('check delete', foundProduct);
			await db.Product.destroy({
				where: { id: productId }
			});
			resolve({
				errCode: 0,
				message: 'The product is deleted'
			});
		} catch (e) {
			reject(e);
		}
	});
};

let updateProductData = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.id) {
				resolve({
					errCode: 2,
					message: 'Missing required parameter'
				});
			}
			let product = await db.Product.findOne({
				where: { id: data.id },
				raw: false
			});
			if (product) {
				product.productId = data.productId;
				product.productName = data.productName;
				product.price = data.price;
				product.size = data.size;
				product.describe = data.describe;
				product.category = data.category;

				if (data.image) {
					product.image = data.image;
				}

				await product.save();

				resolve({
					errCode: 0,
					message: 'Update product success'
				});
			} else {
				resolve({
					errCode: 1,
					message: 'Product not found'
				});
			}
		} catch (e) {
			console.log(e);
		}
	});
};
let getTopProductServices = (limitInput) => {
	return new Promise(async (resolve, reject) => {
		try {
			let products = await db.Product.findAll({
				limit: limitInput,
				order: [ [ 'createdAt', 'DESC' ] ],
				attributes: {
					exclude: [ '' ]
				},
				include: [
					{ model: db.AllCodes, as: 'categoryData', attributes: [ 'value' ] },
					{ model: db.AllCodes, as: 'sizeData', attributes: [ 'value' ] }
				],
				raw: true,
				nested: true
			});

			// if (products && products.image) {
			// 	products.image = new Buffer(products.image, 'base64').toString('binary');
			// }

			// if (!products) products = {};
			resolve({
				errCode: 0,
				data: products
			});
		} catch (e) {
			reject(e);
		}
	});
};

let getDetailProductById = (inputId) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!inputId) {
				resolve({
					errCode: -1,
					errMessage: 'Missing required parameter'
				});
			} else {
				let data = await db.Product.findOne({
					// attributes: {
					// 	exclude: [ '' ]
					// },
					include: [ { model: db.AllCodes, as: 'categoryData', attributes: [ 'value' ] } ],
					where: {
						id: inputId
					},

					raw: false,
					nested: true
				});
				if (data && data.image) {
					data.image = new Buffer(data.image, 'base64').toString('binary');
				}

				if (!data) data = {};
				resolve({
					errCode: 0,
					data: data
				});
			}
		} catch (e) {
			reject(e);
		}
	});
};
module.exports = {
	getAllProducts: getAllProducts,
	createNewProduct: createNewProduct,
	updateProductData: updateProductData,
	deleteProduct: deleteProduct,
	getTopProductServices: getTopProductServices,
	getDetailProductById: getDetailProductById
};
