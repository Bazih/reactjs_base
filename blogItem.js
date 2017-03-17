class BlogItem extends React.Component {
  render() {
    const { postData } = this.props;
    const { image, meta } = postData;
    return (
      <div className="blog-item">
        <Image {...image} />
        <TextBox {...postData} />
        <Meta {...meta} />
        <Like {...meta} />
      </div>
    );
  }
};

BlogItem.propTypes = {
  postData: PropTypes.shape({
    image: PropTypes.shape(Image.propTypes)
  })
};
