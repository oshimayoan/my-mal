// @flow strict-local

import React, {Component} from 'react';
import JikanAPI from 'jikanjs';
import ImageFrame from './core-ui/ImageFrame';

import type {Season, AnimeType} from 'jikanjs';

type AnimeList = {|
  id: number,
  url: string,
  title: string,
  imageUri: string,
  type: AnimeType,
|};

type State = {|
  isLoadAnimeList: boolean,
  animeList: Array<AnimeList>,
|};

class App extends Component<{}, State> {
  state = {
    isLoadAnimeList: true,
    animeList: [],
  };

  componentDidMount() {
    this._fetchSeasonalAnime(2018, 'summer');
  }

  render() {
    let {isLoadAnimeList, animeList} = this.state;
    let animes: Array<ReactNode> = [];
    switch (isLoadAnimeList) {
      case true: {
        return <div>Fetching data...</div>;
      }
      default: {
        if (animeList.length < 1) {
          return <div>Nothing here</div>;
        }
        for (let i = 0; i < 3; i++) {
          animes = [
            ...animes,
            <ImageFrame
              key={i}
              imageUri={animeList[i].imageUri}
              title={animeList[i].title}
              link={animeList[i].url}
              dataTest={`imageFrame${i}`}
            />,
          ];
        }
        return (
          <div style={{display: 'flex', flex: 1}} data-testid="appContainer">
            {animes}
          </div>
        );
      }
    }
  }

  _fetchSeasonalAnime = async (year: number, season: Season) => {
    try {
      let result = await JikanAPI.loadSeason(year, season);
      this.setState({
        animeList: result.season.map((anime) => ({
          id: anime.mal_id,
          url: anime.url,
          title: anime.title,
          imageUri: anime.image_url,
          type: anime.type,
        })),
        isLoadAnimeList: false,
      });
    } catch (err) {
      this.setState({isLoadAnimeList: false});
    }
  };
}

export default App;
