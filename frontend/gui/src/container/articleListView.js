import React, {Component} from 'react';
import Articles from '../components/articles';
import axios from 'axios';
import CustomForm from '../components/form';

class ArticleList extends Component {

  state = {
    articles: [],
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
  }

  render() {
        return (
            <div>
              <h1>Create an article:</h1>
              <CustomForm 
                  requestType="post"
                  articleID="null"
                  btnText="Create"
                />
                <br/>
                <Articles data={this.state.articles} />
            </div>
            
        )
    }
}
export default ArticleList;