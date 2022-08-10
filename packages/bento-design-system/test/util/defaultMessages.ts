import { unsafeLocalizedString } from "../../src/util/LocalizedString";
import { DefaultMessages } from "../../src/DefaultMessagesContext";

export const defaultMessages: DefaultMessages["defaultMessages"] = {
  Chip: {
    dismissButtonLabel: unsafeLocalizedString("Remove"),
  },
  Banner: {
    dismissButtonLabel: unsafeLocalizedString("Close"),
  },
  Modal: {
    closeButtonLabel: unsafeLocalizedString("Close"),
  },
  SelectField: {
    noOptionsMessage: unsafeLocalizedString("No options"),
    multiOptionsSelected: (n) => {
      const options = n > 1 ? "options" : "option";
      return unsafeLocalizedString(`${n} ${options} selected`);
    },
    selectAllButtonLabel: unsafeLocalizedString("Select all"),
    clearAllButtonLabel: unsafeLocalizedString("Clear all"),
  },
  SearchBar: {
    clearButtonLabel: unsafeLocalizedString("Clear"),
  },
  Table: {
    noResultsTitle: unsafeLocalizedString("No results found"),
    noResultsDescription: unsafeLocalizedString(
      "Try adjusting your search filters to find what you're looking for."
    ),
    missingValue: unsafeLocalizedString("-"),
  },
  Loader: {
    loadingMessage: unsafeLocalizedString("Loading..."),
  },
  DateField: {
    nextMonthLabel: unsafeLocalizedString("Next month"),
    previousMonthLabel: unsafeLocalizedString("Prev month"),
  },
  TextField: {
    showPasswordLabel: unsafeLocalizedString("Show password"),
    hidePasswordLabel: unsafeLocalizedString("Hide password"),
  },
};
