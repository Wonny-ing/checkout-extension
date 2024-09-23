import {extension} from '@shopify/ui-extensions/checkout';

export default  extension(
  'purchase.address-autocomplete.format-suggestion',
  async ({target}) => {

    const {selectedSuggestion} = target;

    const response = await fetchSuggestions();

    const {result} = await response.json();

    const formattedAddress = result.suggestions.find(({global_address_key}) => global_address_key === selectedSuggestion.id)

    return formattedAddress;
  },
);

async function fetchSuggestions() {
  return fetch(`https://shopify.github.io/address-autocomplete/format-suggestion.json`)
}
