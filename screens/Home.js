import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Bar from '../components/BarChart'
import Line from '../components/LineChart';
import Pie from '../components/PieChart';
import BezierLine from '../components/BezierLineChart';

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Bar />
                <Line />
                <Pie/>
                <BezierLine/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
