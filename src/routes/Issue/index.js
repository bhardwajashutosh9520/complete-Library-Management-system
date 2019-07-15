import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'issue',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const issue = require('./containers/IssueContainer').default
      const reducer = require('./modules/Issue').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'issue', reducer })

      /*  Return getComponent   */
      cb(null, issue)

    /* Webpack named bundle   */
  }, 'issue')
  }
});
