# 🤖 Autocomplete-API-Input-React-Redux


![Autocomplete API input React Redux Screen shot](./ScreenShot.png )


The project is a recruitment task, it is using technologies and doing tasks as: 

- [x] For user interface JavaScript with React JS 
- [x] For global state management Redux / React-Redux / Redux-Thunk
- [x] For asynchronous fetching data axios
- [x] For handling suggestions: 
  - OnChange
  - OnClick
  - KeyDown for keyboard handling
- [x] Basic CSS styling
1. Axios is downloading all users when component is mounted and is adding only user names Redux global state.

2. Input is listening at 'onChange' method and checking with Regular Expression which letters starting from right are matching with user names stored in redux store. 

3. Additional method "handleSuggestions" is filtering which user names are matching and all of them are displayed 
   just below the input.

4. We can choose from suggestions using mouse - hover is showing which one is currently hovered.

5. We can also use keyboard "keyDown" method to navigate through suggestions and approve by ENTER button or exit by 
   ESC button.
