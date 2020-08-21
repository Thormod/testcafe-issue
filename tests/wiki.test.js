import { Selector } from 'testcafe';

const clientScriptsObject = [
  { module: 'mockdate' },
  { content: "MockDate.set('2020-04-19')" },
];

const mockDate = `
    Date.now = function () {
        return 1566408247;
    };
`;

fixture('My first fixture').page('https://www.wikipedia.org/');

test('users can search', async (t) => {
  await t
    .click(Selector('#searchInput'))
    .click(Selector('#this-selector-does-not-exist'))
    .typeText(Selector('#searchInput'), 'vikings')
    .click(Selector('button[type=submit]'));
}).clientScripts({ content: mockDate });
