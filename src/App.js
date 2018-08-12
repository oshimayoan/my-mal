// @flow strict

import React, {Component} from 'react';
import JikanAPI from 'jikanjs';
import ImageFrame from './core-ui/ImageFrame';

type Season = 'spring' | 'summer' | 'fall' | 'winter';

type AnimeType = 'TV' | 'OVA' | 'ONA' | 'Movie' | 'Special';

type AnimeList = $Exact<{
  id: number,
  url: string,
  title: string,
  imageUri: string,
  type: AnimeType,
}>;

type LoadSeasonResult = $Exact<{
  request_cached: boolean,
  request_hash: string,
  season: Array<
    $Exact<{
      mal_id: number,
      url: string,
      title: string,
      image_url: string,
      type: AnimeType,
    }>,
  >,
  season_name: string,
  season_year: number,
}>;

type State = $Exact<{
  isLoadAnimeList: boolean,
  animeList: Array<AnimeList>,
}>;

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
          <div style={{display: 'flex', flex: 1}} data-test="appContainer">
            {animes}
          </div>
        );
      }
    }
  }

  _fetchSeasonalAnime = async (year: number, season: Season) => {
    try {
      let result: LoadSeasonResult = await JikanAPI.loadSeason(year, season);
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
