function dicFunction() {
    var Family = {
        Mother:"KVP Mother: Jescina",
        Father:"KVP Father: Jason",
        Daughter:"KVP Daughter: Hailey",
        Son:"KVP Son: Taylor",
        Dog:"KVP Dog: Oreo"
    };
    delete Family.Daughter;
    document.getElementById("Dictionary").innerHTML = Family.Daughter;
}