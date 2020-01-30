import React, { Component } from 'react'
import fetchRepos from './Api'
import PropTypes from 'prop-types'; 
const SelectedLanguage = ({selectedLanguage,updateLanguage})=>{
    const languages =["All", "JavaScript" , "Java" , "Python"]
    // const {selectedLanguage,updateLanguage} = props
    return(
        <div className="nav">
        {languages.map((language,index)=> (
            <li key={index}
             onClick={()=>updateLanguage(language)}
             style={selectedLanguage === language ? {color : 'red'} : null }>
                {language}
            </li>
        ))}
        </div>
    )
}

SelectedLanguage.propTypes= {
    selectedLanguage : PropTypes.string.isRequired,
    updateLanguage :  PropTypes.func.isRequired
}

const RepoGrid = ({repos})=>{
    return(
        <div className="grid-container">
        {repos.map((repo,index)=>(
            <div key={repo.id} style={{ alignContent:'flex-start' ,maxwidth: "250px", height:"300px", border:"1px solid grey"}}>
                <img src={repo.owner.avatar_url} alt={repo.name} width="100%" height="50%" />
                <div style={{textAlign:'center', background:'#f5f5f5'}}>
                 <h3>{repo.name}</h3>
                 <h3>rank : #{index + 1}</h3>
                 <h3>count : {repo.stargazers_count}</h3>
                </div>
                </div>
        ))}
    </div>
    )
}

RepoGrid.propTypes = {
    repos : PropTypes.array.isRequired
}



export default class P0 extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedLanguage : 'All',
            repos : []
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }
    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
        // fetchRepos(this.state.selectedLanguage).then((data)=> console.log("api data", data))
    }
    updateLanguage(input){
        this.setState({
                selectedLanguage : input,
                repos : []
        })
        fetchRepos(input).then((data)=> this.setState({
            repos : data
        }))
    }
    render() {
        const {selectedLanguage,repos} = this.state
        return (
            <div>
                <SelectedLanguage selectedLanguage={selectedLanguage} updateLanguage={this.updateLanguage} />
                { !repos.length ? 'Loading from the api ' : <RepoGrid repos={repos} /> }
            </div>
        )
    }
}
