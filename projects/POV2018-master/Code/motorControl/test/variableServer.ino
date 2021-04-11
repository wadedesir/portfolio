int mspeed;

void setup() {

}

void loop() {
  mspeed = 500;
  Particle.publish("speedchange", NULL, mspeed);

}
