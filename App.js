import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button, Image ,Input} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
const Stack = createStackNavigator();


export default class App extends React.Component {
  render() {return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home} options={{ title: 'Home' }}/>
        <Stack.Screen name="mhA" component={mhA} options={{ title: 'Căn cước công dân' }}/>
        <Stack.Screen name="mhB" component={mhB} options={{ title: 'Giấy phép lái xe' }}/>
        <Stack.Screen name="mhC" component={mhC} options={{ title: 'Thẻ sinh viên' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}
  
export const home = ({ navigation }) => {
  return (
    <View style={styles.container}>
          <Text style={styles.logo}> Trích xuất thông tin từ giấy tờ cá nhân</Text>
          <View style={styles.buttonlayout}>
            <Text style={styles.title}>Chọn loại giấy cần trích xuất</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() =>navigation.navigate('mhA')}>
              <LinearGradient
                colors={['seagreen', 'darkgreen', '#192f6a']}
                style={styles.linearGradient}>
                <Text style={styles.text}>CĂN CƯỚC CÔNG DÂN</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() =>navigation.navigate('mhB')}>
              <LinearGradient
                colors={['seagreen', 'darkgreen', '#192f6a']}
                style={styles.linearGradient}>
                <Text style={styles.text}>GIẤY PHÉP LÁI XE</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() =>navigation.navigate('mhC')}>
              <LinearGradient
              colors={['seagreen', 'darkgreen', '#192f6a']}
              style={styles.linearGradient}>
              <Text style={styles.text}>THẺ SINH VIÊN</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>  
      </View>
  );
};

export const mhA = ({ navigation, route }) => {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    };
  return (
    <View style={styles.container}>
        <View style={styles.containerlayout}>
          {(selectedImage !== null) ? (<Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />) : ( <Image source = {require('./assets/idcard.png')} style = {{ width: 200, height: 130 }} />)}
          <TouchableOpacity style={styles.button1} 
            onPress={openImagePickerAsync}>
            <Text style={styles.text1}>CHỌN FILE ẢNH TỪ MÁY</Text>
          </TouchableOpacity>
          <View style={styles.form} >
            <Text style={styles.text2}>Thông tin trên căn cước công dân</Text>
            <View style={styles.row}>
            <Text style={{marginRight: 45}}>Số :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 20}}>Họ tên :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 2}}>Ngày sinh :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 5}}>Quê quán :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 27}}>DCTT :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() =>navigation.navigate('mhA')}>
              <LinearGradient
                colors={['seagreen', 'darkgreen', '#192f6a']}
                style={styles.linearGradient1}>
                <Text style={styles.text}>Trích Xuất</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    );
};

const mhB = ({ navigation, route }) => {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
    };
  return (
   <View style={styles.container}>
        <View style={styles.containerlayout}>
          {(selectedImage !== null) ? (<Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />) : ( <Image source = {require('./assets/idcard.png')} style = {{ width: 200, height: 130 }} />)}
          <TouchableOpacity style={styles.button1} 
            onPress={openImagePickerAsync}>
            <Text style={styles.text1}>CHỌN FILE ẢNH TỪ MÁY</Text>
          </TouchableOpacity>
            <View style={styles.form} >
            <Text style={styles.text2}>Thông tin trên giấy phép lái xe</Text>
            <View style={styles.row1}>
            <Text style={{marginRight: 45}}>Số :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row1}>
            <Text style={{marginRight: 20}}>Họ tên :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row1}>
            <Text style={{marginRight: 5}}>Ngày sinh:</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row1}>
            <Text style={{marginRight: 5}}>Quốc tịch:</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row1}>
            <Text style={{marginRight: 5}}>Nơi cư trú:</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row1}>
            <Text style={{marginRight: 28}}>Hạng :</Text>
            <TextInput style={{ height: 20, width: 150, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <TouchableOpacity 
              style={styles.button2} 
              >
              <LinearGradient
                colors={['seagreen', 'darkgreen', '#192f6a']}
                style={styles.linearGradient1}>
                <Text style={styles.text}>Trích Xuất</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    );
};

const mhC = ({ navigation, route }) => {
  let [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  
  return (
   <View style={styles.container}>
        <View style={styles.containerlayout}>
          {(selectedImage !== null) ? (<Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />) : ( <Image source = {require('./assets/idcard.png')} style = {{ width: 200, height: 130 }} />)}
          <TouchableOpacity style={styles.button1} 
           onPress={openImagePickerAsync}>
            <Text style={styles.text1}>CHỌN FILE ẢNH TỪ MÁY</Text>
          </TouchableOpacity>
            <View style={styles.form} >
            <Text style={styles.text2}>Thông tin trên thẻ sinh viên</Text>
            <View style={styles.row}>
            <Text style={{marginRight: 15 , fontWeight: "" }}>Trường :</Text>
            <TextInput style={{ height: 20, width: 160, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 7}}>Mã số sv :</Text>
            <TextInput style={{ height: 20, width: 157, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 18}}>Họ tên :</Text>
            <TextInput style={{ height: 20, width: 160, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 18}}>Ngành :</Text>
            <TextInput style={{ height: 20, width: 158, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <View style={styles.row}>
            <Text style={{marginRight: 2}}>Khóa học :</Text>
            <TextInput style={{ height: 20, width: 156, borderColor: 'gray', borderWidth: 1, borderRadius:5 , backgroundColor:"#D3D3D3" }}/>
            </View>
            <TouchableOpacity 
              style={styles.button} 
              >
              <LinearGradient
                colors={['seagreen', 'darkgreen', '#192f6a']}
                style={styles.linearGradient1}>
                <Text style={styles.text}>Trích Xuất</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#0099FF' ,
    borderWidth:8, 
  },
    logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#000000",
    marginBottom:40,
    textAlign: 'center'
  },
  title:{
    color: 'white',
    fontSize:14,
    fontWeight:"bold",
    paddingBottom: 10,
  },
  buttonlayout:{
    width:280,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor: '#3366FF', 
    borderRadius: 13,
    paddingTop: 20,
    paddingBottom: 25,
    borderWidth:1,
    borderStyle: 'dashed'
  },
  button:{
    width:200,
    alignItems:"center",
    justifyContent:"center",
    marginTop:8,
    marginBottom:8,
    borderRadius:8, 
    color: "white"
  },
  button1:{
    color: "black",
    backgroundColor: "white",
    fontWeight: "bold",
    padding: 8,
    borderRadius: 5,
    margin:10,
    marginTop:20
  },
  linearGradient:{
    
    width: 200,
    height: 50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    borderColor:"white",
    borderWidth:1
  },
  text:{
    color:"white",
    fontWeight:'bold',
    fontSize:12
  },
  text1:{
    color:"black",
    fontWeight:'bold',
    fontSize:12
  },
  text2:{
    color:"black",
    fontWeight:'bold',
    fontSize:13,
    paddingTop:10,
    paddingBottom:10
  },
  containerlayout:{
    flex: 1,
    backgroundColor:"#0066CC",
    alignItems:"center",
    borderStyle:'dashed',
    borderWidth:1,
    width: "100%",
    opacity: 0.9,
    paddingTop: 20
  },
  form:{
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 250,
    height: 350,
    backgroundColor: "white",
    borderRadius:10
  },
  row: {
    paddingTop: 7,
    flexDirection:'row',
    flexWrap:'wrap',
    padding: 5,   
  },
  row1: {
    paddingTop: 7,
    flexDirection:'row',
    flexWrap:'wrap',
    padding: 2,
  },
  linearGradient1:{
    width: 120,
    marginTop: 10,
    height: 30,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:8,
  },
  thumbnail: {
    width: 200,
    height: 130,
    resizeMode: 'contain',
  },
  button2:{
    width:200,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8, 
    color: "white"
  },
});


