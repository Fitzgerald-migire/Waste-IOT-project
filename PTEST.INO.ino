//definition of constants
const int pingPin = 7; // Trigger Pin of Ultrasonic Sensor
const int echoPin = 6; // Echo Pin of Ultrasonic Sensor
const char BinID="Bin 001";//Bin ID
const int LedPin=10;//LED light pin

//importation of libraries

void setup()
{
  pinMode(pingPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(LedPin,OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  //distance calculation and measurement
  digitalWrite(pingPin, LOW);
  delay(2);
  digitalWrite(pingPin, HIGH);
  delay(10);
  digitalWrite(pingPin, LOW);
  int timetaken = pulseIn(echoPin, HIGH);
  int distance = timetaken * (0.034/2);
  Serial.print(distance);
  Serial.println(" cm");
  //int frequency = map(distance,0,30,0,20000);
  //Serial.print("Frequency is ");
  ////Serial.println(frequency);
  //tone(3,frequency);
  delay(100);
  //network check and test
  
  //check bin levels and sending bin data
  if(distance<=3)
  {
    digitalWrite(LedPin,HIGH);
    delay(10);
    Serial.print(" bin is full ");
  }  
  else
  {
    digitalWrite(LedPin,LOW);
    delay(10);
    Serial.print(" bin is not full ");
  }

  
}
