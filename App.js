/*
  Magyar Márk,
  2026-11-26,
  II-N
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {

  const [content, setContent] = React.useState('alma')
  const [password, setPassword] = React.useState('')

  function csinal() {
    console.log('Működik')
    setContent('Körte')

  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fejrész</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{content} {password}</Text>
        <View style={styles.form}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Név</Text>
            <TextInput style={styles.input}  onChangeText={text => setContent(text)}/>
            
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Jelszó</Text>
            <TextInput style={styles.input}  secureTextEntry={true} onChangeText={text => setPassword(text)}/>
            
          </View>
          <Button title="mehet" onPress={csinal} />
        </View>
        <Image
          source={{uri: "https://picsum.photos/200/300"}}
          style={{width:200, height:300}}
        />
      
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Image
          source={require('./assets/icon.png')}
          style={{width:100, height:100}}/>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus deserunt nam asperiores cumque harum quis reiciendis recusandae mollitia, consequuntur maiores quisquam ex vitae tempore repellat quasi accusamus laudantium, veniam molestiae.
        </Text>

        
        
      </View>
      

      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollContent: {
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#fffb01',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    
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
    fontSize: 24,
    color: 'white',
    paddingTop: 10,

  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    margin: 'auto',
    
    height: 40,
    fontSize: 28,
    
    
  },
  form: {
    fontSize: 22,
    backgroundColor: 'darkblue',
    width: '90%',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: 'white',
    margin: 3,
  },
  inputBox: {
    width: '80%',
    margin: 10,
  },
  button: {
    margin: 5,

  }

});
