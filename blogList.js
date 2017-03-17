class BlogList extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      _.map(
        this.props,
        (source, key) => (
          DOM.div({ key }, React.createElement(BlogItem, source))
        )
      )
    );
  }
};
