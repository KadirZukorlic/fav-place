import { Image, Pressable, View, StyleSheet } from 'react-native'

function PlaceItem({ place, onSelect }) {
	if (!place || place.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No places added yet - start adding some!
				</Text>
			</View>
		)
	}

	return (
		<Pressable onPress={onSelect}>
			<Image source={{ uri: place.imageUri }} />
			<View>
				<Text>{place.title}</Text>
				<Text>{place.address}</Text>
			</View>
		</Pressable>
	)
}

export default PlaceItem

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fallbackText: {
		fontSize: 16
	}
})
