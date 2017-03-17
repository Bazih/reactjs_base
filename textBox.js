const TextBox = ({text}) => (
  DOM.span(
    null,
    text
  )
);

TextBox.defaultProps = {
  text: 'This is post'
};

TextBox.propTypes = {
  text: PropTypes.string.isRequired
};
