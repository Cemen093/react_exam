import React, {useEffect, useState} from 'react';
import {useFetching} from "../components/hooks/useFetching";
import HitService from "../components/UI/API/HitService";
import HitItem from "../components/HitItem";
import Loader from "../components/UI/Loader/Loader";
import HitsList from "../components/HitsList";

const Home = () => {
  const [query, setQuery] = useState('weather')
  const [hits, setHits] = useState([])
  const [fetchHits, isHitsLoading, hitsError] = useFetching(async () => {
    const response = await HitService.getAll(query);
    setHits(response.data.hits);
  });

    useEffect(() => {
      fetchHits();
    }, [query])

    return (
      <div>
        { hitsError && <h1>При загрузке хитов произошла ошибка ${hitsError}</h1> }
        <HitsList hits={hits} title={'Список хитов'} isHitsLoading={isHitsLoading}/>
      </div>
    );
};

export default Home;