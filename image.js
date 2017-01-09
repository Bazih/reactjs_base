const DOM = React.DOM;

const source =
      {
        src: 'https://ozon-st.cdn.ngenix.net/multimedia/1013279403.jpg',
        style: {
          width: '150px',
          height: '200px'
        },
        alt: 'JavaScript и jQuery. Исчерпывающее руководство'
      };

const Image = ({ src, style:{width, height}, alt }) => (
  DOM.img(
    {
      src: src,
      style: {
        width: width,
        height: height
      },
      alt: alt
    }
  )
);

ReactDOM.render(
  React.createElement(Image, source),
  document.getElementById('app')
);
