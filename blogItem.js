class BlogItem extends React.Component {
  render() {
    const { postData } = this.props;
    return (
      <div className="blog-item">
        <Image {...postData} />
        <TextBox {...postData} />
        <Meta {...postData} />
        <Like {...postData.meta} />
      </div>
    );
  }
};

BlogItem.propTypes = {
  postData: PropTypes.object.isRequired,
  children: PropTypes.number
};
