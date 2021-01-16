import './App.css';
import React  from "react";

class App extends React.Component {
  constructor(){
    super();
    /* TODO:
     Create a state object with the following attributes
     word_count: 0
     char_count: 0
     unique_word_count: 0
     vocab: {}
    */
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let new_char_count = e.target.value.length;
    let new_words_array = e.target.value.split(/[,.!?\\-\s]/).filter(Boolean);
    // ---------------------------
    // Form dictionary with counts
    // ---------------------------
    // TODO: Create an object and call it dictionairy
    let new_dict = {}
    for(let i = 0; i < new_words_array.length; i++){
      let word = new_words_array[i];
      if(new_dict[word]){ // Word exists in dictionary
        // TODO: Add 1 to the word count
      } else { // Word does not exist in our dictionary
        // TODO: Create an attribute for the word in our dictionary
        // TODO: Set the initial value for the word in our dictionary to 1.
      }
    }
    let set = new Set(new_words_array);
    // TODO: Set state of component to update all information
  }

  render (){
    return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"100%", height: "100%"}}>
          <div style={{height: "100%", width:"70%", display: "inline-block"}}>
              {
              // TODO: set value attribute of textarea to the variable "text" stored in the state
              }
              <textarea style={{height: "500px", width: "70%", resize:"none", fontSize: 14}} onChange={this.handleChange}/>
              <p>Character count: 0</p>
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
            <p>unique words count: 0</p>
            <p>number of words: 0</p>
            <ul>
              {
                /*
                Uncomment below in your last step
                */
              }
              {/* {Object.keys(this.state.vocab).map(item => 
                <li style={{fontSize: 16, textAlign: 'left'}}>{item}: {this.state.vocab[item]}</li>
                )} */}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
