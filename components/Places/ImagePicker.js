import { Alert, Button, Text, View } from 'react-native'
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus
} from 'expo-image-picker'

function ImagePicker() {
	const [cameraPesiossionInformation, requestPermission] =
		useCameraPermissions()

	async function verifyPermissions() {
		if (cameraPesiossionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission()

			return permissionResponse.granted
		}

		if (cameraPesiossionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Insuficient Permissions!',
				'You need to grant camera permissions to use this app.'
			)
			return false
		}

		return true
	}

	async function takeImageHandler() {
		const hasPermission = await verifyPermissions()

		if (!hasPermission) {
			return
		}

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5
		})
		console.log(image)
	}

	return (
		<View>
			<View></View>
			<Button title="Take Image" onPress={takeImageHandler} />
		</View>
	)
}

export default ImagePicker
