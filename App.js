import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fejrész</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Törzs</Text>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Név</Text>
            <TextInput style={styles.input}>
            </TextInput>
          </View>
        </View>
        
      </View>
      

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fffb01',
    width: '50%',
    padding: '10px',
    alignItems: 'center',
    
  },
  headerText: {
    fontSize: 24,
    color: 'darkblue',

  },
  body: {
    backgroundColor: 'purple',
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10
  },
  bodyText: {
    fontSize: '24px',
    color: 'white',
    paddingTop: 10,

  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 5,
    color: 'white',
    
  },
  form: {
    fontSize: '22px',
    backgroundColor: 'darkblue',
    width: '90%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  label: {
    color: 'white',
  },
  inputBox: {
    width: '80%'
  }

});
