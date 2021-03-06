import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'book',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Book = require('./containers/BookContainer').default
      const reducer = require('./modules/book').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'book', reducer })

      /*  Return getComponent   */
      cb(null, Book)

    /* Webpack named bundle   */
  }, 'book')
  }
});
