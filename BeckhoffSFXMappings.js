({
UpdateBeckSFXInputVariables: function()
{
QMedialon.SetValueAsInteger("intSoundAmp1BOB", QMedialon.GetValueAsInteger("intBeckSFXInput1"));

QMedialon.SetValueAsInteger("intSoundAmp2", QMedialon.GetValueAsInteger("intBeckSFXInput2"));

QMedialon.SetValueAsInteger("intSoundAmp3", QMedialon.GetValueAsInteger("intBeckSFXInput3"));

QMedialon.SetValueAsInteger("intMistSwitchStatus", QMedialon.GetValueAsInteger("intBeckSFXInput4"));

QMedialon.SetValueAsInteger("intScalableSwitchStatus", QMedialon.GetValueAsInteger("intBeckSFXInput5"));

//QMedialon.SetValueAsInteger("Pump_1_Status", QMedialon.GetValueAsInteger("BeckSFXInput6"));

//QMedialon.SetValueAsInteger("Pump_2_Status", QMedialon.GetValueAsInteger("BeckSFXInput7"));

//QMedialon.SetValueAsInteger("Pump_3_Status", QMedialon.GetValueAsInteger("BeckSFXInput8"));
}

})