import React, {Component} from 'react'
import ArticleList from './ArticleList'
//import articles from '../DataAPI'

function App(){
    return (
      <div>
        <h1>SPA</h1>
        <ArticleList articles = {articles} />
      </div>
    )
  }


     /* class App extends Component {
    constructor(props){
      super(props)

      this.state = {
          bobo:{}
      }
    }

    componentDidMount(){
      fetch:("https://esi.evetech.net/dev/universe/factions/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          bobo:data
        })
      })
    }

    render() {
      return (
        <div>
        <h1>SPA</h1>
        <Article article={this.state.bobo[0]}/>
      </div>
      )
    }
  }
  */

export default App


