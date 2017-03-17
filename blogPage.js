const DOM = React.DOM;
const PropTypes = React.PropTypes;
const { assign, bind } = _;

moment.updateLocale('ru', 'ru');

const source = [
      {
        postData: {

        }
      },
      {
        postData: {
          image: {
            src: 'https://ozon-st.cdn.ngenix.net/multimedia/1007123068.jpg',
            style: {
              width: '150px',
              height: '200px'
            },
            alt: 'Секреты JavaScript ниндзя'
          },
          text: 'This is two mini post.',
          meta: {
            author: 'Петров',
            created_at: '2016-10-09',
            updated_at: '2016-10-10',
            likes: 2
          }
        }
      },
      {
        postData: {
          image: {
            src: 'https://ozon-st.cdn.ngenix.net/multimedia/1005767303.jpg',
            style: {
              width: '150px',
              height: '200px'
            },
            alt: 'JavaScript. Подробное руководство'
          },
          text: 'This is three mini post.',
          meta: {
            author: 'Сидоров',
            created_at: '2016-12-30',
            updated_at: '2016-12-31',
            likes: 3
          }
        }
      }
];

class BlogPage extends React.Component {
  render() {
    return (
      <div><BlogList {...this.props} /></div>
    )
  }
};

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

class Image extends React.Component {
  render() {
    const { src, style:{width, height}, alt } = this.props.image;
    return (
      <img src={src} width={width} height={height} alt={alt} />
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
    alt: 'Description'
  }
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

const TextBox = ({text}) => (
  <span>text</span>
);
TextBox.defaultProps = {
  text: 'This is post'
};
TextBox.propTypes = {
  text: PropTypes.string.isRequired
};

const Meta = ({meta:{author, created_at, updated_at}}) => (
  <ul>
    <li>Автор: { author }</li>
    <li>Создано: { moment(created_at).format('D MMM YYYY') }</li>
    <li>Изменено: {moment(updated_at).format('D MMM YYYY') }</li>
  </ul>
);
Meta.defaultProps = {
  meta: {
    author: 'false',
    created_at: 'false',
    updated_at: 'false'
  }
};
Meta.propTypes = {
  meta: PropTypes.shape({
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
  })
};

ReactDOM.render(
  React.createElement(BlogPage, source),
  document.getElementById('app')
);
