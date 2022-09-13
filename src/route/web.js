import express from 'express';
import homeController from '../controllers/homeController.js';

let router = express.Router();

let initWebRouters = (app) => {
	router.get('/', homeController.getHomePage);
	router.get('/crud', homeController.getCrud);

	router.post('/crud-post', homeController.postCRUD);
	router.get('/crud-get', homeController.displayGetCRUD);

	return app.use('/', router);
};

// module.exports = initWebRouters;
export default initWebRouters;
