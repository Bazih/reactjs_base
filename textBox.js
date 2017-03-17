const TextBox = ({text}) => (
  <span>{ text }</span>
);

TextBox.defaultProps = {
  text: 'This is post'
};

TextBox.propTypes = {
  text: PropTypes.string.isRequired
};
