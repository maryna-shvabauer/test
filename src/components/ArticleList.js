import React, {Component} from 'react'
import Article from './Article'

class ArticleList extends Component {
    constructor(){
        super()
        this.state = {
            articles: []
        }
        
    }

    componentDidMount() {
        fetch("https://esi.evetech.net/dev/universe/factions/")
        .then(response => response.json())
        .then(data => {
            this.setState({
              articles: data
            })
          })         
    }    

    render() {
        const articleElemnts = this.state.articles.map(article =>                
            <li key = {article.id}>
                <Article article = {article} /> 
            </li>
        )
        return (
            <ul>
                {articleElemnts}
            </ul>
        )
    }
}

export default ArticleList

/*export default function ArticleList({ articles }) {
    const articleElemnts = articles.map(article =>                
        <li key = {article.id}>
            <Article article = {article} /> 
        </li>
    )
    return (
        <ul>
            {articleElemnts}
        </ul>
    )

}*/