import renderer from 'react-test-renderer';
import { KebabPopMenu } from '.';

describe("[Atom] Kebab Pop Menu", () => {

    it("Kebab Pop Menu renders correctly without props", async () => {
        const tree = renderer.create(<KebabPopMenu />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("Kebab Pop Menu renders correctly with props", async () => {
        const tree = renderer.create(<KebabPopMenu 
                                        isActiveKebab
                                        onUpdate={() => {}} 
                                        onDelete={() => {}}
                                        onOpenMenu={() => {}}
                                        onCloseMenu={() => {}}
                                    />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
