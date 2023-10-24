import { View, Text, Dimensions } from "react-native"
import { PieChart } from "react-native-chart-kit"

export default function Pie() {

    const screenWidth = Dimensions.get("window").width;

    const data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "#00ff00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        barRadius: 5,
        useShadowColorFromDataSet: false
    }

    return (
        <View>
            <Text>Pie Chart</Text>
            <PieChart
                data={data}
                width={screenWidth}
                height={250}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                hasLegend={true}
                paddingLeft={"15"}
                center={[10, 50]}
                absolute
            />
        </View>
    )
}