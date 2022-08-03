import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import Continent from '../../pages/Continent';
import store from '../../store/configureStore';

describe('Testing Continent component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router path="/asia">
            <Continent />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
