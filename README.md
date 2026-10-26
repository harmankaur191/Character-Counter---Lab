# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Reflection

### Handling state updates on text change
To handle state on text change, event listener is added on the text area which updates the state of that text area and stores the updated text. The length function is used to get the character count. To get the wors, regular expression is used to breakdown the word by trimming whitspaces and get its length to get the word count.

### Considerations to calculate reading time
To calculate reading time, assumption is made that it takes 3 words per second. The total readint time is divided by 60 to display it in Min:Sec format as a string.

### Responsive UI during rapid text input
The text input updates te parent state via an event callback, which then flows down to the StatsDisplay component to display updated reading time, character counter and word count.

### Challenges while implementing the statistics calculations
1. The word count was not updating properly when at first I tried using string.endsWith() which did not updated the reading time correctly. In order torecord the reading time correctly. To handle this issue, regular expression is used to get each word and store in an array and its  length wsa used to calculate time.
2. Passing the objects as parameter was confusing at first but the issue was resolved by identifying requirements of each component. 