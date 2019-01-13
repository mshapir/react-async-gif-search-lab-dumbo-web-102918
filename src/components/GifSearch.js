import React from 'react'

class GifSearch extends React.Component {
  state={
    query: ''
  }

  handleChange = (event) => {
    const input = event.target.value
    this.setState({
      [event.target.name]: input
    })
  }

  handleSubmit = (event) => {
		event.preventDefault()
		this.props.fetchGifs(this.state.query)
	}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id='search-input' type='text' name='query' value={this.state.searched} onChange={this.handleChange}/>
        <button type='submit'>Search</button>
       </form>
    );
  }
}
export default GifSearch;
