function MorseTranslator()
{
	var option = document.getElementById("translateOption").value;
	var msgInput = document.getElementById("msgInput");
	var msgOutput = document.getElementById("msgOutput");

	if(option == "encode")
	{
		var encoded = morse.encode(msgInput.value);
		msgOutput.value = encoded;
	}
	else if(option == "decode")
	{
		var decoded = morse.decode(msgInput.value);
		msgOutput.value = decoded;
	}
}