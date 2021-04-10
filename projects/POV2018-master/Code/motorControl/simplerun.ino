void setup() {
  // put your setup code here, to run once:
 pinMode(D1, OUTPUT);
}

void loop() {
  digitalWrite(D1, HIGH);
  delayMicroseconds(1000);
  digitalWrite(D1, LOW);
  delayMicroseconds(1000);
}
