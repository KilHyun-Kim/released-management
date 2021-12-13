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