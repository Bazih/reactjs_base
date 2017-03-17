class Image extends React.Component {
  render() {
    const { src, style:{width, height}, alt } = this.props.image;
    return (
      DOM.img(
        {
          src,
          width,
          height,
          alt
        }
      )
    )
  }
};

Image.defaultProps = {
  image: {
  src: "http://placehold.it/150x200/f0d0bc/000/&text=Image",
  style: {
    width: '150px',
    height: '200px'
  },
  alt: 'Description'}
};

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    style: PropTypes.shape({
      width: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired
    }),
    alt: PropTypes.string
  })
};
