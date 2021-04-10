int mspeed;

void motor(const char *event, const char *data)
{
  //11
/*  i++;
  Serial.print(i);
  Serial.print(event);
  Serial.print(", data: ");
  if (data)
    Serial.println(data);
  else
    Serial.println("NULL"); */
  //mspeed = ttl;
}

void setup() {
  // put your setup code here, to run once:
 pinMode(D1, OUTPUT);
 Particle.subscribe("speedchange", motor, MY_DEVICES);
}



void loop() {
  Particle.variable("Speed", mspeed);
  digitalWrite(D1, HIGH);
  delayMicroseconds(mspeed);
  digitalWrite(D1, LOW);
  delayMicroseconds(mspeed);
}
