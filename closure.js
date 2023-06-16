
function stressfulThought(thought, stressDamage, meditationGain, health) {

    const stressFulThought = () => {
        // console.clear()
        console.log(`thinking ${thought} health decreased ${stressDamage} HP : ${health}`);
        health -= stressDamage;
    }


    // setInterval(stressFulThought, 1000)

    const meditate = () => {
        // console.clear()
        console.log(`meditating health increased ${meditationGain} hp : ${health}`);
        health += meditationGain
    }
    // setinterval(meditate, 5000)

    stressFulThought();
    meditate();

}



stressfulThought('she was a bad person and hurted me a lot', 0.1, 0.3, 100)