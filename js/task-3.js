const profile = {
    user: [
        {
            username: "Jacob",
        },
        {
            playTime: 300,
        }
    ],
    
    changeUsername(newName) {
        this.user.username = newName;
    }, 
    updatePlayTime(hours) {
        this.user.playTime += hours;
    },
    getInfo() {
        return `${this.user.username} has ${this.user.playTime} active hours!`;
    },
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"