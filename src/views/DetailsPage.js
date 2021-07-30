import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { match } from 'assert';
import axios from 'axios';
import { urlToHttpOptions } from 'http';
// const dummyArticle = {
//   id: 1,
//   title: 'Wake me up when Vue ends',
//   content:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   twitterName: 'hello_roman',
//   articleUrl: 'https://youtube.com/helloroman',
//   created: '1 day',
// };

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: ``,
      content: ``,
      articleUrl: ``,
      twitterName: ``,
    },
  };

  componentDidMount() {
    console.log(this.props.activeItem);
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({ activeItem });
    } else {
      // const [item] = this.props.activeItem;
      const { id } = this.props.match.params;

      // if (!item) {
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        created={activeItem.created}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    // console.log(ownProps);
    return {
      activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
