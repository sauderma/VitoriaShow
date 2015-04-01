({


// Function to update the Beckhoff Console input variables
UpdateBeckConsoleInputVariables: function()
{

// Module 1

QMedialon.SetValueAsInteger("intConsoleMic", QMedialon.GetValueAsInteger("intBeckConsoleInput1"));

QMedialon.SetValueAsInteger("intConsoleKeySwitch", QMedialon.GetValueAsInteger("intBeckConsoleInput2"));

QMedialon.SetValueAsInteger("intConsoleMotionEnableSwitch", QMedialon.GetValueAsInteger("intBeckConsoleInput3"));

QMedialon.SetValueAsInteger("intConsoleGoButton", QMedialon.GetValueAsInteger("intBeckConsoleInput4"));

QMedialon.SetValueAsInteger("intConsoleStopButton", QMedialon.GetValueAsInteger("intBeckConsoleInput5"));

QMedialon.SetValueAsInteger("intConsoleEStopArmSwitch", QMedialon.GetValueAsInteger("intBeckConsoleInput6"));

QMedialon.SetValueAsInteger("intConsoleMBSettleButton", QMedialon.GetValueAsInteger("intBeckConsoleInput7"));

QMedialon.SetValueAsInteger("intConsoleMBLoadButton", QMedialon.GetValueAsInteger("intBeckConsoleInput8"));

// Module 2

QMedialon.SetValueAsInteger("intConsoleESTOP", QMedialon.GetValueAsInteger("intBeckConsoleInput9"));

QMedialon.SetValueAsInteger("intDoorSensor1", QMedialon.GetValueAsInteger("intBeckConsoleInput10"));

QMedialon.SetValueAsInteger("intDoorSensor2", QMedialon.GetValueAsInteger("intBeckConsoleInput11"));

QMedialon.SetValueAsInteger("intDoorSensor3", QMedialon.GetValueAsInteger("intBeckConsoleInput12"));

QMedialon.SetValueAsInteger("intDoorSensor4", QMedialon.GetValueAsInteger("intBeckConsoleInput13"));

QMedialon.SetValueAsInteger("intDoorSensor5", QMedialon.GetValueAsInteger("intBeckConsoleInput14"));

QMedialon.SetValueAsInteger("intDoorSensor6", QMedialon.GetValueAsInteger("intBeckConsoleInput15"));

QMedialon.SetValueAsInteger("intDoorSensor7", QMedialon.GetValueAsInteger("intBeckConsoleInput16"));

// Module 3

QMedialon.SetValueAsInteger("intMBGilderESTOP", QMedialon.GetValueAsInteger("intBeckConsoleInput17"));

QMedialon.SetValueAsInteger("intMBVFDFail", QMedialon.GetValueAsInteger("intBeckConsoleInput18"));

QMedialon.SetValueAsInteger("intMBPSUFail", QMedialon.GetValueAsInteger("intBeckConsoleInput19"));

QMedialon.SetValueAsInteger("intMBLapbar1", QMedialon.GetValueAsInteger("intBeckConsoleInput20"));

QMedialon.SetValueAsInteger("intMBLapbar2", QMedialon.GetValueAsInteger("intBeckConsoleInput21"));

QMedialon.SetValueAsInteger("intMBLapbar3", QMedialon.GetValueAsInteger("intBeckConsoleInput22"));

QMedialon.SetValueAsInteger("intMBLapbar4", QMedialon.GetValueAsInteger("intBeckConsoleInput23"));

QMedialon.SetValueAsInteger("intMBBrakeEnabled", QMedialon.GetValueAsInteger("intBeckConsoleInput24"));

// Module 4

QMedialon.SetValueAsInteger("intMBLoadingPosition", QMedialon.GetValueAsInteger("intBeckConsoleInput25"));

// QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckConsoleInput26"));

// QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckConsoleInput27"));

// QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckConsoleInput28"));

// QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckConsoleInput29"));

// QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckConsoleInput30"));

// QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckConsoleInput31"));

// QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckConsoleInput32"));

},


// Function to update the Beckhoff Special Effects input variables
UpdateBeckSFXInputVariables: function()
{
QMedialon.SetValueAsInteger("intSoundAmp1", QMedialon.GetValueAsInteger("intBeckSFXInput1"));

QMedialon.SetValueAsInteger("intSoundAmp2", QMedialon.GetValueAsInteger("intBeckSFXInput2"));

QMedialon.SetValueAsInteger("intSoundAmp3", QMedialon.GetValueAsInteger("intBeckSFXInput3"));

//QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckSFXInput4"));

//QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("intBeckSFXInput5"));

//QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("BeckSFXInput6"));

//QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("BeckSFXInput7"));

//QMedialon.SetValueAsInteger("", QMedialon.GetValueAsInteger("BeckSFXInput8"));
}

})