import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../../pages/Home';
import store from '../../store/configureStore';

describe('Testing Home component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});