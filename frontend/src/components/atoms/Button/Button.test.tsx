import renderer from 'react-test-renderer';
import { Button } from '.';

describe("[Atom] Button", () => {

  it("Button renders correctly without props", () => {
    const tree = renderer.create(<Button>Click Me</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Button renders correctly with props", () => {
    const tree = renderer.create(<Button 
                                    variance='primary'
                                    block
                                    disabled
                                    onClick={() => {}}
                                  >Click Me</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
