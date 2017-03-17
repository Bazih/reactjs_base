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
