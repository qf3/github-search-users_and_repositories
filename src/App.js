import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar';
import TextInput from './components/TextInput';
import SearchItems from './components/SearchItems';

export default class App extends Component{
  render(){
    return(
      <div>
        <ProgressBar/>
        <TextInput/>
        <SearchItems/>
      </div>
    )
  }
}