// import React from 'react';
// import Autosuggest from 'react-autosuggest';

// // Imagine you have a list of languages that you'd like to autosuggest.
// const languages = [
//   {
//     name: 'C',
//     year: 1972
//   },
//   {
//     name: 'Elm',
//     year: 2012
//   },
//   {
//     name: 'React',
//     year: 2012
//   },
// ];

// interface TempState {
//   value: any, 
//   suggestions: any
// }

// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = (value: any) => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : languages.filter(lang =>
//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };

// // When suggestion is clicked, Autosuggest needs to populate the input
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = (suggestion:any) => suggestion.name;

// // Use your imagination to render suggestions.
// const renderSuggestion = (suggestion:any) => (
//   <div>
//     {suggestion.name}
//   </div>
// );

// class Inputexample extends React.Component<any, any>{
//   constructor(
//     value: string,
//     suggestions: Array<any>
//   ) {
//     super(value, suggestions);
//     this.state = {
//       value: '',
//       suggestions: []
//     };
//   }

//   onChange = (event:any, { newValue } : {newValue:any}) => {
//     this.setState({
//       value: newValue
//     });
//   };

//   // Autosuggest will call this function every time you need to update suggestions.
//   // You already implemented this logic above, so just use it.
//   onSuggestionsFetchRequested = ({ value } : {value : any}) => {
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };

//   // Autosuggest will call this function every time you need to clear suggestions.
//   onSuggestionsClearRequested = () => {
//     this.setState({
//       suggestions: []
//     });
//   };

  

//   render() {
//     const { value, suggestions } = this.state;

//     // Autosuggest will pass through all these props to the input.
//     const inputProps = {
//       placeholder: 'Type a programming language',
//       value,
//       onChange: this.onChange
//     };

//     // Finally, render it!
//     return (
//       <Autosuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps}
//       />
//     );
//   }
// }

// export default Inputexample;

import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

import "./autosuggest.css";

const companies: string[] = [
  "Company1",
  "Company2",
  "Big Corp",
  "Happy Toy Company"
];

interface Propsdata {
  data? : Array<any>
}

const lowerCasedCompanies = companies.map(language => language.toLowerCase());

const Inputsuggest: React.FC = ()  => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  function getSuggestions(value: string): string[] {
    return lowerCasedCompanies.filter(language =>
      language.startsWith(value.trim().toLowerCase())
    );
  }
  return (
    <div>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={suggestion => suggestion}
        renderSuggestion={suggestion => <span>{suggestion}</span>}
        inputProps={{
          placeholder: "Search Input",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          }
        }}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};

export default Inputsuggest;