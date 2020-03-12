const routes = (router) => {
  router
    .route('/')
    .get((req, res) => res.status(200).json({
      status: 'success',
      message: 'welcome to webTask api root endpoint'
    }));
};

module.exports = routes;
