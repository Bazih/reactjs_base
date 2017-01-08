const DOM = React.DOM;

const source = { text: 'This is mini post.' };

const TextBox = ({text}) => (
  DOM.span(
    null,
    `${text}`
  )
);

ReactDOM.render(
  React.createElement(TextBox, source),
  document.getElementById('app')
);
