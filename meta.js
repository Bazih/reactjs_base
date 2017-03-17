const Meta = ({meta:{author, created_at, updated_at}}) => (
  DOM.ul(
    null,
    DOM.li(null, 'Автор: ' + author),
    DOM.li(null, 'Создано: ' + moment(created_at).format('D MMM YYYY')),
    DOM.li(null, 'Изменено: ' + moment(updated_at).format('D MMM YYYY')),
  )
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
