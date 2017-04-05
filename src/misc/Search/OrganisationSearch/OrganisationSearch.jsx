import React, { Component, PropTypes } from 'react';

import classes from './OrganisationSearch.css';

import Autosuggest from 'stemn-shared/misc/Autosuggest/Autosuggest.container';
import Highlight from 'stemn-shared/misc/Autosuggest/Highlight';

export default class OrganisationSearch extends Component {
  static propTypes = {
    select: PropTypes.func.isRequired,
    cacheKey: PropTypes.string.isRequired,
  }
  
  getSuggestionValue = () => suggestion => suggestion.name
  
  renderSuggestion = (suggestion, { query }) => {
    return (
      <div className="layout-row layout-align-start-center">
        <div style={{marginLeft: '10px'}} className="flex">
          <Highlight text={ suggestion.name } query={ query } hightlightClass={ classes.highlight }/>
        </div>
      </div>
    );
  }

  render() {
    const { select, cacheKey } = this.props;
      
    return (
      <Autosuggest
        cacheKey={ `org-search-${cacheKey}` }
        placeholder='Search and organisations'
        select={ select }
        renderSuggestion={ this.renderSuggestion }
        getSuggestionValue={ this.getSuggestionValue }
        entityType='organisation'
      />
    );
  }
}
