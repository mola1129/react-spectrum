import {
  Provider,
  defaultTheme,
  TextField,
  ActionButton,
  View,
} from "@adobe/react-spectrum";

export function ReactSpectrum() {
  return (
    <Provider theme={defaultTheme}>
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        padding="size-250"
      >
        <TextField
          label="Name"
          labelPosition="side"
          placeholder="John Smith"
          width="size-2000"
        />
        <ActionButton marginStart="size-150">Submit</ActionButton>
      </View>
    </Provider>
  );
}
