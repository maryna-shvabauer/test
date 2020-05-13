import React, {Component} from 'react'


    /*constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }

        this.handleClick = handleClick.bind(this)
    } */
    
    class Article extends Component {
        state = {
            isOpen: false
        }
    
        render() {
            const {article} = this.props
            const body = this.state.isOpen && <section>{article.description}</section>
            return (
              <div>
                <h2>
                    {article.name}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'закрыть' : 'открыть'}
                    </button>
                </h2>
                {body}
                <h3>ID солнечной системы {article.solar_system_id}</h3>
              </div>
            )
        }
    
        handleClick = () => {
            this.setState({
                isOpen: !this.state.isOpen 
            })
        }
    
    }

  export default Article