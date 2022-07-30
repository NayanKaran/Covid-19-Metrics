import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';

describe('Testing Header component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
