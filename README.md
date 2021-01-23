# Access control system

This is an embedded system composed for two principal parts... An desktop app builded with ReactJS and ElectronJS, and a arduino circuit. The comunication is trough Serial Port.

## Desktop APP

This part is builded with ReactJS and ElectronJS, it is connected to a PostgreSQL database to manage the users and the identification cards. 

The connection with arduino use the Serial Port Library.

## Arduino circuit

The arduino circuit consist in an arduino and a RC522 sensor, the sensor reads the UID from the identification card and send it to the desktop app.

If the app send an response than allow the access, the arduino send a signal to a relay to open a door. 

## UPDATE PLANS

I'll change the communication from serial to wireless for improve escalability.
