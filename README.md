# @testing-library/user-event paste() issue when using happy-dom - Reproduction

This repo was generated using Vite and demonstrates and issue with using the user.paste() API from @testing-library/user-event when using the environemnt `happy-dom`. The tests are run using Vitest.

## Reproduction steps

1. Clone repository
2. Install dependencies `npm install` or `yarn install`
3. Run the tests `npm run test` or `yarn test`
4. See error message in console that will look like the following:

```
FAIL  src/App.test.tsx > App > can paste in input
TypeError: dt.setData is not a function
 ❯ getClipboardDataFromString node_modules/@testing-library/user-event/dist/esm/clipboard/paste.js:25:8
 ❯ Object.paste node_modules/@testing-library/user-event/dist/esm/clipboard/paste.js:16:70
 ❯ node_modules/@testing-library/user-event/dist/esm/setup/setup.js:84:35
 ❯ Object.asyncWrapper node_modules/@testing-library/react/dist/pure.js:73:28
 ❯ wrapAsync node_modules/@testing-library/user-event/dist/esm/setup/wrapAsync.js:7:24
 ❯ Object.method [as paste] node_modules/@testing-library/user-event/dist/esm/setup/setup.js:84:16
 ❯ src/App.test.tsx:15:16
     13|     // assert
     14|     await user.click(screen.getByRole('textbox'));
     15|     await user.paste('Hello, world!');
       |                ^
     16|   });
     17| });
```
