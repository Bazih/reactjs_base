class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: this.props.likes };
  }

  handleClick() {
    this.setState({ likes: this.props.likes + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={bind(this.handleClick, this)}>
          Likes
        </button>
        <span>Лайки: { this.state.likes }</span>
      </div>
    );
  }
};

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number
};
