import userRoutes from './userRoutes';

const routes = (router) => {
  router
    .route('/')
    .get((req, res) => res.status(200).json({
      status: 'success',
      message: 'welcome to webTask api root endpoint'
    }));

  userRoutes(router);
};


module.exports = routes;
