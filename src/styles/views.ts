import { StyleSheet } from 'react-native'

export const viewsStyle = StyleSheet.create({
  form: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  group_inputs: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  group_buttons: {
    justifyContent: 'space-between',
    width: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    marginVertical: 30,
    alignItems: "center"
  }
})