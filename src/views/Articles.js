import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import { fetchItems } from '../actions';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate>
        {articles.map(({ _id: id, title, content, articleUrl, created }) => (
          <Card
            id={id}
            title={title}
            content={content}
            articleUrl={articleUrl}
            created={created}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
  fetchArticles: PropTypes.func.isRequired,
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
