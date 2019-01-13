import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: {},
  }
  componentDidMount() {
		this.fetchGifs()
  }

	fetchGifs = (query = 'nba') => {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then(r => r.json())
		.then(data => {
			this.setState({
				gifs: data
			})
		})
	}


	gifsArray = () => {
		if (this.state.gifs.data){
			return this.state.gifs.data.slice(0, 3).map(gif => {
				return 	<GifList key={gif.id} gif={gif}/>
			})
		}else {
			return (<h1>Loading...</h1>)
		}
	}
  render() {
    return (
			<div>
				<GifSearch fetchGifs={this.fetchGifs}/>
				{this.gifsArray()}
			</div>)
  }
}
export default GifListContainer;
