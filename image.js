class Image extends React.Component {
  render() {
    const { src, style:{width, height}, alt } = this.props;
    return (
      <img src={src} width={width} height={height} alt={alt} />
    )
  }
};

Image.defaultProps = {
  src: "http://placehold.it/150x200/f0d0bc/000/&text=Image",
  style: {
    width: '150px',
    height: '200px'
  },
  alt: 'Description'
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }),
  alt: PropTypes.string
};
