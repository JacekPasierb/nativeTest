import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { CameraType } from "expo-camera";
import { CameraView } from "expo-camera";
import { useCameraPermissions } from "expo-camera";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export default function CreatePostsScreen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const cameraRef: any = useRef(null);

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <>
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            We need your permission to show the camera
          </Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
        <Text>wybierz</Text>
      </>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotoUri(photo.uri);
      } catch (error) {
        console.log("Error taking photo: ", error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <G clip-path="url(#clip0_0_538)">
              <Path
                d="M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.79999 12 8.79999C10.2327 8.79999 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2Z"
                fill="#BDBDBD"
              />
              <Path
                d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                fill="#BDBDBD"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_0_538">
                <Rect width="24" height="24" fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
        </TouchableOpacity>
      </CameraView>
      <TextInput placeholder="Photo" />
      <View style={styles.postForm}>
        <TextInput
          style={styles.postName}
          placeholder="Title..."
          inputMode="text"
        />
        {/* <TextInput style={ styles.postName } placeholder="Location" inputMode="navigation"/> */}
        <TouchableOpacity style={styles.postButton} activeOpacity={0.5}>
          <Text style={styles.postButtonText}>Publicate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight:16,

    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  postForm: {
    flex: 3,
  },
  postButton: {
    backgroundColor: "#E8E8E8",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  postName: {
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
  },
});
