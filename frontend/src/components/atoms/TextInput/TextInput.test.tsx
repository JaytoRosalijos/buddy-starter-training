import renderer from 'react-test-renderer';
import { TextInput } from '.';

describe("[Atom] Text Input", () => {
  
  it('Text Input renders correctly without props', () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Text Input renders correctly with props', () => {
    const tree = renderer.create(<TextInput 
                                    title="Label"
                                    maxLength={100}
                                    allowClear
                                    placeholder="Text Input"
                                    type="password"
                                    onChange={() => {}}
                                    onBlur={() => {}}
                                    onPressEnter={() => {}}
                                />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});