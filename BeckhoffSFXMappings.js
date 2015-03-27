({
UpdateBeckSFXInputVariables: function()
{
QMedialon.SetValueAsInteger("intSoundAmp1", QMedialon.GetValueAsInteger("BeckSFXInput1"));

QMedialon.SetValueAsInteger("intSoundAmp2", QMedialon.GetValueAsInteger("BeckSFXInput2"));

QMedialon.SetValueAsInteger("intSoundAmp3", QMedialon.GetValueAsInteger("BeckSFXInput3"));

QMedialon.SetValueAsInteger("intMistSwitchStatus", QMedialon.GetValueAsInteger("BeckSFXInput4"));

QMedialon.SetValueAsInteger("intScalableSwitchStatus", QMedialon.GetValueAsInteger("BeckSFXInput5"));

//QMedialon.SetValueAsInteger("Pump_1_Status", QMedialon.GetValueAsInteger("BeckSFXInput6"));

//QMedialon.SetValueAsInteger("Pump_2_Status", QMedialon.GetValueAsInteger("BeckSFXInput7"));

//QMedialon.SetValueAsInteger("Pump_3_Status", QMedialon.GetValueAsInteger("BeckSFXInput8"));
}

})