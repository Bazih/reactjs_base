class BlogList extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      _.map(
        this.props,
        (source, key) => (
          <div key={ key }>
            <BlogItem {...source} />
          </div>
        )
      )
    );
  }
};
