import './App.css';
import React  from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      word_count: 0,
      char_count: 0,
      unique_word_count: 0,
      vocab: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let new_char_count = e.target.value.length;
    let new_words_array = e.target.value.split(/[,.!?\\-\s]/).filter(Boolean);
    // ---------------------------
    // Form dictionary with counts
    // ---------------------------
    let new_dict = {}
    for(let i = 0; i < new_words_array.length; i++){
      let word = new_words_array[i];
      if(new_dict[word]){
        new_dict[word] += 1;
      } else {
        new_dict[word] = 1;
      }
    }
    let set = new Set(new_words_array);
    this.setState({
      char_count: new_char_count, 
      unique_word_count: set.size,
      word_count: new_words_array.length,
      vocab: new_dict
    });
  }

  render (){
    return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"100%", height: "100%"}}>
          <div style={{height: "100%", width:"70%", display: "inline-block"}}>
              <textarea style={{height: "500px", width: "70%", resize:"none", fontSize: 14}} onChange={this.handleChange} value={this.state.text}/>
              <p>Character count: {this.state.char_count}</p>
          </div>
          <div style={{
            borderLeft: "6px solid grey",
            height: "100%",
            position: "absolute",
            left: "70%",
            top: "0",
            display: "inline-block"
          }}></div>
          <div style={{float: "right", width: "30%"}}>
            <p>unique words count: {this.state.unique_word_count}</p>
            <p>number of words: {this.state.word_count}</p>
            <ul>
              {Object.keys(this.state.vocab).map(item => 
                <li style={{fontSize: 16, textAlign: 'left'}}>{item}: {this.state.vocab[item]}</li>
                )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
