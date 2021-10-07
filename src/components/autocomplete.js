import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { hits, searchBox, configure, index } from 'instantsearch.js/es/widgets';

// Instant Search Connectors
import { connectHits, connectRefinementList } from 'instantsearch.js/es/connectors';

// Autocomplete Template - Product
import autocompleteProductTemplate from '../templates/autocomplete-product';


/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      'RM3X4H1SHX',
      '9876896af399671f15e0dc5498ee0c2c'
    );

    this._searchInstance = instantsearch({
      indexName: 'computer_parts',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
  */
  _registerWidgets() {
    //Customize UI of the Query Suggestion Hits
      const renderQSHits = ({ widgetParams, hits }, isFirstRender) => {

        const container = document.querySelector(widgetParams.container);

        container.innerHTML = `<ul>
          ${hits
            .map(
              (item) => `
              <li>${instantsearch.highlight({ hit: item, attribute: 'query' })}</li>
            `
            )
            .join('')}
        </ul>`;
      };

      const QSHits = connectHits(renderQSHits);

     //Add Widgets
    this._searchInstance.addWidgets([
      //Searchbox container - used for both indexes
      searchBox({
          container: '#searchbox',
        }),
      //This index displays products
      index({
        indexName: 'computer_parts',
      }).addWidgets([
        configure({
        hitsPerPage: 3,
        }),
        hits({
          container: '#autocomplete-hits',
          templates: { item: autocompleteProductTemplate },
        }),
      ]),
      //This index displays suggestions
      index({
        indexName: 'computer_parts_query_suggestions',
      }).addWidgets([
        configure({
        hitsPerPage: 16,
        }),
        QSHits({
          container: '#suggestions',
        }),
      ]),
    ]);
  }
  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default Autocomplete;
