import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

public class Main {
	
	private static final int DATA_COUNT = 100; // Count per Sensor
	private static final int VALUE_RANGE = 5;  // Range of Values around the last
	private static final int VALUE_MAX = 35; // Max Value
	
	private static final int ID_SENSOR_MAX = 9; // Count of Sensors
	private static final int ID_TYPE_MAX = 2; // Types of Sensors
	
	public static void main(String[] args) {
		try {
			FileWriter fw = new FileWriter(new File("./data.txt"));
			BufferedWriter w = new BufferedWriter(fw);
			
			Random r = new Random();
			
			for(int i = 1; i <= ID_SENSOR_MAX; i++) {
				int sensorId = i;
				int typeId = r.nextInt(ID_TYPE_MAX + 1);
				while(typeId == 0)
					typeId = r.nextInt(ID_TYPE_MAX + 1);
				
				int value = r.nextInt(VALUE_MAX);
				for(int j = 0; j < DATA_COUNT; j++) {
					value = createValue(value, VALUE_RANGE);
					
					if(i < DATA_COUNT - 1) {
						w.write("{ id: " + ((j + i*DATA_COUNT) - DATA_COUNT) + ", id_Sensor: " + sensorId 
								  + ", value: " + value + ", id_type: " 
								  + typeId + ", timeCreated: date },");
					} else {
						w.write("{ id: " + i + ", id_Sensor: " + sensorId 
								  + ", value: " + value + ", id_type: " 
								  + typeId + ", timeCreated: date }");
					}
					w.newLine();
					w.flush();	
				}
			}
			w.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private static int createValue(int preValue, int range) {
		Random r = new Random();
		int value = -999;
		while(value < preValue-range | value > preValue+range) {
			value = r.nextInt(VALUE_MAX);
		}
		return value;
	}
}